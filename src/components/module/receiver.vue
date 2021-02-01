<template>
  <div v-content>
    <div class="search-title">Search Receiver</div>
      <div class="box">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" v-model="search" placeholder="Search receiver here" @keyup='searchname'>
      </div>
      <div class="search-box">
        <div class="all-search" >
          <div v-on:click="changePage(receiver.id)" class="search" v-for="receiver in getReceiver" :key="receiver.id">
            <div class="search-info">
              <div class="image-box">
                <img :src="receiver.image" alt="">
              </div>
              <div class="info">
                <div class="search-name">{{receiver.firstname}} {{receiver.lastname}}</div>
                <div class="search-number">{{receiver.email}}</div>
                <div class="search-number">{{receiver.mainPhone}}</div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="..." v-if="getPagination">
          <ul class="pagination">
            <li class="page-item" :class="[getPagination.currentPage == 1 ? 'disabled': '']">
              <a class="page-link" href="#" @click.prevent="changePagination(parseInt(getPagination.currentPage)-1)">&laquo;</a>
            </li>
            <!-- <li v-for="noPage in getPagination.totalPage" class="page-item" :class="[getPagination.currentPage == noPage ? 'active': '']" :key="noPage"><a class="page-link" href="#" @click.prevent="changePagination(noPage)">{{noPage}}</a></li> -->
            <li class="page-item" :class="[getPagination.currentPage == getPagination.totalPage ? 'disabled': '']">
              <a class="page-link" href="#" @click.prevent="changePagination(parseInt(getPagination.currentPage)+1)">&raquo;</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Swal from 'sweetalert2'
export default {
  name: 'SearchReceiverComp',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions({ getUserReceiver: 'getReceiver' }),
    changePage (idTransfer) {
      localStorage.setItem('idTransfer', idTransfer)
      Swal.fire({
        html: 'If you are new to this app, you will have Rp 0 balance in your account. <br> So, if you wish to transfer some money from your account, you can logout and login again to this account : <br> <br> email : zwalletbanking@gmail.com <br> password : password <br> pin : 123456 <br> <br> and send money to your account.</div>'
      })
      this.$router.push('receiver-transfer')
    },
    searchname () {
      const payload = {
        search: this.search
      }
      this.getUserReceiver(payload)
    },
    changePagination (noPage) {
      const payload = {
        search: this.search,
        noPage: noPage
      }
      this.getUserReceiver(payload)
    }
  },
  computed: {
    ...mapGetters(['getReceiver', 'getPagination'])
  },
  mounted () {
    const payload = {
      search: this.search,
      noPage: 1
    }
    this.getUserReceiver(payload)
  }
}
</script>

<style scoped>
.search:hover {
    outline: none !important;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.search:hover div {
    font-weight: 900;
}
.all-search {
  min-height: 500px;
}
.info {
  /* width: 100%; */
  margin-left: 3%;
  border: 2px solidgreen;
}
/* .image-box {
  width: 50px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
}
.image-box img {
  width: 100%;
  margin-top: 10%;
} */
.box  i {
  font-size: 20px;
  color: #777;
}
.box  input{
  height: 40px;
  border: none;
  outline: none;
  font-size: 16px;
  padding-left: 10px;
  background: transparent;
}
.search-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin-bottom: 2%;
}
.box{
  width: 100%;
  min-height: 50px;
  border-radius: 12px;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background: rgba(58, 61, 66, 0.1);
}
.search-box {
  width: 100%;
}
.search {
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  min-height: 90px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 3%;
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 5%;
  cursor: pointer;
}
.search-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.search-name {
  font-weight: bold;
  font-size: 18px;
  color: #4D4B57;
}
.search-number {
  font-weight: normal;
  font-size: 16px;
  color: #7A7886;
}
.image-box {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    overflow: hidden;
}
.image-box img {
    height: 100% !important;
}

</style>
