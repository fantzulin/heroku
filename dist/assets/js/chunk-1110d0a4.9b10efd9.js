(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1110d0a4"],{"6a05":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c={class:"div-box"},i=Object(a["n"])("h2",{id:"name"},null,-1),r=Object(a["n"])("h1",{id:"temp"},null,-1),o=Object(a["n"])("span",{id:"weather"},null,-1),u={class:"text-left"},s=Object(a["n"])("p",null,"JavaScript - 使用 new Date() function，取得日期資訊。",-1),d=Object(a["p"])("API - 使用 "),m=Object(a["p"])("OpenWeatherMap"),b=Object(a["p"])(" 的 API 取得台北的天氣資訊。");function h(e,t){var n=Object(a["S"])("el-card"),h=Object(a["S"])("el-link");return Object(a["L"])(),Object(a["m"])("div",c,[Object(a["q"])(n,{class:"box-card",shadow:"hover"},{default:Object(a["hb"])((function(){return[Object(a["n"])("span",null,Object(a["W"])(e.dateTime.month)+"/"+Object(a["W"])(e.dateTime.date)+", "+Object(a["W"])(e.dateTime.hours)+":"+Object(a["W"])(e.dateTime.minutes)+":"+Object(a["W"])(e.dateTime.seconds),1),i,r,o]})),_:1}),Object(a["n"])("div",u,[s,Object(a["n"])("p",null,[d,Object(a["q"])(h,{type:"primary",href:"https://openweathermap.org/",target:"_blank",rel:"nofollow"},{default:Object(a["hb"])((function(){return[m]})),_:1}),b])])])}n("b0c0");var l=new Date,p={data:function(){var e=n("bc3a");return e.get("https://api.openweathermap.org/data/2.5/weather?q=Taipei&units=metric&appid=c554d60a090a1e44b92ef809a1906523&lang=zh_tw").then((function(e){var t=Math.round(e.data.main.temp),n=e.data.name,a=e.data.weather[0].main,c={temp:t,name:n,weather:a};f(c)})).catch((function(e){console.log(e)})),{dateTime:{month:l.getMonth()+1,date:l.getDate(),hours:l.getHours(),minutes:l.getMinutes(),seconds:l.getSeconds()},timer:void 0}},methods:{setDateTime:function(){var e=new Date;this.dateTime={month:e.getMonth()+1,date:e.getDate(),hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}}},beforeMount:function(){this.timer=setInterval(this.setDateTime,1e3)},beforeUnmount:function(){clearInterval(this.timer)}};function f(e){var t=document.getElementById("name"),n=document.getElementById("temp"),a=document.getElementById("weather"),c="Today's weather is ".concat(e.weather,".");t.innerText=e.name,n.innerText=e.temp+"°C",a.innerText=c}n("b7b4");p.render=h;t["default"]=p},a182:function(e,t,n){},b0c0:function(e,t,n){var a=n("83ab"),c=n("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,u="name";a&&!(u in i)&&c(i,u,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(e){return""}}})},b7b4:function(e,t,n){"use strict";n("a182")}}]);
//# sourceMappingURL=chunk-1110d0a4.9b10efd9.js.map