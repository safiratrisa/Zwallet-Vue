<template>
        <div class="container">
    <p class="text1"> Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users </p>
    <p class="text2"> Transfering money is easier than ever, you can access Zwallet wherever you are. Dekstop, laptop, mobile phone? We cover all of that for you! </p>
    <form @submit.prevent="inputemail" class="form-box">
        <div >
            <input type="text" v-model.trim="$v.email.$model" placeholder="Enter your email" :class="{'is-invalid': validationStatus($v.email)}" style="margin-top: 5%">
            <div v-if="!$v.email.required" class="invalid-feedback">Email required</div>
            <div v-if="!$v.email.email" class="invalid-feedback">The email is not valid</div>
        </div>
        <button type="submit" class="login">Submit</button>
    </form>
    <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage">
      </loading>
</div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
import SweetAlert from '../../../mixins/alert'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'ForgotPass',
  title: 'Forgot Password',
  data () {
    return {
      email: '',
      isLoading: false,
      fullPage: true
    }
  },
  validations: {
    email: { required, email }
  },
  components: {
    Loading
  },
  mixins: [SweetAlert],
  methods: {
    ...mapActions({ forgotPassword: 'forgotPassword' }),
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    inputemail () {
      this.$v.$touch()
      this.isLoading = true
      const payload = {
        email: this.email
      }
      this.forgotPassword(payload)
        .then(() => {
          this.alertSuccess({ title: 'Success!', text: 'Check your email inbox/spam to continue' })
          this.email = ''
        })
        .catch((err) => {
          this.alertError({ title: 'Failed!', text: err.response.data.err.message })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white;
}
.det-signup {
     color: #6379F4;
     cursor: pointer;
}
.text1 {
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

.text2 {
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

input {
    border: none;
    outline: none;
    // border: none;
    width: 100%;
    border-radius: none;
    border-bottom: 1px solid rgba(58, 61, 66, 0.6);
}

::placeholder {
    /* border: 2px solid black; */
    font-size: 16px;
}

.form-box {
    margin-left: 10%;
    margin-right: 25%;
    color: rgba(58, 61, 66, 0.6);
}

.input-box {
    padding-top: 60px;
    padding-bottom: 5px;
}
.login{
    margin-top: 20px;
    width: 100%;
    outline: none;
    padding: 15px ;
    cursor: pointer;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    color: rgba(136, 136, 143, 1);
    font-size: 16px;
    border-radius: 12px;
    border: 0px;
    margin-bottom: 10%;
  }
#forgot-pass {
    margin-top: 20px;
    color: #6379F4;
    // color: rgba(58, 61, 66, 0.6);
    font-family: NunitoSans;
    font-size: 12pt;
    text-align: right;
    text-decoration: none;
    cursor: pointer;
}

a {
    text-decoration: none;
}

#signup {
    color: rgba(58, 61, 66, 0.6);
    font-family: NunitoSans;
    font-size: 12pt;
    margin-top: 30px;
    text-align: center;
    text-decoration: none;
}
form {
    border: 2px solid white;
    height: 100%;
}

@media screen and (max-width: 1024px) {
    .text1 {
        font-size: 26px;
        line-height: 40px;
        margin-bottom: 5px;
    }
    .text2 {
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

    #forgot-pass {
    font-size: 10pt;
    }
    #signup {
    font-size: 10pt;
}
}

@media screen and (max-width: 840px) {
    .text1, .text2, .form-box {
        margin-right: 10%;
    }
    .text1 {
        font-size: 37px;
        line-height: 45px;
    }

    .text2 {
        font-size: 20px;
        line-height: 30px;
    }

    ::placeholder {
        font-size: 16px;
    }

    #forgot-pass {
        font-size: 12pt;
    }

    .login-btn {
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    #signup {
        font-size: 12pt;
    }
    .input-box {
        padding-top: 60px;
    }
}

@media screen and (max-width: 576px) {
    .text1 {
        font-size: 25px;
        line-height: 40px;
    }

    .text2 {
        font-size: 16px;
        line-height: 30px;
    }

    ::placeholder {
        font-size: 14px;
    }

    #forgot-pass {
        font-size: 12pt;
    }

    .login-btn {
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    #signup {
        font-size: 12pt;
    }
    .input-box {
        padding-top: 30px;
    }
}

@media screen and (max-width: 320px) {
    .text1 {
        font-size: 20px;
        line-height: 30px;
    }

    .text2 {
        font-size: 12px;
        line-height: 20px;
    }

    ::placeholder {
        font-size: 12px;
    }

    #forgot-pass {
        font-size: 10pt;
    }

    .login-btn {
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    #signup {
        font-size: 10pt;
    }
    .input-box {
        padding-top: 30px;
    }
}
</style>
