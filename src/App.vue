<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="#000000"
        active-text-color="#295ea4"
        router="true"
      >
        <el-menu-item index="1" route="/">Home</el-menu-item>
        <el-menu-item index="2" route="/weather">Weather</el-menu-item>
        <el-menu-item index="3" route="/CharacterCard">Character Card</el-menu-item>
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
  color: #000000;
}

.el-menu.el-menu--horizontal{
  border-bottom: none;
}
</style>

<script>

</script>