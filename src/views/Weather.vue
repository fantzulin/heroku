<template>
  <div class="div-box">
    <el-table :data="coin_list" style="width: 100%">
      <el-table-column label="Coin">
        <template #default="scope">
          <div class="d-flex align-items-center">
            <el-image :src="scope.row.imgsrc"/>
            <span>{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="current_price" label="Price"/>
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

  .el-image {
    width: 20px;
    height: 20px;
  }
</style>

<script>
  const CoinGecko = require('coingecko-api');
  const CoinGeckoClient = new CoinGecko();
  let coins = {};

export default {
  data() {
    return {
      coin_list: [],
    }
  },
  async created() {
    let markets = await CoinGeckoClient.coins.markets({
      vs_currency: "twd",
      order: CoinGecko.ORDER.MARKET_CAP_DESC,
      per_page: 10,
      page: 1,
    }).then(data => {
      let coins_id = data.data.map( item => {
        coins = {
          "name": item.name,
          "current_price": item.current_price,
          "imgsrc": item.image,
        }
        this.coin_list.push(coins)
      });
    });
  }
}
</script>
