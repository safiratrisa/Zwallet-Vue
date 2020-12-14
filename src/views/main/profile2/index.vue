<template>
  <div class="aside2">
                        <div class="pers-info-title">Personal Information</div>
                        <div class="pers-info-detail">We got your personal information from the sign up process. If you want to make changes on your information, contact our support</div>
                        <div class="pers-info" >
                        <!-- <div class="pers-info"> -->
                            <div class="first-name">
                                <div class="firstname" >
                                    <div class="up-title">
                                    First Name
                                </div>
                                <div class="up-value">
                                    {{getProfile.firstName}}
                                </div>
                                    <input v-model="firstname" type="text" placeholder="Edit First Name" >
                                    <button @click="updatefirstname()" class="firstname-button">Edit</button>
                                </div>
                            </div>
                            <div class="last-name">
                                <div class="lastname">
                                    <div class="up-title">
                                    Last Name
                                </div>
                                <div class="up-value">
                                    {{getProfile.lastname}}
                                </div>
                                <div class="editfirstName">
                                    <input v-model="lastname" type="text" placeholder="Edit Last Name" >
                                    <button v-on:click="updatelastname()" class="firstname-button">Edit</button>
                                </div>
                                </div>
                            </div>
                            <div class="verified-email">
                                <div class="verifiedemail">
                                    <div class="up-title">
                                    Verified Email
                                </div>
                                <div class="up-value">
                                    {{getProfile.email}}
                                </div>
                                <div class="editfirstName">
                                    <input v-model="email" type="text" placeholder="Edit Email" >
                                    <button v-on:click="updateemail()" class="firstname-button">Edit</button>
                                </div>
                                </div>
                            </div>
                            <div class="pers-phone">
                                <div class="pers-phone-full" style="padding-top: 2%">
                                    <div class="up-title">
                                        <div class="up-title">Phone Number</div>
                                        <div class="up-value">{{getProfile.mainPhone}}</div>
                                    </div>
                                    <div>
                                        <button v-on:click="managePhone()" class="manage-button">
                                            Manage
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'personal2',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: ''
    }
  },
  methods: {
    ...mapActions({ getUserProfile: 'getProfile', updateFirstName: 'updateFirstName', updateLastName: 'updateLastName', updateEmail: 'updateEmail' }),
    managePhone () {
      this.$router.push('manage-phone')
    },
    updatefirstname () {
      const payload = {
        firstname: this.firstname
      }
      this.updateFirstName(payload)
      this.$router.push('/main/profile')
    },
    updatelastname () {
      const payload = {
        lastname: this.lastname
      }
      this.updateLastName(payload)
      this.$router.push('/main/profile')
    },
    updateemail () {
      const payload = {
        email: this.email
      }
      this.updateEmail(payload)
      this.$router.push('/main/profile')
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
input {
    border: none;
    outline: none;
    border-bottom: 1px solid #7A7886;
    width: 70%;
    margin-right: 5%;
}

.first-name {
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
}
.last-name {
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
}
.verified-email {
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
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

.pers-info-title {
    /* position: absolute; */
    margin-left: 5%;
    top: 5%;
    font-weight: bold;
    font-size: 18px;
    color: #3A3D42;
}

.pers-info-detail {
    /* position: absolute; */
    top: 10%;
    font-weight: normal;
    font-size: 16px;
    color: #7A7886;
    padding-right: 48%;
    padding-left: 5%;
}

.pers-info {
    /* position: absolute; */
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    top: 25%;
}

.first-name, .last-name, .verified-email, .pers-phone {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 120px;
    width: 100%;
    margin-bottom: 2%;
    padding-left: 2%;
    /* padding-right: 3%; */
    padding-top: 1%;
    /* border: 2px solid black; */
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

.up-value {
    font-weight: bold;
    font-size: 22px;
    color: #514F5B;
    width: 100%;
}

.manage-button {
    border: none;
    font-weight: 600;
    font-size: 16px;
    color: #6379F4;
    background-color: transparent;
    margin-top: 5%;
}

.add-button {
    border: none;
    font-weight: 600;
    font-size: 16px;
    color: #6379F4;
    background-color: transparent;
}

</style>
