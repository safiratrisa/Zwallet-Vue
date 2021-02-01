<template>
    <div v-content>
        <div class="pers-info-title">Personal Information</div>
        <div class="pers-info-detail">We got your personal information from the sign up process. If you want to make changes on your information, contact our support</div>
        <div class="pers-info" >
            <div class="first-name">
                <div class="firstname" >
                    <div class="up-title"><p>First Name</p></div>
                    <div class="up-value">
                        <p>{{getProfile.firstName}}</p>
                            <i class="fas fa-pen" @click.prevent='editfirstname'></i>
                    </div>
                    <div v-if="showfirstname === 'true'">
                        <input v-model="firstname"  type="text" class="form-control border-0 bg-light" placeholder="Edit First Name" @keypress.enter="updatefirstname()"/>
                    </div>
                </div>
            </div>
            <div class="last-name">
                <div class="lastname">
                    <div class="up-title">Last Name</div>
                        <div class="up-value">
                            <p>{{getProfile.lastname}}</p>
                                <i class="fas fa-pen" @click.prevent='editlastname'></i>
                        </div>
                        <div v-if="showlastname === 'true'">
                            <input v-model="lastname"  type="text" class="form-control border-0 bg-light" placeholder="Edit Last Name" @keypress.enter="updatelastname()" />
                        </div>
                    </div>
                </div>
                <div class="verified-email">
                    <div class="verifiedemail">
                        <div class="up-title">Verified Email</div>
                        <div class="up-value">
                            <p>{{getProfile.email}}</p>
                                <i class="fas fa-pen" @click.prevent='editemail'></i>
                        </div>
                        <div v-if="showemail === 'true'">
                            <input v-model="email"  type="text" class="form-control border-0 bg-light" placeholder="Edit Email" @keypress.enter="updateemail()" />
                        </div>
                    </div>
                </div>
                <div class="pers-phone">
                    <div class="pers-phone-full" style="padding-top: 2%">
                        <div class="up-title">
                            <div class="up-title">Phone Number</div>
                            <div class="up-value"><p>{{getProfile.mainPhone}}</p></div>
                        </div>
                    <div>
                        <div v-purple v-on:click="managePhone()" class="manage-button">Manage</div>
                    <!-- <button v-purple v-on:click="managePhone()" class="manage-button">Manage</button> -->
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
import { mapGetters, mapActions } from 'vuex'
import SweetAlert from '../../mixins/alert'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'profileComp',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      showlastname: '',
      showfirstname: '',
      showemail: '',
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  mixins: [SweetAlert],
  methods: {
    ...mapActions({ getUserProfile: 'getProfile', updateFirstName: 'updateFirstName', updateLastName: 'updateLastName', updateEmail: 'updateEmail' }),
    managePhone () {
      this.$router.push('manage-phone')
    },
    updatefirstname () {
      this.isLoading = true
      const payload = {
        firstname: this.firstname
      }
      this.updateFirstName(payload)
        .then(() => {
          this.alertSuccess({ title: 'Success!', text: 'Updated' })
          this.getUserProfile()
          this.firstname = ''
        })
        .finally(() => {
          this.isLoading = false
        })
      this.showfirstname = 'false'
    },
    updatelastname () {
      this.isLoading = true
      const payload = {
        lastname: this.lastname
      }
      this.updateLastName(payload)
        .then(() => {
          this.alertSuccess({ title: 'Success!', text: 'Updated' })
          this.getUserProfile()
          this.lastname = ''
        })
        .finally(() => {
          this.isLoading = false
        })
      this.showlastname = 'false'
    },
    updateemail () {
      this.isLoading = true
      const payload = {
        email: this.email
      }
      this.updateEmail(payload)
        .then(() => {
          this.alertSuccess({ title: 'Success!', text: 'Updated' })
          this.getUserProfile()
          this.email = ''
        })
        .finally(() => {
          this.isLoading = false
        })
      this.showemail = 'false'
    },
    editlastname () {
      if (this.showlastname === 'true') {
        this.showlastname = 'false'
      } else {
        this.showlastname = 'true'
      }
    },
    editfirstname () {
      if (this.showfirstname === 'true') {
        this.showfirstname = 'false'
      } else {
        this.showfirstname = 'true'
      }
    },
    editemail () {
      if (this.showemail === 'true') {
        this.showemail = 'false'
      } else {
        this.showemail = 'true'
      }
    }
  },
  computed: {
    ...mapGetters(['getProfile'])
  },
  mounted () {
    this.getUserProfile()
  }
}
</script>

<style scoped>
.manage-button:hover{
    color: #3855f7 !important;
}
i {
    cursor: pointer;
}
i:hover {
    color: black;
}
.up-value {
    display: flex;
    flex-direction: row;
    align-items: center;
}
input {
    border: none;
    outline: none;
    border-bottom: 1px solid #7A7886;
    width: 100%;
    margin-top: 1%;
}
.pers-info-title {
    font-weight: bold;
    font-size: 18px;
    color: #3A3D42;
}
.pers-info-detail {
    /* position: absolute; */
    font-weight: normal;
    font-size: 16px;
    color: #7A7886;
    padding-right: 48%;
    margin-bottom: 3%;
}
.pers-info {
    width: 100%;
}

.first-name, .last-name, .verified-email, .pers-phone {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    min-height: 100px;
    width: 100%;
    margin-bottom: 2%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 1%;
    padding-top: 1%;
    position: relative;
}

.pers-phone-full {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.up-title {
    font-weight: normal;
    font-size: 16px;
    color: #7A7886;
    margin-bottom: 1%;
    width: 100%;
}
.up-value p {
    font-weight: bold;
    font-size: 22px;
    color: #514F5B;
    width: 100%;
    margin: 0;
}
.manage-button {
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
}
@media screen and (max-width: 767px) {
    .pers-info-detail {
    padding-right: 0%;
}
}
</style>
