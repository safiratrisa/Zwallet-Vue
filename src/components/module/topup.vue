<template>
    <div class="aside2">
        <div class="topup-title">How To Top Up</div>
        <div class="step">
            <div class="step-1">
                <p v-purple class="no">1</p>
                <p>Go to the nearest ATM or you can use E-Banking</p>
            </div>
            <div class="step-2">
                <p v-purple class="no">2</p>
                <p>Type your security number on the ATM or E-Banking</p>
            </div>
            <div class="step-3">
                <p v-purple class="no">3</p>
                <p>Select "Transfer" in the menu</p>
            </div>
            <div class="step-4">
                <p v-purple class="no">4</p>
                <p>Type the virtual account number that we provide you at the top</p>
            </div>
            <div class="step-5">
                <p v-purple class="no">5</p>
                <p>Type the amount of the money you want to top up</p>
            </div>
            <div class="step-6">
                <p v-purple class="no">6</p>
                <p>Read the summary details</p>
            </div>
            <div class="step-7">
                <p v-purple class="no">7</p>
                <p>Press transfer / top up</p>
            </div>
            <div class="step-8">
                <p v-purple class="no">8</p>
                <p>You can see your money in Zwallet within 3 hours</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopUp',
  title: 'Top Up'

}
</script>

<style lang="scss" scoped>
.step-1, .step-2, .step-3, .step-4, .step-5, .step-6, .step-7, .step-8 {
    height: 88px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 5px;
    padding-top: 4%;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    font-weight: normal;
    font-size: 16px;
    color: #7A7886;
    display: flex;
    flex-direction: row;
}

.no {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    margin-right: 2%;
    margin-left: 1%;

}
.topup-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3A3D42;
    margin-bottom: 2%;
}
</style>
