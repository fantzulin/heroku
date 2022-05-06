<template>
  <div class="card-content">
    <h5>輸入單字來顯示字卡</h5>
    <p>Words: {{ character }}</p>
    <div class="input-content">
      <el-input v-model="character" placeholder="輸入一個單字"/>
      <el-button v-on:click="showCard">顯示字卡</el-button>
    </div>
    <el-image :src="src"></el-image>
    <div class="text-left">
      <p>Vue.js - 使用 v-model 指令取得 input 的內容，使用 v-on:click 事件執行 function。</p>
      <p>API - 使用 <el-link type="primary" href="https://www.pexels.com/zh-tw/api/" target="_blank" rel="nofollow">Pexels</el-link> 的 API 取得圖片資訊。</p>
    </div>
  </div>
</template>

<style lang="scss">
  .card-content{
    margin: 0 auto;
    width: 300px;
    .input-content{
      display: flex;
    }
    .text-left{
      text-align: left;
    }
  }
</style>

<script>
</script>
