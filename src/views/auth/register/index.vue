<template>
  <div class="container">
            <p class="signup1">
                Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
            </p>
            <p class="signup2">
                Transfering money is easier than ever, you can access Zwallet wherever you are. Dekstop, laptop, mobile phone? We cover all of that for you!
            </p>
            <form @submit.prevent="tes" class="form-box">
                <div >
                    <i class="fa fa-envelope-o"></i>
                     <input type="text" v-model.trim="$v.username.$model" placeholder="Enter your username" :class="{'is-invalid': validationStatus($v.username)}">
                     <div v-if="!$v.username.required" class="invalid-feedback">Username can not be empty</div>
                </div>
                <div>
                    <i class="fa fa-envelope-o"></i>
                    <input type="text" v-model.trim="$v.email.$model" placeholder="Enter your email" :class="{'is-invalid': validationStatus($v.email)}">
                    <div v-if="!$v.email.required" class="invalid-feedback">Email can not be empty</div>
                    <div v-if="!$v.email.email" class="invalid-feedback">Email is invalid</div>
                </div>
                <div>
                    <input type="password" v-model.trim="$v.password.$model" placeholder="Enter your password" :class="{'is-invalid': validationStatus($v.password)}">
                    <div v-if="!$v.password.required" class="invalid-feedback">Password can not be empty</div>
                    <div v-if="!$v.password.minLength" class="invalid-feedback">You must have at least 6 letters</div>
                </div>
                <button type="submit" class="signup">Sign Up</button>
                <div id="signin">Already have an account? Let's <span class="det-signin" @click.prevent="tosignin">log in</span></div>
            </form>
            <div v-if="show === 'true'">
      <div id="dimScreen">
        <div class="modal-full">
            <div>
                <div class="confirmation-pin-title">Create Pin</div>
                <div class="confirmation-pin-detail">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don' tell anyone about your Zwallet account password and the PIN.</div>
            </div>

            <div class="pin-box">
                <div class="pin">
                  <PincodeInput
                    :length= length
                    v-model="pin"
                    placeholder="_"
                    :secure= secure
                  />
                </div>
                <div class="allbutton">
                    <button class="confirm-btn" @click.prevent="close">CLOSE</button>
                    <button type="button" class="confirm-btn" @click.prevent="handleregister">CONFIRM</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage">
      </loading>
        </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import PincodeInput from 'vue-pincode-input'
import SweetAlert from '../../../mixins/alert'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'SignUp',
  title: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      show: '',
      pin: '',
      length: parseInt(6),
      secure: true,
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    PincodeInput,
    Loading
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    username: { required }
  },
  mixins: [SweetAlert],
  methods: {
    ...mapActions(['register']),
    handleregister () {
      this.$v.$touch()
      this.isLoading = true
      if (this.username.length === 0) { return }
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
        pin: this.pin
      }
      this.register(payload)
        .then((res) => {
          this.alertSuccess({ title: 'Success!', text: 'Check your email inbox/spam to activate your account' })
          this.$router.push('/auth/login')
        })
        .catch((err) => {
          console.log(err)
          this.alertError({ title: 'Failed!', text: 'Email is already existed' })
        })
        .finally(() => {
          this.isLoading = false
          this.pin = ''
        })
      this.show = 'false'
    },
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    tosignin () {
      this.$router.push('login')
    },
    tes () {
      this.show = 'true'
    },
    close () {
      this.show = 'false'
      this.pin = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.det-signin:hover {
    color: #3855f7 !important;
    font-weight: 800;
}
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white;
}
.allbutton {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.pin {
    text-align: center;
}
.pin-box {
  margin-top: 10%;
}
#dimScreen {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(41, 34, 34, 0.5);
}

.modal-full {
    height: 450px;
    width: 40%;
    min-width: 300px;
    max-width: 500px;
    border-radius: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding-top: 20px;
    padding-left: 2%;
    padding-right: 2%;
}

.confirmation-pin-title {
    font-weight: bold;
    font-size: 18px;
    color: #3A3D42;
    width: 100%;
}

