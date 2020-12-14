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
    balance: [],
    receiver: {},
    transfer: [],
    detailReceiver: [],
    statusId: [],
    status: [],
    successUpdate: '',
    failedUpdate: '',
    phone: []
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
    SET_BALANCE (state, payload) {
      state.balance = payload
    },
    SET_RECEIVER (state, payload) {
      state.receiver = payload
    },
    SET_TRANSFER (state, payload) {
      state.transfer = payload
    },
    SET_DETAIL_RECEIVER (state, payload) {
      state.detailReceiver = payload
    },
    SET_STATUS_ID (state, payload) {
      state.statusId = payload
    },
    SET_STATUS (state, payload) {
      state.status = payload
    },
    SET_SUCCESS_UPDATE (state, payload) {
      state.successUpdate = payload
    },
    SET_FAILED_UPDATE (state, payload) {
      state.failedUpdate = payload
    },
    SET_PHONE (state, payload) {
      state.phone = payload
    },
    REMOVE_TOKEN (state) {
      state.token = null
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/login`, payload)
          .then((res) => {
            localStorage.setItem('token', res.data.result.token)
            localStorage.setItem('userID', res.data.result.id)
            console.log(res.data.result)
            context.commit('SET_USER', res.data.result)
            context.dispatch('interceptorRequest')
            // axios.defaults.headers.common.Authorization = `Bearer ${res.data.result.token}`
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    register ({ commit, context }, { username, email, password }) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/users/register`, {
          username: username,
          email: email,
          password: password,
          emailto: 'trisa.tsh@gmail.com'
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
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/transactions-history?type=DESC`)
          .then((res) => {
            context.commit('SET_TRANSACTIONS', res.data.result)
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
      localStorage.removeItem('token')
      localStorage.removeItem('userID')
      localStorage.removeItem('PhoneDeleteId')
      localStorage.removeItem('idTransfer')
      localStorage.removeItem('TransferStatusId')
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (err) {
        if (err.response.status === 401) {
          if (err.response.data.err.message === 'Invalid Token') {
            localStorage.removeItem('token')
            localStorage.removeItem('userID')
            localStorage.removeItem('PhoneDeleteId')
            localStorage.removeItem('idTransfer')
            localStorage.removeItem('TransferStatusId')
            context.commit('REMOVE_TOKEN')
            router.push('/auth/login')
          }
        } else if (err.response.data.err.message === 'Token Expired') {
          localStorage.removeItem('token')
          localStorage.removeItem('userID')
          localStorage.removeItem('PhoneDeleteId')
          localStorage.removeItem('idTransfer')
          localStorage.removeItem('TransferStatusId')
          context.commit('REMOVE_TOKEN')
          router.push('/auth/login')
        }
        return Promise.reject(err)
      })
    },
    getProfile (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('abcd')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/profile`)
          .then((res) => {
            console.log('abcd')
            console.log(res.data.result[0])
            console.log(localStorage.getItem('userID'))
            context.commit('SET_PROFILE', res.data.result[0])
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getReceiver (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/receiver?search=`)
          .then((res) => {
            context.commit('SET_RECEIVER', res.data.result)
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
            context.commit('SET_PHONE', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getBalance (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('abcd')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/balance`)
          .then((res) => {
            console.log('abcd')
            console.log(res.data.result[0])
            console.log(localStorage.getItem('userID'))
            context.commit('SET_BALANCE', res.data.result[0])
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    getDetailReceiver (context, payload) {
      return new Promise((resolve, reject) => {
        console.log('abcd')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/receiver/${localStorage.getItem('idTransfer')}`)
          .then((res) => {
            console.log('abcd')
            console.log(res.data.result[0])
            context.commit('SET_DETAIL_RECEIVER', res.data.result[0])
            resolve(res.data.result[0])
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
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
    insertTransfer ({ commit, context }, { amountOut, notes }) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_SERVICE_API}/transactions/transfer`, {
          amountOut: amountOut,
          notes: notes,
          accountid_transactions: localStorage.getItem('userID'),
          transferto: localStorage.getItem('idTransfer')
        })
          .then((res) => {
            resolve(res.data.result)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    insertPhone ({ commit, context }, { phoneNumber }) {
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
        console.log('abcd')
        axios.get(`${process.env.VUE_APP_SERVICE_API}/transactions/status`)
          .then((res) => {
            localStorage.setItem('TransferStatusId', res.data.result[0].lastId)
            axios.get(`http://localhost:5000/transactions/${localStorage.getItem('TransferStatusId')}`)
              .then((res) => {
                console.log(res.data.result[0])
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
    updatePassword ({ commit, context }, { password, newPassword, reenterPassword }) {
      return new Promise((resolve, reject) => {
        console.log('dimana errornya?')
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updatepassword`, {
          password: password,
          newPassword: newPassword,
          reenterPassword: reenterPassword
        })
          .then((res) => {
            console.log(res.data.result.message)
            context.commit('SET_SUCCESS_UPDATE', res.data.result.message)
            resolve(res.data.result)
            alert('password berhasil diupdate')
          })
          .catch((err) => {
            console.log(err.response.data.err.message)
            alert(err.response.data.err.message)
            context.commit('SET_FAILED_UPDATE', err.response.data.err.message)
            reject(err)
          })
      })
    },
    updateFirstName ({ commit, context }, { firstname }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updatefirstname`, {
          firstname: firstname
        })
          .then((res) => {
            console.log(res.data.result.message)
            context.commit('SET_SUCCESS_UPDATE', res.data.result.message)
            resolve(res.data.result.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updatePhone ({ commit, context }, { mainPhone }) {
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
        console.log('kebaca?')
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updateimage`, file, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((res) => {
            alert('uupdate berhasil')
            resolve(res.data.result)
          })
          .catch((err) => {
            alert(err.response.data.err.message)
            reject(err)
          })
      })
    },
    updateLastName ({ commit, context }, { lastname }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updatelastname`, {
          lastname: lastname
        })
          .then((res) => {
            console.log(res.data.result.message)
            context.commit('SET_SUCCESS_UPDATE', res.data.result.message)
            resolve(res.data.result.message)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    updateEmail ({ commit, context }, { email }) {
      return new Promise((resolve, reject) => {
        axios.put(`${process.env.VUE_APP_SERVICE_API}/users/${localStorage.getItem('userID')}/updateemail`, {
          email: email
        })
          .then((res) => {
            console.log(res.data.result.message)
            context.commit('SET_SUCCESS_UPDATE', res.data.result.message)
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
    getPhone (state) {
      return state.phone
    },
    getBalance (state) {
      return state.balance
    },
    getReceiver (state) {
      return state.receiver
    },
    getDetailReceiver (state) {
      return state.detailReceiver
    },
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
    }
  },
  modules: {
  }
})
