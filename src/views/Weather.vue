<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <span>{{ current_date_time() }}</span>
      <h2 id="name"></h2>
      <h1 id="temp"></h1>
      <span id="weather"></span>
    </el-card>
  </div>
</template>

<style scoped>
  .box-card{
    width: 300px;
  }
</style>

<script>
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
  },
  methods: {
    current_date_time(){
      const current = new Date();
      const date = `${current.getMonth()+1}/${current.getDate()}`;
      const time = current.getHours() + ":" + current.getMinutes();
      const currentDate = date +', '+ time;

      return currentDate
    }
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
