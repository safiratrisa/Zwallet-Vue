<template>
  <div class="aside2">
                        <div class="search-title">Search Receiver</div>
                        <div class="box">
                            <i class="fa fa-search" aria-hidden="true"></i>
                             <input type="text" v-model="search" placeholder="Search receiver here" >
                        </div>

                        <div class="search-box">
                        <button v-on:click="changePage(receiver.id)" class="search" v-for="receiver in filteredName" :key="receiver.id">
                            <div class="search-photos">
                            </div>
                           <div class="search-info" v-if="receiver.transferId === 2">
                               <div class="search-name">{{receiver.receivername}}</div>
                               <div class="search-number">phone: {{receiver.receiverphone}}</div>
                           </div>
                           <div class="search-info" v-else>
                               <div class="search-name">{{receiver.receivername}}</div>
                               <div class="search-number">ID: {{receiver.receiverphone}}</div>
                           </div>
                        </button>
                        </div>
                    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import axios from 'axios'
export default {
  name: 'SearchReceiver',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    ...mapActions({ getUserReceiver: 'getReceiver' }),
    changePage (idTransfer) {
      localStorage.setItem('idTransfer', idTransfer)
      this.$router.push('receiver-transfer')
    }
  },
  computed: {
    ...mapGetters(['getReceiver']),
    filteredName () {
      return this.getReceiver.filter((receiver) => {
        return receiver.receivername.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    this.getUserReceiver()
  }
}
</script>

<style scoped>
.box{
    width: 90%;
    height: 50px;
    margin-left: 5%;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 20px;
    background: rgba(58, 61, 66, 0.1);
    outline: none;
}
.box  i {
    font-size: 20px;
    color: #777;
}

.box  input{
    flex: 1;
    height: 40px;
    border: none;
    outline: none;
    font-size: 16px;
    padding-left: 10px;
    background: transparent;
}

.aside2 {
    min-height: 678px;
    /* height: 678px; */
    width: 850px;
    margin-bottom: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    padding-top: 5%;
}

.search-title {
    margin-left: 5%;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
    margin-bottom: 2%;
}

.box{
    width: 90%;
    height: 50px;
    margin-left: 5%;
    border-radius: 12px;
    margin-bottom: 2%;
    display: flex;
    align-items: center;
    padding: 20px;
    background: rgba(58, 61, 66, 0.1);
}

.search-box {
    top: 20%;
    width: 90%;
    margin-left: 5%;
}

.search {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 90px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    margin-bottom: 3%;
    border: none;
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
}

.search-photos {
    margin-top: 2%;
    margin-left: 2%;
    margin-right: 2%;
}

.search-info {
    margin-top: 2.5%;
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

</style>
