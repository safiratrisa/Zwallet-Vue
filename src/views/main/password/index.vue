<template>
  <div class="aside2">
                        <div class="change-pass-title">Change Password</div>
                        <div class="change-pass-detail">You must enter your current password and then type your new password twice</div>
                        <div class="form-box">
                        <!-- <div class="form-box"> -->
                            <div class="input-box">
                                <i class="fa fa-lock"></i>
                                <!-- <p>{{result.password}}</p> -->
                                <input v-model="password" type="password" placeholder="Current password"  >
                                <span class="eye">
                                    <i class="fa fa-eye-slash"></i>
                                </span>
                            </div>
                            <div class="input-box">
                                <i class="fa fa-lock"></i>
                                <input v-model="newPassword" type="password" placeholder="New password"  >
                                <span class="eye">
                                    <i class="fa fa-eye-slash"></i>
                                </span>
                            </div>
                            <div class="input-box">
                                <i class="fa fa-lock"></i>
                                <input v-model="reenterPassword" type="password" placeholder="Reenter New Password">
                                <span class="eye">
                                    <i class="fa fa-eye-slash"></i>
                                </span>
                            </div>
                            <p v-if="errorMessage" style="font-size: 12px; color: red; margin-top:2%">*{{errorMessage}}</p>
                            <!-- <button type="button" class="login-btn">Change Password</button> -->
                            <button @click.prevent="updatepassword()" class="login-btn">Change Password</button>
                        </div>
                    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Dashboard',
  data () {
    return {
      password: '',
      newPassword: '',
      reenterPassword: ''
    }
  },
  computed: {
    errorMessage () {
      if (this.newPassword !== this.reenterPassword) {
        return 'Password tidak sama'
      } else {
        return null
      }
    }
  },
  methods: {
    ...mapActions({ updatePassword: 'updatePassword' }),
    updatepassword () {
      const payload = {
        password: this.password,
        newPassword: this.newPassword,
        reenterPassword: this.reenterPassword
      }
      this.updatePassword(payload)
      this.password = ''
      this.newPassword = ''
      this.reenterPassword = ''
    }
  }
}
</script>

<style scoped>
p {
    padding: 0;
    margin: 0;
    margin-left: 5%;
}
.aside2 {
    height: 678px;
    width: 850px;
    margin-bottom: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.change-pass-title {
    /* position: absolute; */
    margin-left: 5%;
    margin-top: 5%;
    font-weight: bold;
    font-size: 18px;
    color: #3A3D42;
}

.change-pass-detail {
    /* position: absolute; */
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
    /* position: absolute; */
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
    /* position: absolute; */
    margin-left: 5%;
    width: 90%;
    height:8%;
    border: none;
    outline: none;
    background: transparent;
}

.eye {
    /* position: absolute; */
    right: 0%;
}

.login-btn {
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
}

</style>
