(function(e){function t(t){for(var r,c,u=t[0],l=t[1],i=t[2],d=0,f=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return l.p+"assets/js/"+({}[e]||e)+"."+{"chunk-01c08194":"42f35a42","chunk-1f8c8cf2":"01fab2ba","chunk-ea482ed2":"f0c47862"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-01c08194":1,"chunk-1f8c8cf2":1,"chunk-ea482ed2":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-01c08194":"95a551a2","chunk-1f8c8cf2":"a83cddeb","chunk-ea482ed2":"aea45f3c"}[e]+".css",a=l.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){i=f[u],d=i.getAttribute("data-href");if(d===r||d===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],s.parentNode.removeChild(s),n(o)},s.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(s)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=u(e);var f=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}a[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var r={"./CharacterCard.vue":["46e0","chunk-ea482ed2"],"./Home.vue":["bb51","chunk-1f8c8cf2"],"./Weather.vue":["6a05","chunk-01c08194"]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id="1a5d",e.exports=c},"3dfd":function(e,t,n){"use strict";var r=n("679a"),c=n("42d8");n("9cdc");c["default"].render=r["a"],t["default"]=c["default"]},"42d8":function(e,t,n){"use strict";var r=n("527a"),c=n.n(r);n.d(t,"default",(function(){return c.a}))},"527a":function(e,t,n){var r=n("6374").default,c=new ResizeObserver((function(e){var t,n=r(e);try{for(n.s();!(t=n.n()).done;){var c=t.value,a=c.contentRect.width,o=document.getElementById("header_menu"),u=document.getElementById("mobile_menu");a<576?(o.style.display="none",u.style.display="block",console.log("browser_width:",a),console.log("mobile mode")):(o.style.display="block",u.style.display="none")}}catch(l){n.e(l)}finally{n.f()}console.log("Size changed")})),a=document.getElementById("app");c.observe(a)},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("3dfd"),a=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),o=function(e){return function(){return n("1a5d")("./".concat(e,".vue"))}},u=[{path:"/",name:"Home",component:o("Home")},{path:"/weather",name:"weather",component:o("Weather")},{path:"/CharacterCard",name:"CharacterCard",component:o("CharacterCard")}],l=Object(a["a"])({history:Object(a["b"])("/"),routes:u}),i=l,d=n("5502"),f=n("260b"),s=n("66ce"),b={apiKey:"AIzaSyB900FNxKYIwpFvlFcs4SqZro8bHPiqxvs",authDomain:"fantzulin-e590c.firebaseapp.com",projectId:"fantzulin-e590c",storageBucket:"fantzulin-e590c.appspot.com",messagingSenderId:"937701848678",appId:"1:937701848678:web:d30e705555247cb5b11fa7"},h=Object(f["a"])(b);function p(){var e=Object(s["b"])(h);Object(s["a"])(Object(s["c"])(e,"/food")).then((function(e){console.log(e.val())})).catch((function(){alert("伺服器發生錯誤，請稍後再試")}))}var O=Object(d["a"])({state:{},mutations:{},actions:{},modules:{}});p();var j=n("bc3a"),m=n.n(j),v=n("130e"),y=n("1250"),g=(n("7437"),Object(r["j"])(c["default"]));g.use(O),g.use(i),g.use(v["a"],m.a),g.use(y["a"]),g.mount("#app")},"679a":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("7a23"),c=Object(r["p"])("Home"),a=Object(r["p"])("Weather"),o=Object(r["p"])("Character Card"),u={id:"mobile_menu",style:{display:"none"}},l=Object(r["n"])("span",{class:"el-dropdown-link"},[Object(r["n"])("i",{class:"fas fa-bars"})],-1),i=Object(r["p"])("Home"),d=Object(r["p"])("Weather"),f=Object(r["p"])("Character Card");function s(e,t){var n=Object(r["S"])("el-menu-item"),s=Object(r["S"])("el-menu"),b=Object(r["S"])("el-link"),h=Object(r["S"])("el-dropdown-item"),p=Object(r["S"])("el-dropdown-menu"),O=Object(r["S"])("el-dropdown"),j=Object(r["S"])("el-header"),m=Object(r["S"])("router-view"),v=Object(r["S"])("el-main"),y=Object(r["S"])("el-container");return Object(r["L"])(),Object(r["k"])(y,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(j,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(s,{"default-active":"1",class:"el-menu-demo",id:"header_menu",mode:"horizontal",onSelect:e.handleSelect,"text-color":"#000000","active-text-color":"#295ea4",router:"true"},{default:Object(r["hb"])((function(){return[Object(r["q"])(n,{index:"1",route:"/"},{default:Object(r["hb"])((function(){return[c]})),_:1}),Object(r["q"])(n,{index:"2",route:"/weather"},{default:Object(r["hb"])((function(){return[a]})),_:1}),Object(r["q"])(n,{index:"3",route:"/CharacterCard"},{default:Object(r["hb"])((function(){return[o]})),_:1})]})),_:1},8,["onSelect"]),Object(r["n"])("div",u,[Object(r["q"])(O,{trigger:"click"},{dropdown:Object(r["hb"])((function(){return[Object(r["q"])(p,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(h,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(b,{href:"/",underline:!1},{default:Object(r["hb"])((function(){return[i]})),_:1})]})),_:1}),Object(r["q"])(h,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(b,{href:"/weather",underline:!1},{default:Object(r["hb"])((function(){return[d]})),_:1})]})),_:1}),Object(r["q"])(h,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(b,{href:"/CharacterCard",underline:!1},{default:Object(r["hb"])((function(){return[f]})),_:1})]})),_:1})]})),_:1})]})),default:Object(r["hb"])((function(){return[l]})),_:1})])]})),_:1}),Object(r["q"])(v,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(m)]})),_:1})]})),_:1})}},"9cdc":function(e,t,n){"use strict";n("c701")},c701:function(e,t,n){}});
//# sourceMappingURL=app.47009742.js.map