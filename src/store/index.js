import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
// axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: null || localStorage.getItem('token'),
    userID: null || localStorage.getItem('userID'),
    transactions: [],
    profile: [],
    profileFriend: [],
    balance: [],
    receiver: {},
    transfer: [],
    // detailReceiver: [],
    statusId: [],
    status: [],
    successUpdate: '',
    failedUpdate: '',
    phone: [],
    phoneTotal: {},
    pagination: null,
    paginationTrans: null
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    SET_TRANSACTIONS (state, payload) {
      state.transactions = payload
    },
    SET_PROFILE (state, payload) {
      state.profile = payload
    },
    SET_PROFILE_FRIEND (state, payload) {
      state.profileFriend = payload
    },
    SET_BALANCE (state, payload) {
      state.balance = payload
    },
    SET_RECEIVER (state, payload) {
      state.receiver = payload
    },
    SET_TRANSFER (state, payload) {
      state.transfer = payload
    },
    // SET_DETAIL_RECEIVER (state, payload) {
    //   state.detailReceiver = payload
    // },
    SET_STATUS_ID (state, payload) {
      state.statusId = payload
    },
    SET_STATUS (state, payload) {
      state.status = payload
    },
    SET_PHONE (state, payload) {
      state.phone = payload
    },
    SET_PHONE_TOTAL (state, payload) {
      state.phoneTotal = payload
    },
    REMOVE_TOKEN (state) {
      state.token = null
      state.transactions = []
      state.profile = []
      state.balance = []
      state.receiver = {}
      state.transfer = []
      state.detailReceiver = []
      state.statusId = []
      state.status = []
      state.successUpdate = ''
      state.failedUpdate = ''
      state.phone = []
      state.user = {}
      state.userID = null
    },
    SET_PAGINATION (state, payload) {
      state.pagination = payload
    },
    SET_PAGINATION_TRANS (state, payload) {
      state.paginationTrans = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/login`, payload)
          .then((res) => {
            localStorage.setItem('token', res.data.result.token)
            localStorage.setItem('userID', res.data.result.id)
            context.commit('SET_USER', res.data.result)
            context.dispatch('interceptorRequest')
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    register ({ commit, context }, { username, email, password, pin }) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/register`, {
          username: username,
          email: email,
          password: password,
          pin: pin,
          emailto: email
        })
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getTransactions (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/transactions-history?sort=${payload.sort}&page=${payload.noPage}&limit=${payload.limit}`)
          .then((res) => {
            context.commit('SET_TRANSACTIONS', res.data.result.transactions)
            context.commit('SET_PAGINATION_TRANS', res.data.result.pagination)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        // Do something before request is sent
        return config
      }, function (error) {
        // Do something with request error
        return Promise.reject(error)
      })
    },
    logout (context) {
      context.commit('REMOVE_TOKEN')
      localStorage.clear()
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (err) {
        if (err.response.status === 401) {
          if (err.response.data.err.message === 'Invalid Token' || err.response.data.err.message === 'Token Expired') {
            localStorage.removeItem('token')
            localStorage.removeItem('userID')
            localStorage.removeItem('PhoneDeleteId')
            localStorage.removeItem('idTransfer')
            localStorage.removeItem('TransferStatusId')
            context.commit('REMOVE_TOKEN')
            router.push('/auth/login')
          }
        }
        return Promise.reject(err)
      })
    },
    getProfile (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/profile`)
          .then((res) => {
            context.commit('SET_PROFILE', res.data.result[0])
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getFriendProfile (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('idTransfer')}/profile`)
          .then((res) => {
            context.commit('SET_PROFILE_FRIEND', res.data.result[0])
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getReceiver (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/friends?firstname=${payload.search}&page=${payload.noPage}`)
          .then((res) => {
            context.commit('SET_RECEIVER', res.data.result.users)
            context.commit('SET_PAGINATION', res.data.result.pagination)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getAllPhone (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/phone/${localStorage.getItem('userID')}/user`)
          .then((res) => {
            context.commit('SET_PHONE', res.data.result.phones)
            context.commit('SET_PHONE_TOTAL', res.data.result.total)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getBalance (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/balance`)
          .then((res) => {
            context.commit('SET_BALANCE', res.data.result[0])
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // getDetailReceiver (context, payload) {
    //   return new Promise((resolve, reject) => {
    //     axios.get(`${process.env.VUE_APP_SERVICE_API}/receiver/${localStorage.getItem('idTransfer')}`)
    //       .then((res) => {
    //         context.commit('SET_DETAIL_RECEIVER', res.data.result[0])
    //         resolve(res.data.result[0])
    //       })
    //       .catch((err) => {
    //         reject(err)
    //       })
    //   })
    // },
    deletePhone (context, payload) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_SERVICE_API}/phone/${localStorage.getItem('PhoneDeleteId')}`)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    insertTransfer ({ context }, { amountOut, notes, pin }) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/gotransfer/${localStorage.getItem('userID')}/${localStorage.getItem('idTransfer')}`, {
          amountOut: amountOut,
          notes: notes,
          pin: pin
        })
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    insertPhone ({ context }, { phoneNumber }) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/phone`, {
          phoneNumber: phoneNumber,
          accountid_phone: localStorage.getItem('userID')
        })
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getTransferStatus (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/transactions/status`)
          .then((res) => {
            localStorage.setItem('TransferStatusId', res.data.result[0].lastId - 1)
            axios.get(`${process.env.VUE_APP_SERVICE_API}/transactions/${localStorage.getItem('TransferStatusId')}`)
              .then((res) => {
                context.commit('SET_STATUS', res.data.result[0])
                resolve(res.data.result[0])
              })
              .catch((err) => {
                reject(err)
              })
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updatePassword ({ context }, { password, newPassword, reenterPassword }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updatepassword`, {
          password: password,
          newPassword: newPassword,
          reenterPassword: reenterPassword
        })
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updatePin ({ context }, { pin, newpin }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updatepin`, {
          pin: pin,
          newPin: newpin
        })
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateFirstName ({ context }, { firstname }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updatefirstname`, {
          firstname: firstname
        })
          .then((res) => {
            resolve(res.data.result.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    forgotPassword ({ context }, { email }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/reset`, {
          email: email
        })
          .then((res) => {
            resolve(res.data.result.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    resetPassword ({ context }, { code, newPassword, reenterPassword }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/resetpassword`, {
          reset: code,
          newPassword: newPassword,
          reenterPassword: reenterPassword
        })
          .then((res) => {
            resolve(res.data.result.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updatePhone ({ context }, { mainPhone }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updatephone`, {
          mainPhone: mainPhone
        })
          .then((res) => {
            resolve(res.data.result.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateImage (context, file) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updateimage`, file, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateLastName ({ context }, { lastname }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updatelastname`, {
          lastname: lastname
        })
          .then((res) => {
            resolve(res.data.result.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateEmail ({ context }, { email }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updateemail`, {
          email: email
        })
          .then((res) => {
            resolve(res.data.result.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getUser (state) {
      return state.user
    },
    getTransfer (state) {
      return state.transfer
    },
    isLogin (state) {
      return state.token !== null
    },
    getTransactions (state) {
      return state.transactions
    },
    getProfile (state) {
      return state.profile
    },
    getProfileFriend (state) {
      return state.profileFriend
    },
    getPhone (state) {
      return state.phone
    },
    getPhoneTotal (state) {
      return state.phoneTotal
    },
    getBalance (state) {
      return state.balance
    },
    getReceiver (state) {
      return state.receiver
    },
    // getDetailReceiver (state) {
    //   return state.detailReceiver
    // },
    getTransferStatusId (state) {
      return state.statusId
    },
    getTransferStatus (state) {
      return state.status
    },
    getSuccessUpdate (state) {
      return state.successUpdate
    },
    getFailedUpdate (state) {
      return state.failedUpdate
    },
    getPagination (state) {
      return state.pagination
    },
    getPaginationTrans (state) {
      return state.paginationTrans
    }
  },
  modules: {
  }
})
