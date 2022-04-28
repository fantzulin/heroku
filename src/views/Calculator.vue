<template>
  <div class="mx-auto text-start">
    <h3>計算 NFT 成本</h3>
    <div>
        <p>Transaction Hash</p>
        <el-input class="mb-2" v-model="transactionHash" placeholder="Transaction Hash" />
        <p>OpenSea 上架費用</p>
        <div class="d-flex">
            <el-input class="me-2" v-model="listPrice" placeholder="請輸入 OpenSea 上架費用" />
            <el-button v-on:click="getPrice">計算</el-button>
        </div>
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
    <h4>至少需要賣 {{ salePrice }} eth</h4>
    <hr>
    <div class="d-flex">
        <el-image :src="nftImg" class="nft-img me-2" alt="NFT Icon"></el-image>
        <el-link :href="nftLink" target="_blank">
            <span>{{ nftName }}</span>
        </el-link>
    </div>
  </div>
</template>

<style lang="scss">
.d-flex {
    display: flex;
}

.mx-auto {
  margin: 0 auto;
}

.me-2 {
    margin-right: 10px;
}

.mb-2 {
  margin-bottom: 10px;
}

.align-items-center {
  align-items: center;
}

.text-start {
  text-align: left;
}

.nft-img {
    width: 40px;
    border-radius: 100%;
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
        nftImg: '',
        nftLink: '',
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

        const getTransaction = provider.getTransaction(transactionHash).then((receipt) => {
            this.value = Number(ethers.utils.formatEther(receipt.value));
            return Number(ethers.utils.formatEther(receipt.value));
        });

        const getTransactionReceipt = provider.getTransactionReceipt(transactionHash).then((receipt) => {
            let receiptMsg = {
                transFee: ethers.utils.formatEther(receipt.gasUsed.mul(receipt.effectiveGasPrice)),
                contract: receipt.logs[0].address,
            }
            this.transFee = receiptMsg.transFee;
            return receiptMsg
        });

        Promise.all([getTransaction, getTransactionReceipt]).then(values => {
            axios.get('https://api.opensea.io/api/v1/asset_contract/' + values[1].contract).then((response) => {
                this.nftName = response.data.name;
                this.nftImg = response.data.collection.image_url;
                this.nftLink = 'https://opensea.io/collection/' + response.data.collection.slug;
                this.royaltyPrice = math.divide(response.data.seller_fee_basis_points, 100);
                let x = math.add(values[0], values[1].transFee);
                let cost = math.add(x, this.listPrice);
                let royPriceNum = math.divide(response.data.seller_fee_basis_points, 10000);
                let royPrice = math.add(1, royPriceNum);
                let y = roundToFour(math.multiply(cost, royPrice));
                this.salePrice = y;
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
</script>
