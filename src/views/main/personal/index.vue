<template>
  <div class="aside2">
      <div class="profile-photo">
                        <!-- <div class="profile-photo"> -->
                            <div class="photo-edit" style="display: flex; flex-direction: row;">
                                <div class="user-image">
                                    <img :src="getProfile.image" alt="">
                                    <!-- <img src="../../../assets/img/Rectangle 25.png" alt=""> -->
                                </div>
                                <!-- <div class="image-preview" v-if="image.length > 0">
                                    <img class="preview" :src="image">
                                </div> -->
                            </div>
                            <input class="button-input" type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>

                            <div class="profile-name">
                                {{getProfile.firstName}} {{getProfile.lastname}}
                            </div>
                            <div class="profile-number">
                                {{getProfile.mainPhone}}
                            </div>
                        </div>
                        <div class="profile-change">
                            <button v-on:click="goPersonal()" class="personal-information">
                                <div class="full-button" style="">
                                    <span  class="button-text" >Personal Information</span>
                                    <span  class="button-img"><img src="arrow-left.png" alt=""></span>
                                </div>

                            </button>
                            <button v-on:click="goPassword()" class="change-password">
                                <div class="full-button" style="">
                                    <span class="button-text" >Change Password</span>
                                    <span  class="button-img"><img src="arrow-left.png" alt=""></span>

                                </div>
                            </button>
                            <button v-on:click="goPin()" class="change-pin">
                                <div class="full-button" style="">
                                    <span class="button-text" >Change PIN</span>
                                    <span class="button-img" ><img src="arrow-left.png" alt=""></span>

                                </div>
                            </button>
                            <button v-on:click="goLogout()" class="logout-">
                                <div class="full-button" style="">
                                    <span class="button-text" >Log Out</span>
                                </div>
                            </button>
                        </div>

                    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import axios from 'axios'
export default {
  name: 'Information',
  data: function () {
    return {
      image: '' // we will store base64 format of image in this string
    }
  },
  methods: {
    ...mapActions({ getUserProfile: 'getProfile', updateImage: 'updateImage', logout: 'logout' }),
    goPersonal () {
      this.$router.push('profile')
    },
    goPassword () {
      this.$router.push('change-password')
    },
    goPin () {
      this.$router.push('change-pin')
    },
    goLogout () {
      this.logout()
      this.$router.push('/main/home')
    },
    handleFileUpload () {
      this.image = this.$refs.file.files[0]
      console.log('>>>> 1st element in files array >>>> ', this.image)
      const formData = new FormData()
      formData.append('image', this.image)
      console.log('>> formData >> ', formData)
      this.$store.dispatch('updateImage', formData)
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
.button-input{
    width: 50%;
    margin-left: 25%;
}
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
.user-image {
  height: 52px;
  width: 52px;
  border-radius: 10px;
  /* border: 2px solid rgb(34, 32, 32); */

}
.user-image img {
  width: 100%;
  /* height: 100%; */

}
button {
    outline: none;
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

.right-bottom {
    display: flex;
    flex-direction: row;
}

.container {
    display: flex;
    flex-direction: row;
}

.footer {
    position: relative;
    background: #6379F4;;
    height: 80px;
    font-weight: normal;
    font-size: 16px;
    color: rgba(239, 239, 239, 0.9);
}

.user {
    display: flex;
    flex-direction: row;
    float: left;
    position: absolute;
    right: 8%;
    top: 25%;
}

.user-profile {
    margin-left: 10px;
}

.bell {
    margin-left: 10px;
}

h1 {
    position: absolute;
    left: 10%;
    top: 25%;
    font-weight: bold;
    font-size: 29px;
    color: #6379F4;
}

.navbar {
    position: relative;
    width: 100%;
    padding: 0%;
    height:100%;
}

ul {
    position: absolute;
    top: 3%;
    font-weight: bold;
    font-size: 18px;
    list-style: none;
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
}

li {
    margin-bottom: 25%;
}

nav ul li a{
    width: 100%;
    padding-left: 10%;
}

.log-out {
    margin-top: 100%;
}

#dashboard, #transfer, #topup, #profile, #logout {
    margin-left: 10px;
}

.a-profile {
    border-left: 5px solid #6379F4;
}

#profile {
    font-weight: bold;
    font-size: 18px;
    color: #6379F4;
}

#transfer, #topup, #dashboard, #logout {
    font-weight: normal;
    font-size: 18px;
    color: rgba(58, 61, 66, 0.8);
}

.copyright{
    position: absolute;
    top: 35%;
    left: 5%;
}

.contact-number {
    position: absolute;
    top: 35%;
    right: 5%;
}

.contact-email {
    margin-left: 50px;

}

.profile-photo {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 10%;
    width: 100%;
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

.profile-change {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 40%;
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
}

.user-image {
    margin-left: 5px;
}
.edit-button {
    height: 27px;
    width: 60px;
    font-size: 16px;
    color: #7A7886;
    background-color: transparent;
    border: transparent;
}

.full-button {
    width: 100%;
    position: relative;
    height: 50%;
}

.button-text {
    position: absolute;
    left: 2%;
}

.button-img {
    position: absolute;
    right: 0;
}

</style>
