<template>
  <div class="right">
    <Balance />
    <div class="right-bottom">
      <div class="graphic">
        <Graphic />
      </div>
      <div class="transactions">
        <Transactions />
      </div>
    </div>
  </div>
</template>

<script>
import Balance from '../../../components/module/homeBalance'
import Graphic from '../../../components/module/homeGraphic'
import Transactions from '../../../components/module/homeTransactions'
export default {
  name: 'Content',
  components: {
    Balance,
    Graphic,
    Transactions
  }
}
</script>

<style scoped>
.graphic {
  width: 50%;
  min-height: 300px;
  margin-right: 3%;
}
.transactions {
  width: 50%;
  height: 100%;
}
.right-bottom {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 767px) {
  .right-bottom {
    flex-direction: column;
  }
  .transactions {
    width: 100%;
  }
  .graphic {
    width: 100%;
  }
}
</style>
