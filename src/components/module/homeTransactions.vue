<template>
    <div class="aside4">
            <div class="transaction-title">
                <h5>Transaction History</h5>
                <a href="#">
                    <router-link to="history"><a id="see-all">See All</a></router-link>
                    <!-- <legend id="see-all">See all</legend> -->
                </a>
            </div>
            <div class="transaction-box">
                <div class="transaction" v-for="transactions in getTransactions" :key="transactions.id">
                    <div class="transaction-profile">
                        <div class="transaction-photos">
                            <img src="../../assets/img/1.png" alt="">
                        </div>
                        <div class="transaction-info">
                            <div class="transaction-name" style="font-size: 14px">{{transactions.receivername}}</div>
                            <div class="transaction-number" style="font-size:12px">{{transactions.receiverphone}} </div>
                            <div class="transaction-number" style="font-size:12px">{{transactions.actionName}} </div>
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
  name: 'Transactions',
  methods: {
    ...mapActions({ getAllTransactions: 'getTransactions' })
  },
  computed: {
    ...mapGetters(['getTransactions'])
  },
  mounted () {
    this.getAllTransactions()
  }
}
</script>

<style lang="scss" scoped>
h5 {
    margin-top: 10%;
}
#see-all {
    font-weight: 600;
    font-size: 14px;
    color: #6379F4;
    text-align: right;
    margin-top: 10%;
}
.transaction-profile {
    display: flex;
    flex-direction: row;
}
.transaction {
    /* border: 2px solid black; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5%;
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
.aside4 {
    // width: 367px;
    // min-height: 468px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.aside1 {
    margin-bottom: 19px;
    height: 678px;
    width: 270px;
    margin-right: 2%;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.aside2 {
    height: 190px;
    width: 850px;
    margin-bottom: 20px;
    position: relative;
    background: #6379F4;
    border-radius: 20px;
}

.aside3 {
    width: 463px;
    height: 468px;
    margin-right: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.aside4 {
    width: 367px;
    height: 468px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.right-bottom {
    display: flex;
    flex-direction: row;
}

.container {
    display: flex;
    flex-direction: row;
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

.balance, .balance-total, .user-number {
    margin-top: 10px;
}

.balance-info {
    margin-left: 50px;
    position: absolute;
    height: 100%;
    padding-top: 18px;
}

.balance-button {
    position: absolute;
    right: 5%;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 35px;
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

.graphic {
    position: relative;
    height: 100%;
    width: 100%;
}

.main-graphic img {
    position: absolute;
    margin-top: 0%;
    width: 80%;
    height: 70%;
    margin-left: 10%;
    margin-right: 10%;
    top: 25%;
    height: auto;
}

.income img {
   position: absolute;
   top: 6%;
   left: 10%;
   width: 25%;
}

.outcome img {
   position: absolute;
   top: 6%;
   left: 65%;
   width: 25%;
}

@media screen and (max-width: 1199px) {
    .container {
        flex-wrap: wrap;
    }

    .aside1 {
        flex-grow: 1;
        margin-left: 0;
        margin-right: 0;
        height: 50px;
        margin-bottom: 10px;
    }

    .right {
        width: 100%;
        margin-bottom: 10px;
    }

    .aside2 {
        width: 100%;
        margin-bottom: 10px;
        height: 130px;
    }

    .log-out {
        margin-top:0%;
    }

    ul {
        display: flex;
        flex-direction: row;
    }
    .a-dashboard {
        border-left: 0;
        border-bottom: 5px solid #6379F4;
    }

    li {
        width:20%;
        display: flex;
        flex-direction: column;
        margin-top: 0;
        margin-bottom: 0;
    }

    a{
        padding-top: 6%;
        padding-left: 5%;
        height: 100%;

    }

    .balance-info {
        padding-top: 8px;
    }

    .aside3 {
        width: 700px;
        height: 550px;
    }
    .aside4 {
        height: 550px;
    }
    .header {
        margin-bottom: 10px;
    }

    .balance, .balance-total, .user-number {
        margin-top: 0;
    }
    .transfer-btn, .topup-btn {
        width: 150px;
        height: 40px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid #FFFFFF;
        font-size: 18px;
    }

    .balance-button {
        padding-top: 20px;
    }
}

@media screen and (max-width: 991px) {
    .aside3 {
        height: 400px;
    }
    .aside4 {
        height: 400px;
    }
    .history-title {
        font-size: 12px;
    }
    .balance-info {
        padding-top: 2%;
    }
    .transfer-btn, .topup-btn {
        width: 130px;
        height: 40px;
        font-size: 18px;
    }

    #dashboard, #transfer, #topup, #profile, #logout {
        display: none;
    }
    nav ul li a{
        padding-left: 30%;

    }

    ul {
        top: 5%;
    }

    .balance {
        font-size: 16px;
    }

    .balance-total {
        font-size: 30px;
    }

    .user-number {
        font-size: 12px;
    }

    .name  {
        font-size: 12px;
    }

    .info {
        font-size: 10px;
    }

    .history1 .amount {
        font-size: 11px;
    }

    .history2 .amount {
        font-size: 11px;
    }

    .history3 .amount {
        font-size: 11px;
    }

    .history4 .amount {
        font-size: 11px;
    }
    .profile {
        margin-left: 10px;
    }

}

@media screen and (max-width: 767px) {
    .right-bottom {
        flex-wrap: wrap;
    }
    .aside3 {
        margin-right: 0;
        margin-bottom: 10px;
    }
    .aside4 {
        width: 100%;
        height: 600px;
    }
    .history-title {
        font-size: 20px;
    }
    .trans-history {
        top: 10%;
    }
    .main-graphic img {
        width: 70%;
        top: 20%;
        margin-left: 15%;
    }

    .income img {
       top: 6%;
       left: 15%;
       width: 20%;
    }

    .outcome img {
       top: 6%;
       left: 65%;
       width: 20%;
    }
    .copyright{
        position: absolute;
        top: 10%;
        left: 5%;
    }

    .contact-number {
        position: absolute;
        top: 40%;
        left: 5%;
    }

    .contact-email {
        margin-left: 50px;

    }

    .profile {
        margin-left: 20px;
    }

    .name  {
        font-size: 16px;
    }

    .info {
        font-size: 14px;
    }

    .history1 .amount {
        font-size: 16px;
    }

    .history2 .amount {
        font-size: 16px;
    }

    .history3 .amount {
        font-size: 16px;
    }

    .history4 .amount {
        font-weight: bold;
        font-size: 16px;
    }
}

@media screen and (max-width: 450px) {
    .contact-email {
        margin-left: 0;
    }

    .user-profile {
        display: none;
    }

    .transfer-btn, .topup-btn {
        width: 110px;
        font-size: 14px;
    }
    .balance-info {
        margin-left: 20px;

    }
    .aside3 {
        height: 350px;
    }
    .aside4 {
        width: 100%;
        height: 500px;
    }

}

@media screen and (max-width: 360px) {
    .aside3 {
        height: 280px;
    }
    .aside4 {
        width: 100%;
        height: 400px;
    }

}
</style>
