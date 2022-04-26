<template>
  <div class="max-w-half mx-auto text-start">
    <h3>計算 NFT 成本</h3>
    <el-row :gutter="20" class="align-items-center">
        <span>Transaction Hash</span>
        <el-input class="m-2 max-w-150" v-model="transactionHash" placeholder="Transaction Hash" />
    </el-row>
    <div>
        <p>Value</p>
        <h5>{{ value }}</h5>
    </div>
    <div>
        <p>Transaction fee</p>
        <h5>{{ transFee }}</h5>
    </div>
    <el-row :gutter="20" class="align-items-center">
      <span>OpenSea 上架費用</span>
      <el-input class="m-2 max-w-150" v-model="listPrice" placeholder="請輸入 OpenSea 上架費用" />
    </el-row>
    <div>
        <p>{{ nftName }} Royalty</p>
        <h5></h5>
    </div>
    <el-row :gutter="20" class="align-items-center">
      <span>Royalty</span>
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
import { ethers } from "ethers";
let provider = ethers.getDefaultProvider('homestead');
const axios = require('axios');

export default {
  data() {
    return {
        transactionHash: '',
        value: '',
        transFee: '',
        nftName: '',
        contract: '',
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
        let transactionHash = this.transactionHash;

        provider.getTransaction(transactionHash).then((receipt) => {
            console.log('getTransaction:', receipt);
            this.value = Number(ethers.utils.formatEther(receipt.value));
        });
        provider.getTransactionReceipt(transactionHash).then((receipt) => {
            console.log('getTransactionReceipt:', receipt);
            this.transFee = ethers.utils.formatEther(receipt.gasUsed.mul(receipt.effectiveGasPrice));
            this.contract = receipt.logs[0].address;
            axios.get('https://api.opensea.io/api/v1/asset_contract/' + this.contract)
            .then(function (response) {
                console.log(response)
                // let dataName = response.data.name;
                // let basisFee = response.data.seller_fee_basis_points;
                // let sellerFee = response.data.opensea_seller_fee_basis_points;
            });
        });

        let buy_price = math.add(this.value, this.transFee, this.listPrice);
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
