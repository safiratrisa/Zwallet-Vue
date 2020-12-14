<template>
  <div class="header">
    <h1>Zwallet</h1>
    <div class="user">
        <div class="user-photo" style="margin-top:auto; margin-bottom:auto">
            <!-- <img src="../../assets/img/Rectangle 25.png" alt=""> -->
            <img :src="getProfile.image" alt="">
        </div>
        <div class="user-profile">
            <div class="user-name">{{getProfile.firstName}} {{getProfile.lastname}}</div>
            <div class="user-phone">{{getProfile.mainPhone}}</div>
        </div>
        <div class="bell" style="margin-top:auto; margin-bottom:auto; float: left;">
            <img src="../../assets/img/bell.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapActions({ getUserProfile: 'getProfile' })
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
.header {
    height: 140px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-bottom: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.user {
    display: flex;
    flex-direction: row;
    float: left;
    position: absolute;
    right: 8%;
    top: 30%;
}

.user-profile {
    margin-left: 10px;
}
.user-photo {
  height: 52px;
  width: 52px;
  border-radius: 10px;
  /* border: 2px solid rgb(34, 32, 32); */

}
.user-photo img {
  width: 100%;
  /* height: 100%; */

}

.bell {
    margin-left: 10px;
}

h1 {
    position: absolute;
    left: 10%;
    top: 35%;
    font-weight: bold;
    font-size: 29px;
    color: #6379F4;
}
</style>
