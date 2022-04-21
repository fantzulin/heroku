<template>
  <div class="max-w-half mx-auto text-start">
    <h3>計算 NFT 成本</h3>
    <el-row :gutter="20" class="align-items-center">
      <span>mint 價格（含 gas fee）</span>
      <el-input class="m-2 max-w-150" v-model="mintPrice" placeholder="請輸入 mint 價格（含 gas fee）" />
    </el-row>
    <el-row :gutter="20" class="align-items-center">
      <span>OpenSea 上架費用</span>
      <el-input class="m-2 max-w-150" v-model="listPrice" placeholder="請輸入 OpenSea 上架費用" />
    </el-row>
    <el-row :gutter="20" class="align-items-center">
      <span>版稅，通常是 7.5%（ Royalty + Platform fee ）</span>
      <el-input class="m-2 max-w-150" v-model="royaltyPrice" placeholder="請輸入版稅，通常是 7.5%" />
    </el-row>
    <el-button v-on:click="getPrice">計算</el-button>
    <h4>至少需要賣 {{salePrice}} eth</h4>
  </div>
</template>

<style lang="scss">
.mx-auto {
  margin: 0 auto;
}

.m-2 {
  margin: 10px;
}

.align-items-center {
  align-items: center;
}

.max-w-half {
  max-width: 50%;
}

.max-w-150 {
  max-width: 150px;
}

.text-start {
  text-align: left;
}

input {
  max-width: 100px;
}
</style>

<script>
let math = require('mathjs');

export default {
  data() {
    return {
      mintPrice: 0,
      listPrice: 0,
      royaltyPrice: 0,
      salePrice:0,
    }
  },
  methods: {
    add() {
      return comp('add', arguments)
    },
    subtract() {
      return comp('subtract', arguments)
    },
    multiply() {
      return comp('multiply', arguments)
    },
    divide() {
      return comp('divide', arguments)
    },
    getPrice(){
      let buy_price = math.add(this.mintPrice, this.listPrice);
      let roy_price = math.divide(this.royaltyPrice, 100);
      let roy_count = math.subtract(1, roy_price);
      this.salePrice = math.divide(buy_price, roy_count)
    },
  },
}

function comp(_func, args) {
  let t = math.chain(math.bignumber(args[0]));
  for (let i=1; i<args.length; i++) {
    t = t[_func](math.bignumber(args[i]))
  }
  return parseFloat(t.done())
}
</script>
