<template>
  <div class="header">
    <h1 @click.prevent="toDashboard">Zwallet</h1>
    <div class="user">
        <div class="user-photo" style="margin-top:auto; margin-bottom:auto" @click.prevent="toProfile">
            <img :src="getProfile.image" alt="">
        </div>
        <div class="user-profile">
            <div class="user-name">{{getProfile.firstName}} {{getProfile.lastname}}</div>
            <div class="user-phone">{{getProfile.mainPhone}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapActions({ getUserProfile: 'getProfile' }),
    toDashboard () {
      this.$router.push('home').catch(error => {
        if (error.name !== 'NavigationDuplicated') {
          throw error
        }
      })
    },
    toProfile () {
      this.$router.push('personal').catch(error => {
        if (error.name !== 'NavigationDuplicated') {
          throw error
        }
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
  overflow: hidden;
  cursor: pointer;
}
.user-photo img {
  height: 100%;
}
h1 {
  position: absolute;
  left: 10%;
  top: 35%;
  font-weight: bold;
  font-size: 29px;
  color: #6379F4;
  cursor: pointer;
}
@media screen and (max-width: 450px) {
  .user-profile {
    display: none;
  }
}
</style>
