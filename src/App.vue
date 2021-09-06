<template>
  <el-container>
    <el-header>
      <el-menu
        default-active="1"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router="true"
      >
        <el-menu-item index="1" route="/">Home</el-menu-item>
        <el-menu-item index="2" route="/about">About</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>

</script>