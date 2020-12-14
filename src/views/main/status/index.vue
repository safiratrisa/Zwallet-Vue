<template>
    <div class="aside2">
                        <div class="transfer-status">
                            <div class="success-logo">
                                <img src="../../../assets/img/success.png" alt="">
                            </div>
                            <div class="success-title">
                                Transfer Success
                            </div>
                        </div>

                        <div class="transfer-amount">
                            <div class="up-title">
                                Amount
                            </div>
                            <div class="up-value">
                                Rp{{getTransferStatus.amountOut}}
                            </div>
                        </div>

                        <div class="transfer-balance-left">
                            <div class="up-title">
                                Balance Left
                            </div>
                            <div class="up-value">
                                Rp{{getBalance.balance}}
                            </div>

                        </div>

                        <div class="transfer-date-time">
                            <div class="up-title">
                                Date & Time
                            </div>
                            <div class="up-value">
                                {{getTransferStatus.datetime}}
                            </div>

                        </div>
                        <div class="transfer-notes">
                            <div class="up-title">
                                Notes
                            </div>
                            <div class="up-value">
                                {{getTransferStatus.notes}}
                            </div>
                        </div>
                        <div class="transfer-title">
                            Transfer to
                        </div>

                        <div class="transfer1">
                            <div class="transfer-photos">
                                <img src="1.png" alt="">
                            </div>

                           <div class="transfer-info">
                               <div class="transfer-name">{{getTransferStatus.receivername}}</div>
                               <div class="transfer-number">{{getTransferStatus.receiverphone}}</div>
                           </div>
                        </div>
                        <div class="success-option">
                            <button type="button" class="share-button">
                                <img src="share-2.png" alt="">
                            </button>
                            <button type="button" class="download-button">
                                <img src="download.png" alt="">
                                <span class="download-text">Download PDF</span>
                            </button>
                            <button type="button" class="home-button">
                                <span class="home-text">Back to</span>  Home
                            </button>
                        </div>

                    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Status',
  methods: {
    ...mapActions({ getUserTransferStatus: 'getTransferStatus', getUserBalance: 'getBalance' })
  },
  computed: {
    ...mapGetters(['getTransferStatus', 'getBalance'])
  },
  mounted () {
    this.getUserTransferStatus()
    this.getUserBalance()
  }
}
</script>

<style lang="scss" scoped>

body, html {
    margin: 0;
    padding: 0;
    background: #E5E5E5;
    font-style: normal;
    font-family: NunitoSans;
}

.header {
    height: 140px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-bottom: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
}

.aside1 {
    margin-bottom: 19px;
    height: 900px;
    width: 270px;
    margin-right: 2%;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.aside2 {
    height: 900px;
    width: 850px;
    margin-bottom: 20px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
}

.container {
    display: flex;
    flex-direction: row;
}

.footer {
    position: relative;
    background: #6379F4;;
    height: 80px;
    font-weight: normal;
    font-size: 16px;
    color: rgba(239, 239, 239, 0.9);
}

.user {
    display: flex;
    flex-direction: row;
    float: left;
    position: absolute;
    right: 8%;
    top: 25%;
}

.user-profile {
    margin-left: 10px;
}

.bell {
    margin-left: 10px;
}

h1 {
    position: absolute;
    left: 10%;
    top: 25%;
    font-weight: bold;
    font-size: 29px;
    color: #6379F4;
}

.navbar {
    position: relative;
    width: 100%;
    padding: 0%;
    height:100%;
}

ul {
    position: absolute;
    top: 3%;
    font-weight: bold;
    font-size: 18px;
    list-style: none;
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
}

li {
    margin-bottom: 25%;
}

nav ul li a{
    width: 100%;
    padding-left: 10%;
}

.log-out {
    margin-top: 200%;
}

#dashboard, #topup, #profile, #logout {
    font-weight: normal;
    font-size: 18px;
    color: rgba(58, 61, 66, 0.8);
}

.a-transfer {
    border-left: 5px solid #6379F4;
}

#dashboard, #transfer, #topup, #profile, #logout {
    margin-left: 10px;
}

#transfer {
    font-weight: bold;
    font-size: 18px;
    color: #6379F4;
}

.copyright{
    position: absolute;
    top: 35%;
    left: 5%;
}

.contact-number {
    position: absolute;
    top: 35%;
    right: 5%;
}

.contact-email {
    margin-left: 50px;

}

.transfer-title {
    // position: absolute;
    margin-left: 5%;
    // top: 5%;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
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

.transfer-amount {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 92px;
    width: 90%;
    // position: absolute;
    // top: 15%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
}

.transfer-balance-left {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 92px;
    width: 90%;
    // position: absolute;
    // top: 28%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;

}

.transfer-date-time {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 92px;
    width: 90%;
    border-radius: 10px;
    // position: absolute;
    // top: 41%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;

}

.transfer-notes {
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 92px;
    width: 90%;
    // position: absolute;
    // top: 54%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 4%;
}

.transfer-title {
    // position: absolute;
    margin-left: 5%;
    // top: 68%;
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
    width: 90%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    // position: absolute;
    // top: 72%;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 2%;
}

.transfer-status {
    /* border: 2px solid black; */
    // position: absolute;
    margin-top: 2%;
    width: 100%;
    margin-bottom: 4%;
    // margin-left: 40%;
    // margin-right: 40%;
}
.success-logo {
    text-align: center;
    // margin-left: 25%;
    // margin-bottom: 5%;
}

.success-title {
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #4D4B57;
}

.success-option {
    position: absolute;
    right: 5%;
     top: 90%;
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
    color: #6379F4;
}

.home-button {
    height: 57px;
    width: 197px;
    border-radius: 12px;
    background: #6379F4;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border: none;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
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
    }

    .log-out {
        margin-top:0%;
    }

    ul {
        display: flex;
        flex-direction: row;
    }
    .a-transfer {
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

    .header {
        margin-bottom: 10px;
    }

}

@media screen and (max-width: 991px) {
    #dashboard, #transfer, #topup, #profile, #logout {
        display: none;
    }
    nav ul li a{
        padding-left: 30%;

    }

    ul {
        top: 5%;
    }
    .success-title {
        display: none;
    }
}

@media screen and (max-width: 767px) {
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

    .download-text {
        display: none;
    }

    .download-button {
        height: 57px;
        width: 57px;
    }
}

@media screen and (max-width: 450px) {
    .contact-email {
        margin-left: 0;
    }

    .user-profile {
        display: none;
    }

    .home-text {
        display: none;
    }
    .home-button {
        width: 100px;
    }

}

</style>
