<template>
  <div v-content>
    <div class="profile-photo">
      <div class="photo-edit" style="display: flex; flex-direction: row;">
        <div class="user-image">
          <img :src="getProfile.image" alt="">
        </div>
      </div>
      <div class="input-photo">
        <label v-purple for="choose" class="btn-yellow btn-profile-1 d-flex justify-content-center align-items-center">
          <i class="fas fa-edit"></i> Change Image
        </label>
        <input type="file" id="choose" placeholder="Choose Photo" ref="file" v-on:change="handleFileUpload()">
      </div>
      <div class="profile-name">{{getProfile.firstName}} {{getProfile.lastname}}</div>
      <div class="profile-number">{{getProfile.mainPhone}}</div>
    </div>
    <div class="profile-change">
      <button v-on:click="goPersonal()" class="personal-information">Personal Information</button>
      <button v-on:click="goPassword()" class="change-password">Change Password</button>
      <button v-on:click="goPin()" class="change-pin">Change PIN</button>
      <button v-on:click="goLogout()" class="logout-">Log Out</button>
      <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage">
      </loading>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
// import axios from 'axios'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
import SweetAlert from '../../mixins/alert'
export default {
  name: 'InformationComp',
  mixins: [SweetAlert],
  data: function () {
    return {
      image: '', // we will store base64 format of image in this string
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  methods: {
    ...mapActions({ getUserProfile: 'getProfile', updateImage: 'updateImage', logout: 'logout' }),
    goPersonal () {
      this.$router.push('profile')
      Swal.fire({
        text: 'if you wish to edit your profile information, click the pencil icon, input your new profile information, and press enter. '
      })
    },
    goPassword () {
      this.$router.push('change-password')
    },
    goPin () {
      this.$router.push('changepin')
    },
    goLogout () {
      this.logout()
      this.$router.push('/auth/login')
    },
    // doAjax () {
    //   this.isLoading = true
    //   setTimeout(() => {
    //     this.isLoading = false
    //   }, 5000)
    // },
    handleFileUpload () {
      this.isLoading = true
      this.image = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('image', this.image)
      this.$store.dispatch('updateImage', formData)
        .then(() => {
          this.alertSuccess({ title: 'Success!', text: 'Updated Successfully' })
          this.getUserProfile()
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
    ...mapGetters(['getProfile'])
  },
  mounted () {
    this.getUserProfile()
  }
}
</script>

<style scoped>
label:hover {
    color: #3855f7 !important;
    font-weight: 800;
}
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white !important;
}
button:hover div {
    font-weight: 900;
    color: black;
}
#choose {
    display: none;
}
label {
    font-weight: 700;
    cursor: pointer
}
.user-image {
  height: 100px;
  width: 100px;
  border-radius: 10px;
  overflow: hidden;
}
.user-image img {
  height: 100%;
}
.profile-photo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5%;
    margin-top: 5%;
}

.photo-edit {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
}

.profile-name {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: #4D4B57;
    margin-bottom: 2%;
}

.profile-number {
    text-align: center;
    font-family: NunitoSans;
    font-weight: normal;
    font-size: 16px;
    color: #7A7886;
}

.personal-information, .change-password, .change-pin, .logout- {
    margin-bottom: 3%;
    height: 64px;
    border-radius: 10px;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    font-weight: bold;
    font-size: 16px;
    color: #4D4B57;
    background: #E5E8ED;
    border: none;
    outline: none !important;
}

</style>
