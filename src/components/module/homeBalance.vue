<template>
    <div class="aside2">
        <div class="balance-info">
            <div class="balance">Balance</div>
            <div class="balance-total">Rp {{currency(getBalance.balance)}}</div>
            <div class="user-number">{{getProfile.mainPhone}}</div>
        </div>
        <div class="balance-button">
            <button type="button" class="transfer-btn" @click.prevent="toTransfer">
                <i class="fa fa-arrow-up" aria-hidden="true" style="color: white;" ></i>
                Transfer
            </button>
            <button type="button" class="topup-btn" style="margin-top:10px" @click.prevent="toTopup">
                <i class="fa fa-plus" aria-hidden="true" style="color: white;"></i>
                Top Up
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
var numeral = require('numeral')
export default {
  name: 'Balance',
  methods: {
    ...mapActions({ getUserBalance: 'getBalance', getUserProfile: 'getProfile' }),
    currency (num) {
      var string = numeral(num).format('0,0')
      return string
    },
    toTransfer () {
      this.$router.push('receiver')
    },
    toTopup () {
      this.$router.push('topup')
    }
  },
  computed: {
    ...mapGetters(['getBalance', 'getProfile'])
  },
  mounted () {
    this.getUserBalance()
    this.getUserProfile()
  }
}
</script>

<style lang="scss" scoped>
button:hover {
    outline: none !important;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  background-color: #b0bbf8;
}
.aside2 {
    min-height: 190px;
    width: 100%;
    margin-bottom: 20px;
    background: #6379F4;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}
.balance {
    font-weight: normal;
    font-size: 20px;
    color: #E0E0E0;
}
.balance-total {
    font-weight: bold;
    font-size: 40px;
    color: #FFFFFF;
}
.user-number {
    font-weight: 600;
    font-size: 14px;
    color: #DFDCDC;
}
.balance-button {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.transfer-btn, .topup-btn {
    width: 162px;
    height: 57px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #FFFFFF;
    font-weight: bold;
    font-size: 18px;
    color: #FFFFFF;
}
@media screen and (max-width: 450px) {
    .transfer-btn, .topup-btn {
        width: 130px;
        height: 40px;
        font-size: 18px;
    }
}
@media screen and (max-width: 373px) {
    .aside2 {
        flex-direction: column;
        text-align: center;
        padding-top: 2%;
        padding-bottom: 2%;
    }
    .balance-info{
        margin-bottom: 5%;
    }
}
</style>