.confirmation-pin-detail {
    font-weight: normal;
    font-size: 16px;
    color: rgba(58, 61, 66, 0.6);
    padding-right: 20% ;
    width: 100%;
}

.confirm-btn {
    margin-top:15%;
    width: 200px;
    height: 57px;
    cursor: pointer;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    color: rgba(136, 136, 143, 1);
    font-size: 16px;
    border-radius: 12px;
    border : none;
    outline: none !important;
}
.det-signin {
     color: #6379F4;
     cursor: pointer;
}
.signup{
    margin-top: 20px;
    width: 100%;
    outline: none !important;
    padding: 15px ;
    cursor: pointer;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    color: rgba(136, 136, 143, 1);
    font-size: 16px;
    border-radius: 12px;
    border: 0px;
  }

input {
    border: none;
    outline: none;
    width: 100%;
    border-radius: none;
    border-bottom: 1px solid rgba(58, 61, 66, 0.6);
    margin-top: 5%;
}
.signup-btn {
    margin-top:20px;
    width: 100%;
    padding: 15px ;
    cursor: pointer;
    background: #DADADA;
    color: rgba(136, 136, 143, 1);
    font-size: 16px;
    border-radius: 12px;
    border: none;
    outline: none;
}
.signup1 {
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 25%;
    margin-bottom: 0%;
    font-family: NunitoSans;
    font-style: normal;
    font-weight: bold;
    font-size: 37px;
    line-height: 45px;
    color: #3A3D42;
}

.signup2 {
    margin-left: 10%;
    margin-right: 25%;
    margin-top: 2%;
    margin-bottom: 2%;
    font-family: NunitoSans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: rgba(58, 61, 66, 0.6);
}

::placeholder {
    font-size: 16px;
}

.form-box {
    margin-left: 10%;
    margin-right: 25%;
    color: rgba(58, 61, 66, 0.6);
}

.input-box {
    border-bottom: 1px solid rgba(58, 61, 66, 0.6);;
    padding-top: 30px;
    padding-bottom: 2px;
}

a {
    text-decoration: none;
}

#signin {
    color: rgba(58, 61, 66, 0.6);
    font-family: NunitoSans;
    font-size: 12pt;
    margin-top: 30px;
    text-align: center;
    text-decoration: none;
    margin-bottom: 10%;
}
form {
    border: 2px solid white;
    height: 100%;
}

@media screen and (max-width: 1155px) {
    .allbutton {
    flex-direction: column-reverse;
    align-items: center;
}
.confirm-btn {
    margin-top: 10%;
}
}

@media screen and (max-width: 1155px) {
    .signup1 {
        font-size: 26px;
        line-height: 40px;
        margin-bottom: 5px;
    }
    .signup2 {
        margin-top: 0%;
        margin-bottom: 0%;
        font-size: 16px;
    }
    ::placeholder {
    font-size: 12px;
    }
    .input-box {
        padding-top: 25px;
    }
    #signin {
    font-size: 10pt;
}
.input-box {
    border-bottom: 1px solid rgba(58, 61, 66, 0.6);;
    padding-top: 10px;
    padding-bottom: 2px;
}
}

@media screen and (max-width: 888px) {
    .signup1 {
        font-size: 25px;
        line-height: 40px;
    }
    .signup2 {
        font-size: 16px;
        line-height: 30px;
    }
    ::placeholder {
        font-size: 14px;
    }
    .signup-btn {
        font-size: 16px;
    }
    a {
        text-decoration: none;
    }
    #signin {
        font-size: 12pt;
    }
    .input-box {
        padding-top: 30px;
    }
}

@media screen and (max-width: 840px) {
    .signup1, .signup2, .form-box {
        margin-right: 10%;
    }
}

@media screen and (max-width: 330px) {
    .signup1 {
        font-size: 20px;
        line-height: 30px;
    }

    .signup2 {
        font-size: 12px;
        line-height: 20px;
    }

    ::placeholder {
        font-size: 12px;
    }

    #forgot-pass {
        font-size: 10pt;
    }

    .signup-btn {
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    #signin {
        font-size: 10pt;
    }
    .input-box {
        padding-top: 30px;
    }
}
</style>
