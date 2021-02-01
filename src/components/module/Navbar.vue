<template>
  <div class="aside1">
    <div class="navbar">
      <div class="up">
        <div class="option" @click.prevent="toDashboard">
          <div class="box">
            <i class="fas fa-home fa-lg"></i>
          </div>
          <p id="dashboard">Dashboard</p>
        </div>
        <div class="option" @click.prevent="toTransfer">
          <div class="box">
            <i class="fas fa-arrow-up fa-lg"></i>
          </div>
          <p id="transfer">Transfer</p>
        </div>
        <div class="option" @click.prevent="toTopup">
          <div class="box">
            <i class="fas fa-plus fa-lg"></i>
          </div>
          <p id="topup">Top Up</p>
        </div>
        <div class="option" @click.prevent="toProfile">
          <div class="box">
            <i class="fas fa-user fa-lg"></i>
          </div>
          <p id="profile">Profile</p>
        </div>
        <div class="option" @click.prevent="handlelogout">
          <div class="box">
            <i class="fas fa-sign-out-alt fa-lg"></i>
          </div>
          <p id="logout">Logout</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions({ logout: 'logout' }),
    handlelogout () {
      this.logout()
      this.$router.push('/auth/login')
    },
    toDashboard () {
      this.$router.push('home').catch(error => {
        if (error.name !== 'NavigationDuplicated') {
          throw error
        }
      })
    },
    toTransfer () {
      this.$router.push('receiver').catch(error => {
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
    },
    toTopup () {
      this.$router.push('topup').catch(error => {
        if (error.name !== 'NavigationDuplicated') {
          throw error
        }
      })
    }
  }
}
</script>

<style scoped>
.box{
  padding-top: 1%;
  width: 30px;
  height: 30px;
  margin-right: 5%;
  margin-left: 5%;
}
.navbar {
  padding: 0;
}
.option:hover {
  border-left: 5px solid #6379F4;
}
.option:hover .box i {
  color: #6379F4;
}
.option:hover #transfer, .option:hover #topup, .option:hover #profile, .option:hover #logout, .option:hover #dashboard {
  color: #6379F4;
  font-weight: 800;
}
i {
  color :rgba(58, 61, 66, 0.8)
}
.up {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.option{
  display: flex;
  flex-direction: row;
  text-align: left;
  width: 100%;
  margin-bottom: 10%;
  cursor: pointer;
  padding-top: 10px;
}
.aside1 {
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  overflow: hidden;
}
.navbar {
  height: 100%;
}

#transfer, #topup, #profile, #logout, #dashboard {
  margin-left: 10px;
  padding-left: 0;
  font-weight: normal;
  font-size: 18px;
  color: rgba(58, 61, 66, 0.8);
}

@media screen and (max-width: 1199px) {
  .option {
    margin: 0;
    padding-top: 1%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .option:hover {
    border-left: none;
  border-bottom: 5px solid #6379F4;
}
  .navbar {
    flex-direction: row;
    justify-content: left;
  }
  .aside1 {
    width: 100%;
    padding: 0;
  }
  .up {
    flex-direction: row;
    justify-content: space-between;
  }
  .box{
  margin-right: 0%;
  margin-left: 0%;
}
}

@media screen and (max-width: 991px) {
  #dashboard, #transfer, #topup, #profile, #logout {
    display: none;
  }
  .option {
    justify-content: center;
    align-items: center;
  }
  .box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
}
@media screen and (max-width: 991px) {
  #dashboard, #transfer, #topup, #profile, #logout {
    display: none;
  }
  .option {
    justify-content: center;
    align-items: center;
  }
}
</style>
