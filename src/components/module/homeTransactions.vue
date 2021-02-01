<template>
    <div class="aside4">
        <div class="transaction-title">
            <h5>Transaction History</h5>
            <p v-purple id="see-all" @click.prevent="seeall">See All</p>
        </div>
        <div class="transaction-box" >
            <div class="transaction" v-for="transactions in getTransactions" :key="transactions.id">
                <div class="transaction-profile">
                    <div class="transaction-photos">
                        <img :src='transactions.receiverimage' alt="">
                    </div>
                    <div class="transaction-info">
                        <div class="transaction-name" style="font-size: 14px">{{transactions.receivername}} {{transactions.receiverlastname}}</div>
                        <div class="transaction-number" style="font-size:12px">{{transactions.actionName}} </div>
                        <div class="transaction-number" style="font-size:12px">{{convertTime(transactions.datetime)}}</div>
                    </div>
                </div>
                <div class="transaction-amount" v-if="transactions.amountIn === 0">
                    <h5 style="color:red">- {{currency(transactions.amountOut)}}</h5>
                </div>
                <div class="transaction-amount" v-else>
                    <h5 style="color:blue">+ {{currency(transactions.amountIn)}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
var numeral = require('numeral')
export default {
  name: 'Transactions',
  methods: {
    ...mapActions({ getAllTransactions: 'getTransactions' }),
    convertTime (date) {
      return moment(date).format('YYYY-MM-DD')
    },
    seeall () {
      this.$router.push('history')
    },
    currency (num) {
      var string = numeral(num).format('0,0')
      return string
    }
  },
  computed: {
    ...mapGetters(['getTransactions'])
  },
  mounted () {
    const payload = {
      sort: 'desc',
      noPage: 1,
      limit: 5
    }
    this.getAllTransactions(payload)
  }
}
</script>

<style lang="scss" scoped>
.transaction-photos {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
}
.transaction-photos img {
    height: 100%
}
#see-all {
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
}
.transaction-title:hover #see-all{
    color: #3855f7 !important;
}
.transaction-profile {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.transaction {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5%;
    margin-left: 5%;
    margin-right: 5%;
}
.transaction-amount {
    margin-right: 0;
}
.transaction-info {
    margin-left: 10px;
}

.transaction-title {
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5%;
    justify-content: space-between;
}
.aside4 {
    width: 100%;
    min-height: 450px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    border: 2px solid white;
}
</style>
