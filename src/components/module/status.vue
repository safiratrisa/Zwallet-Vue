<template>
    <div v-content>
        <div class="transfer-status">
            <div class="success-logo">
                <img src="../../assets/img/success.png" alt="">
            </div>
            <div class="success-title">Transfer Success</div>
        </div>
        <div >
        <div class="transfer-style">
            <div  id="content" class="up-title">Amount</div>
            <div class="up-value">Rp {{currency(getTransferStatus.amountOut)}}</div>
        </div>
        <div class="transfer-style">
            <div class="up-title">Balance Left</div>
            <div class="up-value">Rp {{currency(getBalance.balance)}}</div>
        </div>
        <div class="transfer-style">
            <div class="up-title">Date & Time</div>
            <div class="up-value">{{convertTime(getTransferStatus.datetime)}}</div>
        </div>
        <div class="transfer-style">
            <div class="up-title">Notes</div>
            <div class="up-value">{{getTransferStatus.notes}}</div>
        </div>
        <div class="transfer-title">Transfer to</div>
        <div class="transfer1">
            <div class="transfer-photos"></div>
            <div class="transfer-info">
                <div class="transfer-name">{{getTransferStatus.firstname}} {{getTransferStatus.lastname}} / @{{getTransferStatus.username}} </div>
                <div class="transfer-number">{{getTransferStatus.mainPhone}}</div>
            </div>
        </div>
        </div>
        <div class="success-option">
            <button type="button" class="download-button" @click.prevent="saveDiv()">
                <i class="fas fa-download fa-lg"></i>
                <!-- <img src="../../assets/img/download.png" alt=""> -->
                <span v-purple class="download-text">Download PDF</span>
            </button>
            <button type="button" class="home-button" @click.prevent="toDashboard">
                <span class="home-text">Back to</span>  Home
            </button>
        </div>
        <loading :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage">
      </loading>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import JsPDF from 'jspdf'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
var numeral = require('numeral')
export default {
  name: 'StatusComp',
  title: 'Transfer Status',
  components: {
    Loading
  },
  data () {
    return {
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    ...mapActions({ getUserTransferStatus: 'getTransferStatus', getUserBalance: 'getBalance', getUserProfile: 'getProfile' }),
    convertTime (date) {
      return moment(date).format('LLLL')
    },
    currency (num) {
      var string = numeral(num).format('0,0')
      return string
    },
    toDashboard () {
      this.$router.push('home')
    },
    saveDiv () {
      var doc = new JsPDF()
      const date = new Date()
      doc.setFontSize(30)
      doc.setTextColor(99, 121, 244)
      doc.text('Zwallet', 20, 20)
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.text('Total Transfer : ', 20, 30)
      doc.setTextColor(0, 0, 0)
      doc.text(`${this.currency(this.getTransferStatus.amountOut)}`, 20, 35)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.text('Total Balance : ', 20, 45)
      doc.setTextColor(0, 0, 0)
      doc.text(`${this.currency(this.getBalance.balance)}`, 20, 50)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.text('Date : ', 20, 60)
      doc.setTextColor(0, 0, 0)
      doc.text(`${this.convertTime(this.getTransferStatus.datetime)}`, 20, 65)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.text('Notes : ', 20, 75)
      doc.setTextColor(0, 0, 0)
      doc.text(`${this.getTransferStatus.notes}`, 20, 80)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.text('Sender Name : ', 20, 90)
      doc.setTextColor(0, 0, 0)
      doc.text(`${this.getProfile.firstName} ${this.getProfile.lastname}`, 20, 95)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.text('Phone Number Sender : ', 20, 105)
      doc.setTextColor(0, 0, 0)
      doc.text(`${this.getProfile.mainPhone}`, 20, 110)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.text('Receiver Name : ', 20, 120)
      doc.setTextColor(0, 0, 0)
      doc.text(`${this.getTransferStatus.firstname} ${this.getTransferStatus.lastname} / @${this.getTransferStatus.username}`, 20, 125)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.text('Phone Number Receiver :', 20, 135)
      doc.setTextColor(0, 0, 0)
      doc.text(`${this.getTransferStatus.mainPhone}`, 20, 140)
      doc.setTextColor(0, 0, 0, 0.5)
      doc.setFontSize(9)
      doc.text(`${this.convertTime(date)}`, 20, 280)
      doc.save('div.pdf')
    }
  },
  computed: {
    ...mapGetters(['getTransferStatus', 'getBalance', 'getProfile'])
  },
  mounted () {
    this.getUserTransferStatus()
    this.getUserBalance()
    this.getUserProfile()
  }
}
</script>

<style lang="scss" scoped>
button:hover {
  background: #899af8;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: white !important;
}
button:hover i, button:hover span {
  color: white !important;
}
.share-button, .download-button {
    margin-right: 5%;
}
.transfer-photos {
    margin-top: 3%;
    margin-left: 2%;
    margin-right: 2%;
}

.transfer-info {
    margin-top: 3.5%;
}

.transfer-name {
    font-weight: bold;
    font-size: 18px;
    color: #4D4B57;
}

.transfer-number {
    font-weight: normal;
    font-size: 16px;
    color: #7A7886;
}

.up-title, .up-value {
    margin-left: 2%;
}

.up-title {
    margin-top:2%;
    margin-bottom: 1%;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #7A7886;
}

.up-value {
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #514F5B;
}

.transfer-style {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    min-height: 92px;
    width: 100%;
    margin-bottom: 2%;
    padding-top: 0.1%;
}

.transfer-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
    margin-bottom: 2%;
}

.transfer1 {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 110px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    margin-bottom: 2%;
}

.transfer-status {
    width: 100%;
    margin-bottom: 4%;
}
.success-logo {
    text-align: center;
}

.success-title {
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #4D4B57;
}

.success-option {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.share-button {
    height: 57px;
    width: 57px;
    border-radius: 12px;
    background: rgba(99, 121, 244, 0.15);
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;
}

.download-button {
    height: 57px;
    width: 243px;
    border-radius: 12px;
    background: rgba(99, 121, 244, 0.15);
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;
    font-weight: bold;
    font-size: 18px;
    outline: none !important;
}

.home-button {
    height: 57px;
    width: 197px;
    border-radius: 12px;
    background: rgba(99, 121, 244, 0.15);
    color: #6379F4;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    // color: #FFFFFF;
    outline: none !important;
}
i {
    color: #6379F4;
}

@media screen and (max-width: 991px) {
    .success-title {
        display: none;
    }
}

@media screen and (max-width: 767px) {
    .download-text {
        display: none;
    }

    .download-button {
        height: 57px;
        width: 57px;
    }
}
@media screen and (max-width: 379px) {
    .success-option {
        flex-direction: column;
    }
    .download-button,.share-button, .home-button {
        width: 100%;
        margin-bottom: 5%;
    }
}

</style>
