<template>
  <div class="container">
            <p class="signup1">
                Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users
            </p>
            <p class="signup2">
                Transfering money is easier than ever, you can access Zwallet wherever you are. Dekstop, laptop, mobile phone? We cover all of that for you!
            </p>
            <form @submit.prevent="handleregister" class="form-box">
                <div >
                    <i class="fa fa-envelope-o"></i>
                     <input type="text" v-model.trim="$v.username.$model" placeholder="Enter your username" :class="{'is-invalid': validationStatus($v.username)}" style="margin-top:10%">
                     <div v-if="!$v.username.required" class="invalid-feedback">Username can not be empty</div>
                </div>
                <div>
                    <i class="fa fa-envelope-o"></i>
                    <input type="text" v-model.trim="$v.email.$model" placeholder="Enter your email" :class="{'is-invalid': validationStatus($v.email)}" style="margin-top:10%">
                    <div v-if="!$v.email.required" class="invalid-feedback">Email can not be empty</div>
                    <div v-if="!$v.email.email" class="invalid-feedback">Email is invalid</div>
                </div>
                <div>
                    <i class="fa fa-lock"></i>
                    <input type="text" v-model.trim="$v.password.$model" placeholder="Enter your password" :class="{'is-invalid': validationStatus($v.password)}" style="margin-top:10%">
                    <div v-if="!$v.password.required" class="invalid-feedback">Password can not be empty</div>
                    <div v-if="!$v.password.minLength" class="invalid-feedback">You must have at least 6 letters</div>
                </div>
                <button type="submit" class="signup">Sign Up</button>
                <a href="#">
                    <legend id="signin">Already have an account? Let's <span style="color: #6379F4;">log in</span> </legend>
                </a>
            </form>
        </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    username: { required }
  },
  methods: {
    ...mapActions(['register']),
    handleregister () {
      this.$v.$touch()
      if (this.username.length === 0) { return }
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      this.register(payload)
        .then((res) => {
          this.$router.push('/auth/login')
        })
        .catch((err) => {
          alert(err.response.data.err.message)
        })
    //   this.username = ''
    //   this.email = ''
    //   this.password = ''
    },
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    }
  },
  computed: {
    errorPasswordNull () {
      if (this.password.length <= 0) {
        return '*Password can not be empty'
      } else {
        return null
      }
    },
    errorPasswordLength () {
      if (this.password.length < 6) {
        return '*Password must be at least 6 characters'
      } else {
        return null
      }
    },
    errorUsernameNull () {
      if (this.username.length <= 0) {
        return '*Username can not be empty'
      } else {
        return null
      }
    },
    errorEmailNull () {
      if (this.email.length <= 0) {
        return '*Email can not be empty'
      } else {
        return null
      }
    }
  }
}
</script>

<style>
.signup{
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
  }

input {
    border: none;
    outline: none;
    width: 100%;
    border-radius: none;
    border-bottom: 1px solid rgba(58, 61, 66, 0.6);
}
.signup-btn {
    margin-top:20px;
    width: 100%;
    padding: 15px ;
    cursor: pointer;
    background: #DADADA;
    /* box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05); */
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

/* .input-box input {
    width: 100%;
    border: none;
    outline: none;
} */

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
}

@media screen and (max-width: 1024px) {
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

@media screen and (max-width: 840px) {
    .signup1, .signup2, .form-box {
        margin-right: 10%;
    }
    .signup1 {
        font-size: 37px;
        line-height: 45px;
    }

    .signup2 {
        font-size: 20px;
        line-height: 30px;
    }

    ::placeholder {
        font-size: 16px;
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
        padding-top: 40px;
    }
}

@media screen and (max-width: 576px) {
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
