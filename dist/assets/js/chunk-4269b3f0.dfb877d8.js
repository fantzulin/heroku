(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4269b3f0"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1a62":function(t,e,r){},"2e94":function(t,e,r){r("6d93"),t.exports=self.fetch.bind(self)},"46e0":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),o={class:"card-content"},i=Object(n["n"])("h5",null,"輸入單字來顯示字卡",-1),s={class:"input-content"},a=Object(n["p"])("顯示字卡"),u={class:"text-left"},c=Object(n["n"])("p",null,"Vue.js - 使用 v-model 指令取得 input 的內容，使用 v-on:click 事件執行 function。",-1),f=Object(n["p"])("API - 使用 "),h=Object(n["p"])("Pexels"),d=Object(n["p"])(" 的 API 取得圖片資訊。");function l(t,e,r,l,p,y){var b=Object(n["S"])("el-input"),m=Object(n["S"])("el-button"),v=Object(n["S"])("el-image"),w=Object(n["S"])("el-link");return Object(n["L"])(),Object(n["m"])("div",o,[i,Object(n["n"])("p",null,"Words: "+Object(n["W"])(p.character),1),Object(n["n"])("div",s,[Object(n["q"])(b,{modelValue:p.character,"onUpdate:modelValue":e[0]||(e[0]=function(t){return p.character=t}),placeholder:"輸入一個單字"},null,8,["modelValue"]),Object(n["q"])(m,{onClick:y.showCard},{default:Object(n["hb"])((function(){return[a]})),_:1},8,["onClick"])]),Object(n["q"])(v,{src:p.src},null,8,["src"]),Object(n["n"])("div",u,[c,Object(n["n"])("p",null,[f,Object(n["q"])(w,{type:"primary",href:"https://www.pexels.com/zh-tw/api/",target:"_blank",rel:"nofollow"},{default:Object(n["hb"])((function(){return[h]})),_:1}),d])])])}r("ac1f"),r("841c");var p=r("de69"),y=Object(p["a"])("563492ad6f917000010000012e37dbba6ed644bd89213f4459260996"),b={data:function(){return{character:"",src:r("cf05")}},methods:{showCard:function(){var t=this,e=this.character;y.photos.search({query:e,per_page:1,locale:"zh-TW"}).then((function(e){var r=e.photos[0].src.medium;t.src=r}))}}},m=(r("9746"),r("d959")),v=r.n(m);const w=v()(b,[["render",l]]);e["default"]=w},"6d93":function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return h})),r.d(e,"Request",(function(){return O})),r.d(e,"Response",(function(){return A})),r.d(e,"DOMException",(function(){return x})),r.d(e,"fetch",(function(){return E}));var n="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof n&&n,o={searchParams:"URLSearchParams"in n,iterable:"Symbol"in n&&"iterator"in Symbol,blob:"FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in n,arrayBuffer:"ArrayBuffer"in n};function i(t){return t&&DataView.prototype.isPrototypeOf(t)}if(o.arrayBuffer)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function c(t){return"string"!==typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o.iterable&&(e[Symbol.iterator]=function(){return e}),e}function h(t){this.map={},t instanceof h?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function p(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function y(t){var e=new FileReader,r=l(e);return e.readAsText(t),r}function b(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:o.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:o.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o.arrayBuffer&&o.blob&&i(t)?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=d(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(p)}),this.text=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return y(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(b(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(j)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(t,e){t=u(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},h.prototype["delete"]=function(t){delete this.map[u(t)]},h.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},h.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},h.prototype.set=function(t,e){this.map[u(t)]=c(e)},h.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},h.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},h.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},h.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},o.iterable&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function g(t){var e=t.toUpperCase();return w.indexOf(e)>-1?e:t}function O(t,e){if(!(this instanceof O))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e=e||{};var r=e.body;if(t instanceof O){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new h(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new h(e.headers)),this.method=g(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),("GET"===this.method||"HEAD"===this.method)&&("no-store"===e.cache||"no-cache"===e.cache)){var n=/([?&])_=[^&]*/;if(n.test(this.url))this.url=this.url.replace(n,"$1_="+(new Date).getTime());else{var o=/\?/;this.url+=(o.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function j(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function _(t){var e=new h,r=t.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e}function A(t,e){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new h(e.headers),this.url=e.url||"",this._initBody(t)}O.prototype.clone=function(){return new O(this,{body:this._bodyInit})},v.call(O.prototype),v.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];A.redirect=function(t,e){if(-1===T.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var x=n.DOMException;try{new x}catch(B){x=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},x.prototype=Object.create(Error.prototype),x.prototype.constructor=x}function E(t,e){return new Promise((function(r,i){var s=new O(t,e);if(s.signal&&s.signal.aborted)return i(new x("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}function f(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:_(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;setTimeout((function(){r(new A(e,t))}),0)},a.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){i(new x("Aborted","AbortError"))}),0)},a.open(s.method,f(s.url),!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&(o.blob?a.responseType="blob":o.arrayBuffer&&s.headers.get("Content-Type")&&-1!==s.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!==typeof e.headers||e.headers instanceof h?s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,c(e.headers[t]))})),s.signal&&(s.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",u)}),a.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))}E.polyfill=!0,n.fetch||(n.fetch=E,n.Headers=h,n.Request=O,n.Response=A)},"841c":function(t,e,r){"use strict";var n=r("d784"),o=r("825a"),i=r("1d80"),s=r("129f"),a=r("577e"),u=r("14c3");n("search",(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](a(r))},function(t){var n=o(this),i=a(t),c=r(e,n,i);if(c.done)return c.value;var f=n.lastIndex;s(f,0)||(n.lastIndex=0);var h=u(n,i);return s(n.lastIndex,f)||(n.lastIndex=f),null===h?-1:h.index}]}))},9746:function(t,e,r){"use strict";r("1a62")},cf05:function(t,e,r){t.exports=r.p+"assets/img/logo.82b9c7a5.png"},de69:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return f}));var n={photo:"https://api.pexels.com/v1/",video:"https://api.pexels.com/videos/",collections:"https://api.pexels.com/v1/collections/"};function o(t,e){var r={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","User-Agent":"Pexels/JavaScript",Authorization:t}},o=n[e];return function(t,e){return fetch(""+o+t+"?"+function(t){return Object.keys(t).map((function(e){return e+"="+t[e]})).join("&")}(e||{}),r).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}}function i(t){var e=o(t,"collections");return{all:function(t){return void 0===t&&(t={}),e("",t)},media:function(t){var r=t.id,n=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e.indexOf(r=i[n])>=0||(o[r]=t[r]);return o}(t,["id"]);return e(""+r,n)},featured:function(t){return void 0===t&&(t={}),e("featured",t)}}}function s(t){return!(!t||!t.photos)}var a={__proto__:null,isPhotos:s,isVideos:function(t){return!(!t||!t.videos)},isError:function(t){return!!t.error}};function u(t){var e=o(t,"photo");return{search:function(t){return e("/search",t)},curated:function(t){return void 0===t&&(t={}),e("/curated",t)},show:function(t){return e("/photos/"+t.id)},random:function(){try{var t=Math.floor(1e3*Math.random());return Promise.resolve(this.curated({page:t,per_page:1})).then((function(t){return s(t)?t.photos[0]:t}))}catch(t){return Promise.reject(t)}}}}function c(t){var e=o(t,"video");return{search:function(t){return e("/search",t)},popular:function(t){return void 0===t&&(t={}),e("/popular",t)},show:function(t){return e("/videos/"+t.id)}}}function f(t){if(!t||"string"!=typeof t)throw new TypeError("An ApiKey must be provided when initiating the Pexel's client.");return{typeCheckers:a,photos:u(t),videos:c(t),collections:i(t)}}r("2e94")}).call(this,r("4362"))}}]);
//# sourceMappingURL=chunk-4269b3f0.dfb877d8.js.map