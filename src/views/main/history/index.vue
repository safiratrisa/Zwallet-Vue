<template>
  <div class="aside4">
            <div class="transaction-title">
                <h5>Transaction History</h5>
                <div>
                    <!-- <button class="button" v-if="newest" @click="sortTable('result.transactionsDate', 'asc')">Newest</button> -->
                    <!-- <button class="button" v-if="" @click="sortTable('result.transactionsDate', 'asc')">Oldest</button> -->
                    <button class="button" @click="sortTable('transactions.datetime', 'asc')">sort</button>
                </div>
            </div>
            <div class="transaction-box">
                <div class="transaction" v-for="transactions in getTransactions" :key="transactions.id" >
                    <div class="transaction-profile">
                        <div class="transaction-photos">
                            <img src="../../../assets/img/1.png" alt="">
                        </div>
                        <div class="transaction-info">
                            <div class="transaction-name" style="font-size:14px">{{transactions.receivername}}</div>
                            <div class="transaction-date" style="font-size:12px">{{transactions.datetime}}</div>
                            <div class="transaction-number" style="font-size:12px">{{transactions.receiverphone}} </div>
                            <div class="transaction-number" style="font-size:12px">{{transactions.actionName}} </div>
                            <!-- <div class="transaction-number">+62 {{result.phoneNumber}}</div> -->
                        </div>
                    </div>
                    <div class="transaction-amount" v-if="transactions.amountIn === null || transactions.amountIn === null">
                        <h5 style="color:red">- {{transactions.amountOut}}</h5>
                    </div>
                    <div class="transaction-amount" v-else>
                        <h5 style="color:blue">+ {{transactions.amountIn}}</h5>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'TransactionContent',
  methods: {
    ...mapActions({ getAllTransactions: 'getTransactions' }),
    sortTable (key, direction) {
      console.log(this.getTransactions.length)
      this.sort = `${key} > ${direction}`
      if (direction === 'asc') {
        this.getTransactions.sort((a, b) => a[key] > b[key] ? 1 : -1)
      } else {
        this.getTransactions.sort((a, b) => a[key] < b[key] ? 1 : -1)
      }
    }
  },
  computed: {
    ...mapGetters(['getTransactions'])
  },
  mounted () {
    this.getAllTransactions()
  }
}
</script>

<style scoped>
button {
    border: none;
    outline: none;
}

.aside4 {
    min-height: 678px;
    width: 850px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}
#see-all {
    font-weight: 600;
    font-size: 14px;
    color: #6379F4;
    text-align: right;
}
.transaction-profile {
    display: flex;
    flex-direction: row;
}
.transaction {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2%;
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
    /* border: 2px solid black; */
    display: flex;
    flex-direction: row;
    margin-top: 0%;
    margin-left: 5%;
    margin-right: 5%;
    justify-content: space-between;
}
.transaction-photos img {
    margin-top: 10%;
}

</style>
