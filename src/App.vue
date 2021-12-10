<template>
  <el-container>
    <el-header>
      <el-menu
        default-active="1"
        class="el-menu-demo"
        id="header_menu"
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
      <div id="mobile_menu" style="display: none;">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="fas fa-bars"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-link href="/" :underline="false">Home</el-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-link href="/weather" :underline="false">Weather</el-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-link href="/CharacterCard" :underline="false">Character Card</el-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
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

.el-header{
  height: auto;
  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
  #mobile_menu{
    text-align: left;
  }
}

.el-link.el-link--default:hover{
  color: #295ea4;
}
</style>
<script>
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const browser_width = entry.contentRect.width;
    let header_menu = document.getElementById("header_menu");
    let mobile_menu = document.getElementById("mobile_menu");
    if (browser_width < 576){
      header_menu.style.display = "none";
      mobile_menu.style.display = "block";
      console.log('browser_width:', browser_width);
      console.log('mobile mode');
    } else {
      header_menu.style.display = "block";
      mobile_menu.style.display = "none";
    }
  }
  console.log('Size changed');
});

let app = document.getElementById("app");

resizeObserver.observe(app);

</script>