<template>
    <div class="aside3">
      <div class="graphic">
          <div class="main-graphic">
            <div class="top">
              <div class="box">
                <p class="up">Incomes</p>
                <p class="bottom">Rp {{currency(getBalance.income)}}</p>
            </div>
            <div class="box">
              <p class="up">Expenses</p>
              <p class="bottom">Rp {{currency(getBalance.outcome)}}</p>
            </div>
            </div>
              </div>
            </div>
        </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
var numeral = require('numeral')
export default {
  name: 'Graphic',
  methods: {
    ...mapActions({ getUserBalance: 'getBalance' }),
    currency (num) {
      var string = numeral(num).format('0,0')
      return string
    }
  },
  computed: {
    ...mapGetters(['getBalance'])
  },
  mounted () {
    this.getUserBalance()
  }
}
</script>

<style lang="scss" scoped>
.aside3 {
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    border: 2px solid white;
    padding-top: 5%;
}
.box {
  width: 40%;
    height: 120px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    border: 3px solid #c3caee;
    margin-bottom: 5%;
    text-align: center;
    padding-top: 5%;
    color: #6379F4;
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.up {
  font-weight: 500;
}
.bottom {
  font-weight: 800;
  font-size: 20px;
}
@media screen and (max-width: 767px) {
  .top {
    flex-direction: column;
  }
  .box {
    width: 100%;
  }
}
</style>
