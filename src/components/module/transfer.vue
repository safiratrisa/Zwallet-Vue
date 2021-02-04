<template>
  <div v-content>
    <div class="search-title">Transfer</div>
    <div class="search-box">
      <div class="search" >
        <div class="search-photos">
          <img :src="getProfileFriend.image" alt="">
        </div>
        <div class="search-info">
          <div class="search-name">{{getProfileFriend.firstName}} {{getProfileFriend.lastname}}</div>
          <div class="search-number">{{getProfileFriend.mainPhone}}</div>
        </div>
      </div>
      <p class="detail">Type the amount you want to transfer and then press continue to the next steps.</p>
      <div class="amount-box">
        <vue-numeric currency="Rp" separator="," v-model="amountOut" class="cobainput"></vue-numeric>
        <!-- <input v-model="amountOut" class="amount" type="text" placeholder="0.00" > -->
      </div>
      <h4>Rp {{currency(getBalance.balance)}} Available</h4>
      <p v-if="errorMessage" style="text-align: center; width: 40%; margin-left: 30%; font-size: 14px; color:red">{{errorMessage}}</p>
      <div class="note-box">
        <input v-model="notes" class="notes" type="text" placeholder="Add some notes" @keyup="formattt" @blur="formattt" >
      </div>
    </div>
    <button class="next-pin" @click.prevent="tes">Confirm</button>
    <div v-if="show === 'true'">
      <div id="dimScreen">
        <div class="modal-full">
            <div>
                <div class="confirmation-pin-title">Enter PIN to Transfer</div>
                <div class="confirmation-pin-detail">Enter your 6 digits PIN for confirmation to continue transfering money</div>
            </div>

            <div class="pin-box">
                <div class="pin">
                  <PincodeInput
                    :length= length
                    v-model="pin"
                    placeholder="_"
                    :secure= secure
                  />
                </div>
                <div class="allbutton">
                    <button class="confirm-btn" @click.prevent="close">CLOSE</button>
                    <button type="button" class="confirm-btn" @click.prevent="inserttransfer">CONFIRM</button>
                </div>
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
import Swal from 'sweetalert2'
import VueNumeric from 'vue-numeric'
import PincodeInput from 'vue-pincode-input'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
var numeral = require('numeral')
export default {
  name: 'TransferComp',
  title: 'Transfer',
  components: {
    VueNumeric,
    PincodeInput,
    Loading
  },
  data () {
    return {
      amountOut: '',
      notes: '',
      show: '',
      pin: '',
      length: parseInt(6),
      secure: true,
      isLoading: false,
      fullPage: true
    }
  },
  mixins: [SweetAlert],
  methods: {
    ...mapActions({ getUserBalance: 'getBalance', insertTransfer: 'insertTransfer', getRecProfile: 'getFriendProfile' }),
    inserttransfer () {
      const payload = {
        amountOut: this.amountOut,
        notes: this.notes,
        pin: this.pin
      }
      if (this.getBalance.balance === null || parseInt(this.amountOut) > parseInt(this.getBalance.balance)) {
        this.alertError({ title: 'Failed!', text: 'Your Balance is Not Enough' })
        this.amountOut = ''
      } else if (this.amountOut < 20000) {
        this.alertError({ title: 'Failed!', text: 'Minimum Transfer Amount is Rp20.000' })
        this.amountOut = ''
      } else {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes!'
        })
          .then((result) => {
            this.isLoading = true
            if (result.isConfirmed) {
              this.insertTransfer(payload)
                .then(() => {
                  this.alertSuccess({ title: 'Success!', text: 'Transfer Successfully' })
                  this.$router.push('/main/receiver-transfer-status')
                })
                .catch((err) => {
                  if (err.response.data.err.message === 'Wrong PIN') {
                    this.alertError({ title: 'Failed!', text: 'Wrong PIN!' })
                  }
                })
                .finally(() => {
                  this.isLoading = false
                  this.pin = ''
                })
            }
          })
      }
    },
    currency (num) {
      var string = numeral(num).format('0,0')
      return string
    },
    formattt () {
      return numeral(this.amountOut).format('0,0')
    },
    tes () {
      this.show = 'true'
    },
    close () {
      this.show = 'false'
      this.pin = ''
    }
  },
  computed: {
    ...mapGetters(['getBalance', 'getProfileFriend']),
    errorMessage () {
      if (this.amountOut > parseInt(this.getBalance.balance)) {
        return 'Balance is not enough'
      } else {
        return null
      }
    }
  },
  mounted () {
    this.getUserBalance()
    this.getRecProfile()
  }
}
</script>

<style scoped>
.next-pin {
  margin-top: 5%;
}
.detail {
  padding-right: 48%;
}
.allbutton {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.pin {
    text-align: center;
}
.pin-box {
  margin-top: 10%;
}
#dimScreen {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(41, 34, 34, 0.5);
}

.modal-full {
    height: 417px;
    width: 40%;
    min-width: 300px;
    max-width: 500px;
    border-radius: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    padding-top: 20px;
    padding-left: 2%;
    padding-right: 2%;
}

.confirmation-pin-title {
    font-weight: bold;
    font-size: 18px;
    color: #3A3D42;
    width: 100%;
}

.confirmation-pin-detail {
    font-weight: normal;
    font-size: 16px;
    color: rgba(58, 61, 66, 0.6);
    padding-right: 20% ;
    width: 100%;
}

.confirm-btn {
    width: 200px;
    cursor: pointer;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    color: rgba(136, 136, 143, 1);
    font-size: 16px;
    border-radius: 12px;
    border : none;
    margin: 0;
    margin-top: 20%;
}

.cobainput{
  margin-top: 5%;
  width: 100%;
  outline: none;
  font-size: 42px;
  padding-left: 10px;
  background: transparent;
  text-align: center;
  border: none;
}
button {
  height: 57px;
  width: 25%;
  min-width: 100px;
  border-radius: 12px;
  box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
  border: none;
  font-weight: bold;
  font-size: 18px;
  outline: none !important;
  background: #DADADA;
    color: rgba(136, 136, 143, 1);
}
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white;
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
.amount-box ::placeholder {
  font-size: 42px;
}

.search-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #3A3D42;
  margin-bottom: 2%;
}
.search-box {
  top: 20%;
  width: 100%;
}

.search {
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 3%;
  border: none;
  width: 100%;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
}

.search-photos {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 2%;
    margin-right: 2%;
}
.search-photos img {
    height: 100%
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
@media screen and (max-width: 1155px) {
    .allbutton {
    flex-direction: column-reverse;
    align-items: center;
}
.confirm-btn {
    margin-top: 10%;
}
}
@media screen and (max-width: 767px) {
    .detail {
    padding-right: 0%;
}
}
</style>
