"use strict";(self["webpackChunkfantzulin"]=self["webpackChunkfantzulin"]||[]).push([[610],{34610:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(66252),a=n(3577);const c={class:"div-box"},r={class:"m-0 text-start text-color-secondary"},s={class:"d-flex align-items-center"},l={style:{"margin-left":"5px"}},o={class:"text-left"},p=(0,i.Uk)("API - 使用 "),u=(0,i.Uk)("CoinGecko"),m=(0,i.Uk)(" 的 API 取得加幣貨幣的幣價資訊。");function _(e,t,n,_,d,h){const g=(0,i.up)("el-image"),w=(0,i.up)("el-table-column"),f=(0,i.up)("el-table"),k=(0,i.up)("el-link");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("p",r,"Next update in "+(0,a.zw)(d.time)+"s",1),(0,i.Wm)(f,{data:d.coin_list,style:{width:"100%"}},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{label:"Coin"},{default:(0,i.w5)((e=>[(0,i._)("div",s,[(0,i.Wm)(g,{src:e.row.imgsrc},null,8,["src"]),(0,i._)("span",l,(0,a.zw)(e.row.name),1)])])),_:1}),(0,i.Wm)(w,{label:"Price"},{default:(0,i.w5)((e=>[(0,i._)("span",null,"$"+(0,a.zw)(e.row.current_price)+" TWD",1)])),_:1})])),_:1},8,["data"]),(0,i._)("div",o,[(0,i._)("p",null,[p,(0,i.Wm)(k,{type:"primary",href:"https://www.coingecko.com/en/api",target:"_blank",rel:"nofollow"},{default:(0,i.w5)((()=>[u])),_:1}),m])])])}var d={data(){return{coin_list:[],timer:null,time:10}},created(){let e={},t=this.coin_list;const i=n(9669);i.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=twd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h").then((function(n){n.data.map((n=>{e={name:n.name,current_price:n.current_price,imgsrc:n.image},t.push(e)}))}))},methods:{countdown(){this.time--,this.time<0&&(this.time=10,this.coin_list=[],this.getprice())},getprice(){let e={},t=this.coin_list;const i=n(9669);i.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=twd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h").then((function(n){n.data.map((n=>{e={name:n.name,current_price:n.current_price,imgsrc:n.image},t.push(e)}))}))}},mounted(){this.timer=setInterval((()=>{setTimeout(this.countdown,0)}),1e3)}},h=n(83744);const g=(0,h.Z)(d,[["render",_]]);var w=g}}]);
//# sourceMappingURL=610.8fdcf534.js.map