<template>
  <div class="aside4">
            <div class="search-title">Transfer</div>
                        <div class="search-box">
                        <div class="search" >
                            <div class="search-photos">
                                <!-- <img src="../../assets/1.png" alt=""> -->
                            </div>
                           <div class="search-info">
                               <div class="search-name">{{getDetailReceiver.receivername}}</div>
                               <div class="search-number">+62 {{getDetailReceiver.receiverphone}}</div>
                           </div>
                        </div>
                        <p>Type the amount you want to transfer and then press continue to the next steps.</p>
                        <div class="amount-box">
                            <input v-model="amountOut" class="amount" type="text" placeholder="0.00" >
                        </div>
                        <h4>Rp{{getBalance.balance}} Available</h4>
                        <p v-if="errorMessage" style="text-align: center; width: 40%; margin-left: 30%; font-size: 14px; color:red">{{errorMessage}}</p>
                        <div class="note-box">
                            <input v-model="notes" class="notes" type="text" placeholder="Add some notes" >
                        </div>
                        </div>
                        <button @click.prevent="inserttransfer()">Confirm</button>
        </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Transfer',
  data () {
    return {
      amountOut: '',
      notes: ''
    }
  },
  methods: {
    ...mapActions({ getUserDetailReceiver: 'getDetailReceiver', getUserBalance: 'getBalance', insertTransfer: 'insertTransfer' }),
    inserttransfer () {
      const payload = {
        amountOut: this.amountOut,
        notes: this.notes
      }
      this.insertTransfer(payload)
      this.$router.push('/main/receiver-transfer-status')
    }
  },
  computed: {
    ...mapGetters(['getDetailReceiver', 'getBalance']),
    errorMessage () {
      if (this.amountOut > parseInt(this.getBalance.balance)) {
        return 'Balance is not enough'
      } else {
        return null
      }
    }
  },
  mounted () {
    this.getUserDetailReceiver()
    this.getUserBalance()
  }
}
</script>

<style scoped>
button {
    margin-left: 70%;
    margin-top: 10%;
    margin-right: 5%;
    height: 57px;
width: 25%;
border-radius: 12px;
background: #6379F4;
box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
border: none;
font-family: Nunito Sans;
font-weight: bold;
font-size: 18px;
color: #FFFFFF;
}

h4 {
    margin-top: 3%;
    text-align: center;
}
.amount{
    margin-top: 5%;
    width: 100%;
    outline: none;
    font-size: 42px;
    padding-left: 10px;
    background: transparent;
    text-align: center;
    border: none;
}
.notes {
    margin-top: 3%;
    width: 60%;
    text-align: left;
    margin-left: 20%;
    margin-right: 20%;
    outline: none;
    border: none;
    border-bottom: 1px solid #3A3D42 ;

}
.amount-notes ::placeholder {
    font-size: 16px;
}

.amount-box ::placeholder {
    font-size: 42px;
}
.aside4 {
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
.search-box {
    top: 20%;
    width: 90%;
    margin-left: 5%;
}

.search {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 110px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    margin-bottom: 3%;
    border: none;
    position: relative;
    width: 100%;
    text-align: left;
}

.search-photos {
    margin-top: 3%;
    margin-left: 2%;
    margin-right: 2%;
}

.search-info {
    margin-top: 3.5%;
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
p {
    margin-right: 60%;
}
</style>
