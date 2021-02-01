<template>
  <div v-content>
    <div class="transaction-title">
      <h5>Transaction History</h5>
      <div class="sort-btn">
        <div v-if="this.show === 'asc'" @click="sortTable('transactions.datetime', 'asc')">
          <i v-purple class="fas fa-sort-amount-up-alt fa-2x"></i>
        </div>
        <div v-else @click="sortTable('transactions.datetime', 'asc')">
          <i v-purple class="fas fa-sort-amount-down-alt fa-2x"></i>
        </div>
      </div>
    </div>
    <div class="transaction-box">
      <div class="transaction" v-for="transactions in getTransactions" :key="transactions.id" >
        <div class="transaction-profile">
          <div class="transaction-photos">
            <img :src='transactions.receiverimage' alt="">
          </div>
          <div class="transaction-info">
            <div class="transaction-name" style="font-size:14px">{{transactions.receivername}} {{transactions.receiverlastname}}</div>
            <div class="transaction-date" style="font-size:12px">{{convertTime(transactions.datetime)}}</div>
            <div class="transaction-number" style="font-size:12px">{{transactions.receiverphone}} </div>
            <div class="transaction-number" style="font-size:12px">{{transactions.actionName}} </div>
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
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item" :class="[getPaginationTrans.currentPage == 1 ? 'disabled': '']">
          <a class="page-link" href="#" @click.prevent="changePagination(parseInt(getPaginationTrans.currentPage)-1)">&laquo;</a>
        </li>
        <!-- <li v-for="noPage in getPaginationTrans.totalPage" class="page-item" :class="[getPaginationTrans.currentPage == noPage ? 'active': '']" :key="noPage"><a class="page-link" href="#" @click.prevent="changePagination(noPage)">{{noPage}}</a></li> -->
        <li class="page-item" :class="[getPaginationTrans.currentPage == getPaginationTrans.totalPage ? 'disabled': '']">
          <a class="page-link" href="#" @click.prevent="changePagination(parseInt(getPaginationTrans.currentPage)+1)">&raquo;</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
var numeral = require('numeral')
export default {
  name: 'TransactionContentComp',
  data: function () {
    return {
      show: 'desc'
    }
  },
  methods: {
    ...mapActions({ getAllTransactions: 'getTransactions' }),
    sortTable () {
      if (this.show === 'desc') {
        this.show = 'asc'
      } else {
        this.show = 'desc'
      }
      const payload = {
        sort: this.show
      }
      this.getAllTransactions(payload)
    },
    currency (num) {
      var string = numeral(num).format('0,0')
      return string
    },
    convertTime (date) {
      return moment(date).format('LLLL')
    },
    changePagination (noPage) {
      const payload = {
        sort: this.show,
        noPage: noPage
      }
      this.getAllTransactions(payload)
    }
  },
  computed: {
    ...mapGetters(['getTransactions', 'getPaginationTrans'])
  },
  mounted () {
    const payload = {
      sort: this.show,
      noPage: 1
    }
    this.getAllTransactions(payload)
  }
}
</script>

<style scoped>
.fa-sort-amount-up-alt:hover, .fa-sort-amount-down-alt:hover {
  color: #3855f7 !important;
}
.sort-btn {
  cursor: pointer;
}
.transaction-photos {
  width: 50px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
}
.transaction-photos img {
  width: 100%;
  margin-top: 10%;
}
.transaction-profile {
  display: flex;
  flex-direction: row;
}
.transaction {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2%;
}
.transaction-info {
  margin-left: 10px;
}
.transaction-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5%;
}
.transaction-box {
  min-height: 500px;
}
@media screen and (max-width: 419px) {
  .transaction {
    flex-direction: column;
    margin-bottom: 5%;
    border-bottom: 1px solid gray;
  }
  .transaction-profile {
    margin-bottom: 2%;
  }
}

</style>
