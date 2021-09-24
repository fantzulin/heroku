<template>
  <div>
    <p>pressKey: {{ pressKey }}</p>
    <input type="text" @keyup="press">
    <el-image :src="src"></el-image>
  </div>
</template>

<style lang="scss">
</style>

<script>
export default {
  data() {
    return {
      pressKey: '',
      src: ''
    }
  },
  methods: {
    press(event) {
      this.pressKey = event.key;
      switch(event.key){
        case "a":
          console.log("a");
          this.src = require("../assets/logo.png");
          break;
        default:
          console.log("default");
          this.src = require("../assets/cards.jpg");
          break;
      };

      window.setTimeout(() => {
        event.target.value = '';
      }, 500);
    }
  },
}
</script>
