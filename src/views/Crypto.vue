<template>
  <div class="div-box">
    <p class="m-0 text-start text-color-secondary">Next update in {{ time }}s</p>
    <el-table :data="coin_list" style="width: 100%">
      <el-table-column label="Coin">
        <template #default="scope">
          <div class="d-flex align-items-center">
            <el-image :src="scope.row.imgsrc"/>
            <span style="margin-left: 5px;">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Price">
        <template #default="scope">
          <span>${{ scope.row.current_price }} TWD</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="text-left">
      <p>API - 使用 <el-link type="primary" href="https://www.coingecko.com/en/api" target="_blank" rel="nofollow">CoinGecko</el-link> 的 API 取得加幣貨幣的幣價資訊。</p>
    </div>
  </div>
</template>

<style lang="scss">
  .d-flex {
    display: flex;
  }

  .align-items-center {
    align-items: center;
  }

  .m-0 {
    margin: 0;
  }

  .text-start {
    text-align: left;
  }

  .text-color-secondary {
    color: #909399;
  }

  .el-image {
    width: 20px;
    height: 20px;
  }
</style>

<script>


export default {
  
  data() {
    return {
      coin_list: [],
      timer: null,
      time: 10
    }
  },
  created() {
    let coins = {};
    let c_link = this.coin_list;
    const axios = require('axios');
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=twd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
      .then(function (response) {
        response.data.map( item => {
          coins = {
            "name": item.name,
            "current_price": item.current_price,
            "imgsrc": item.image,
          }
          c_link.push(coins);
        });
      });
  },
  methods: {
    countdown() {
      this.time --;
      if(this.time < 0){
        this.time = 10;
        this.coin_list = [];
        this.getprice()
      }
    },
    getprice() {
      let coins = {};
      let c_link = this.coin_list;
      const axios = require('axios');
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=twd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
      .then(function (response) {
        response.data.map( item => {
          coins = {
            "name": item.name,
            "current_price": item.current_price,
            "imgsrc": item.image,
          }
          c_link.push(coins);
        });
      });
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      setTimeout(this.countdown, 0)
    }, 1000)
  }
}
</script>
