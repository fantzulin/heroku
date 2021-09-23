<template>
  <div class="div-box">
    <el-card class="box-card" shadow="hover">
      <span>{{ dateTime.month }}/{{ dateTime.date }}, {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}</span>
      <h2 id="name"></h2>
      <h1 id="temp"></h1>
      <span id="weather"></span>
    </el-card>
    <div class="text-left">
      <p>JavaScript - 使用 new Date() function，取得日期資訊。</p>
      <p>API - 使用 <el-link type="primary" href="https://openweathermap.org/" target="_blank" rel="nofollow">OpenWeatherMap</el-link> 的 API 取得台北的天氣資訊。</p>
    </div>
  </div>
</template>

<style lang="scss">
  .div-box{
    width: 410px;
    max-width: 100%;
    .box-card{
      margin: 0 auto;
      width: 300px;
    }
    .text-left{
      text-align: left;
    }
  }
  
</style>

<script>
const date = new Date();
export default {
  data() {
    const axios = require('axios');
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Taipei&units=metric&appid=c554d60a090a1e44b92ef809a1906523&lang=zh_tw')
      .then(function (response) {
        // handle success
        let temp_now = response.data.main.temp;
        let city_name = response.data.name;
        let weather_state = response.data.weather[0].main;
        let weather_msg = {
          temp : temp_now,
          name : city_name,
          weather : weather_state
        }
        render_weather(weather_msg)
      })
      .catch(function (error) {
        console.log(error);
      })
    return {
      dateTime: {
        month: date.getMonth() + 1,
        date: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      },
      timer: undefined,
    };
  },
  methods: {
    setDateTime() {
      const date = new Date();
      this.dateTime = {
        month: date.getMonth() + 1,
        date: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      };
    },
  },
  beforeMount() {
    this.timer = setInterval(this.setDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
}

function render_weather(o) {
  let name = document.getElementById("name");
  let temp = document.getElementById("temp");
  let weather = document.getElementById("weather");
  let weather_msg = `Today's weather is ${o.weather}.`
  name.innerText = o.name;
  temp.innerText = o.temp + "°C";
  weather.innerText = weather_msg;
}
</script>
