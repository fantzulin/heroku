<template>
  <div class="weather">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

const axios = require('axios');
axios.get('https://api.openweathermap.org/data/2.5/weather?q=Taipei&units=metric&appid=c554d60a090a1e44b92ef809a1906523&lang=zh_tw')
  .then(function (response) {
    // handle success
    console.log(response.data.main.temp);
    console.log(response.data.name);
    console.log(response.data.weather[0].main);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
</script>
