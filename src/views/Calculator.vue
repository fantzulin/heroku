<template>
  <div class="max-w-half mx-auto text-start">
    <h3>計算 NFT 成本</h3>
    <div>
        <p>Transaction Hash</p>
        <el-input class="m-2" v-model="transactionHash" placeholder="Transaction Hash" />
        <el-button v-on:click="getPrice">計算</el-button>
    </div>
    <div>
        <p>Value</p>
        <h5>{{ value }}</h5>
    </div>
    <div>
        <p>Transaction fee</p>
        <h5>{{ transFee }}</h5>
    </div>
    <div>
        <p>{{ nftName }} Royalty</p>
        <h5>{{ royaltyPrice }}%</h5>
    </div>
    <el-row :gutter="20" class="align-items-center">
      <span>OpenSea 上架費用</span>
      <el-input class="m-2" v-model="listPrice" placeholder="請輸入 OpenSea 上架費用" />
    </el-row>
    
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

.text-start {
  text-align: left;
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
        royaltyPrice: '',
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

        let mintValue = provider.getTransaction(transactionHash).then((receipt) => {
            console.log('getTransaction:', receipt);
            return Number(ethers.utils.formatEther(receipt.value));
        });

        mintValue.then((successMessage) => {
            console.log('mintValue success:', successMessage)
            this.value = successMessage;
        });

        let transReceipt = provider.getTransactionReceipt(transactionHash).then((receipt) => {
            let receiptMsg = {
                transFee: ethers.utils.formatEther(receipt.gasUsed.mul(receipt.effectiveGasPrice)),
                contract: receipt.logs[0].address,
            }
            return receiptMsg
        });

        transReceipt.then((successMessage) => {
            let openseaMsg = {};
            console.log('getTransactionReceipt success:', successMessage)
            this.transFee = successMessage.transFee;
            this.contract = successMessage.contract;
            axios.get('https://api.opensea.io/api/v1/asset_contract/' + successMessage.contract).then((response) => {
                console.log(response)
                openseaMsg = {
                    nftName: response.data.name,
                    royaltyPrice: math.divide(response.data.seller_fee_basis_points, 100),
            }
            this.nftName = openseaMsg.nftName;
            this.royaltyPrice = openseaMsg.royaltyPrice;
            });
        });
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

function roundToFour(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}

console.log('roundToFour:', roundToFour)

// let x = math.add(mintValue, this.transFee);
// console.log('value_2:', this.value);
// console.log("x:", x)
// let cost = math.add(x, this.listPrice);
// console.log("cost:", cost)
// let royPrice = math.divide(response.data.seller_fee_basis_points, 10000);
// let royPriceNum = math.add(1, royPrice);
// console.log("royPrice:", royPrice)
// let y = roundToFour(math.multiply(cost, royPriceNum));
// this.salePrice = y;
</script>
