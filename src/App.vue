<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active = activeIndex
        class="el-menu-demo"
        id="header_menu"
        mode="horizontal"
        @select="handleSelect"
        text-color="#000000"
        active-text-color="#295ea4"
        router="true"
      >
        <el-menu-item index="Home" route="/">Home</el-menu-item>
        <el-menu-item index="Crypto" route="/Crypto">Crypto Price</el-menu-item>
        <el-menu-item index="Calculator" route="/Calculator">Calculator</el-menu-item>
        <el-menu-item index="CharacterCard" route="/CharacterCard">Character Card</el-menu-item>
        <el-menu-item index="MyTodo" route="/MyTodo">To Do List</el-menu-item>
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
                <el-link href="/Crypto" :underline="false">Crypto Price</el-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-link href="/Calculator" :underline="false">Calculator</el-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-link href="/CharacterCard" :underline="false">Character Card</el-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-link href="/MyTodo" :underline="false">To Do List</el-link>
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
export default {
  data(){
    return {
       activeIndex: ''
    }
  },

  mounted (){
    let router_path = window.location.href.split('/')[3];
    if(router_path == ''){
      this.activeIndex = "home";
    } else {
      this.activeIndex = router_path;
    }
  }
}

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