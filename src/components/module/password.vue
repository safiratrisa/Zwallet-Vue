<template>
  <div v-content>
    <div class="change-pass-title">Change Password</div>
    <div class="change-pass-detail">You must enter your current password and then type your new password twice</div>
    <div class="form-box">
      <div class="input-box">
        <input v-model="password" type="password" placeholder="Current password"  >
      </div>
      <div class="input-box">
        <input v-model="newPassword" type="password" placeholder="New password"  >
      </div>
      <div class="input-box">
        <input v-model="reenterPassword" type="password" placeholder="Reenter New Password">
      </div>
      <p v-if="errorMessage" style="font-size: 12px; color: red; margin-top:2%">*{{errorMessage}}</p>
        <button @click.prevent="updatepassword()" class="change-btn">Change Password</button>
    </div>
    <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage">
      </loading>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SweetAlert from '../../mixins/alert'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'ChangePasswordComp',
  title: 'Change Password',
  data () {
    return {
      password: '',
      newPassword: '',
      reenterPassword: '',
      isLoading: false,
      fullPage: true,
      userID: parseInt(localStorage.getItem('userID'))
    }
  },
  components: {
    Loading
  },
  mixins: [SweetAlert],
  computed: {
    errorMessage () {
      if (this.newPassword !== this.reenterPassword) {
        return 'Wrong input!'
      } else {
        return null
      }
    }
  },
  methods: {
    ...mapActions({ updatePassword: 'updatePassword' }),
    updatepassword () {
      this.isLoading = true
      const payload = {
        password: this.password,
        newPassword: this.newPassword,
        reenterPassword: this.reenterPassword
      }
      this.updatePassword(payload)
        .then((res) => {
          this.alertSuccess({ title: 'Success!', text: 'Password Updated!' })
        })
        .catch((err) => {
          if (this.userID === 92) {
            this.alertError({ title: 'Failed!', text: 'You can not change this account password' })
          } else if (err.response.data.err.message === 'Wrong Password') {
            this.alertError({ title: 'Failed!', text: 'Wrong Password' })
          } else if (err.response.data.err.message === 'Password tidak sama') {
            this.alertError({ title: 'Failed!', text: 'Please Check Your New Password' })
          }
        })
        .finally(() => {
          this.isLoading = false
          this.password = ''
          this.newPassword = ''
          this.reenterPassword = ''
        })
    }
  }
}
</script>

<style scoped>
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white;
}
p {
    padding: 0;
    margin: 0;
    margin-left: 5%;
}
.change-pass-title {
    margin-left: 5%;
    margin-top: 0%;
    font-weight: bold;
    font-size: 18px;
    color: #3A3D42;
}
.change-pass-detail {
    margin-top: 3%;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #7A7886;
    padding-right: 48%;
    padding-left: 5%;
}
::placeholder {
    font-size: 16px;
}
.form-box {
    margin-top: 0%;
    margin-left: 15%;
    margin-right: 20%;
    color: rgba(58, 61, 66, 0.6);
}
.input-box {
    width: 100%;
    border-bottom: 1px solid rgba(58, 61, 66, 0.6);;
    padding-top: 60px;
    padding-bottom: 0px;
}
.input-box input {
    margin-left: 5%;
    width: 90%;
    height:8%;
    border: none;
    outline: none;
    background: transparent;
}
.change-btn {
    margin-top:10%;
    width: 100%;
    padding: 15px ;
    cursor: pointer;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    color: rgba(136, 136, 143, 1);
    font-size: 16px;
    border-radius: 12px;
    border : 0px;
    outline: none !important;
}
@media screen and (max-width: 767px) {
    .change-pass-detail {
    padding-right: 0%;
}
}

</style>
