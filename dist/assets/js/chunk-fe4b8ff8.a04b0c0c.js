(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe4b8ff8"],{"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return R})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return A})),n.d(t,"l",(function(){return q})),n.d(t,"m",(function(){return z})),n.d(t,"n",(function(){return P})),n.d(t,"o",(function(){return j})),n.d(t,"p",(function(){return y})),n.d(t,"q",(function(){return b})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return k})),n.d(t,"t",(function(){return O})),n.d(t,"u",(function(){return D})),n.d(t,"v",(function(){return M})),n.d(t,"w",(function(){return x})),n.d(t,"x",(function(){return U})),n.d(t,"y",(function(){return W})),n.d(t,"z",(function(){return S}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(e,t){if(!e)throw r(t)},r=function(e){return new Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},a=function(e){const t=[];let n=0,i=0;while(n<e.length){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&r)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<e.length;s+=3){const t=e[s],r=s+1<e.length,o=r?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,h=t>>2,l=(3&t)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(u=64)),i.push(n[h],n[l],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],r=s<e.length,o=r?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const h=s<e.length,l=h?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==l)throw Error();const u=t<<2|o>>4;if(i.push(u),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==l){const e=c<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},h=function(e){const t=o(e);return c.encodeByteArray(t,!0)},l=function(e){return h(e).replace(/\./g,"")},u=function(e){try{return c.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&_(n)&&(e[n]=p(e[n],t[n]));return e}function _(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[l(JSON.stringify(n)),l(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function y(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C="FirebaseError";class w extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=C,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,I.prototype.create)}}class I{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?T(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`,a=new w(i,o,n);return a}}function T(e,t){return e.replace(E,(e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`})}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return JSON.parse(e)}function S(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=O(u(r[0])||""),n=O(u(r[1])||""),s=r[2],i=n["d"]||{},delete n["d"]}catch(r){}return{header:t,claims:n,data:i,signature:s}},k=function(e){const t=N(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},P=function(e){const t=N(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function j(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function A(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(L(n)&&L(r)){if(!A(n,r))return!1}else if(n!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function L(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],h=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(i=c^o&(a^c),s=1518500249):(i=o^a^c,s=1859775393):l<60?(i=o&a|c&(o|a),s=2400959708):(i=o^a^c,s=3395469782);const e=(r<<5|r>>>27)+i+h+s+n[l]&4294967295;h=c,c=a,a=4294967295&(o<<30|o>>>2),o=r,r=e}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;while(i<t){if(0===r)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else while(i<t)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function q(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,s(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;r=65536+(t<<10)+n}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},U=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var i=n("1fd5");class s{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:r})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=r){return this.instances.has(e)}getOptions(e=r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,r]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&r.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=r){return this.component?this.component.multipleInstances?e:r:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===r?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3404:function(e,t,n){},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return no})),n.d(t,"b",(function(){return io})),n.d(t,"c",(function(){return uo})),n.d(t,"d",(function(){return to}));var i=n("589b"),s=n("22e5"),r=n("1fd5"),o=n("e691");const a="@firebase/database",c="0.12.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="";function l(e){h=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(r["z"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(r["t"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(r["h"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new u(t)}}catch(t){}return new d},_=p("localStorage"),f=p("sessionStorage"),m=new o["b"]("@firebase/database"),g=function(){let e=1;return function(){return e++}}(),y=function(e){const t=Object(r["y"])(e),n=new r["c"];n.update(t);const i=n.digest();return r["f"].encodeByteArray(i)},v=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=v.apply(null,i):t+="object"===typeof i?Object(r["z"])(i):i,t+=" "}return t};let b=null,C=!0;const w=function(e,t){Object(r["d"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=o["a"].VERBOSE,b=m.log.bind(m),t&&f.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,f.remove("logging_enabled"))},I=function(...e){if(!0===C&&(C=!1,null===b&&!0===f.get("logging_enabled")&&w(!0)),b){const t=v.apply(null,e);b(t)}},T=function(e){return function(...t){I(e,...t)}},E=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e);m.error(t)},O=function(...e){const t="FIREBASE FATAL ERROR: "+v(...e);throw m.error(t),new Error(t)},S=function(...e){const t="FIREBASE WARNING: "+v(...e);m.warn(t)},N=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},k=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if(Object(r["q"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},R="[MIN_NAME]",x="[MAX_NAME]",j=function(e,t){if(e===t)return 0;if(e===R||t===x)return-1;if(t===R||e===x)return 1;{const n=B(e),i=B(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},A=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(r["z"])(t))},L=function(e){if("object"!==typeof e||null===e)return Object(r["z"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(r["z"])(t[i]),n+=":",n+=L(e[t[i]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){Object(r["d"])(!k(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,o,a,c,h;0===e?(o=0,a=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(c=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=c+i,a=Math.round(e*Math.pow(2,n-c)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const l=[];for(h=n;h;h-=1)l.push(a%2?1:0),a=Math.floor(a/2);for(h=t;h;h-=1)l.push(o%2?1:0),o=Math.floor(o/2);l.push(s?1:0),l.reverse();const u=l.join("");let d="";for(h=0;h<64;h+=8){let e=parseInt(u.substr(h,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},W=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const z=new RegExp("^-?(0*)\\d{1,10}$"),H=-2147483648,V=2147483647,B=function(e){if(z.test(e)){const t=Number(e);if(t>=H&&t<=V)return t}return null},$=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw S("Exception was thrown by user callback.",e),t},Math.floor(0))}},Y=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){S(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',S(e)}}class J{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}J.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X="5",Z="v",ee="s",te="r",ne="f",ie=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",re="p",oe="ac",ae="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function le(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function ue(e,t,n){let i;if(Object(r["d"])("string"===typeof t,"typeof type must == string"),Object(r["d"])("object"===typeof n,"typeof params must == object"),t===ae)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}le(e)&&(n["ns"]=e.namespace);const s=[];return F(n,(e,t)=>{s.push(e+"="+t)}),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(r["h"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(r["j"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},_e={};function fe(e){const t=e.toString();return pe[t]||(pe[t]=new de),pe[t]}function me(e,t){const n=e.toString();return _e[n]||(_e[n]=t()),_e[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&$(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="start",ve="close",be="pLPCommand",Ce="pRTLPCB",we="id",Ie="pw",Te="ser",Ee="cb",Oe="seg",Se="ts",Ne="d",ke="dframe",Pe=1870,Re=30,xe=Pe-Re,je=25e3,De=3e4;class Ae{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=fe(t),this.urlFn=e=>(this.appCheckToken&&(e[oe]=this.appCheckToken),ue(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ge(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(De)),P(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Le((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=n,this.password=i;else{if(t!==ve)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ye]="t",e[Te]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ee]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Z]=X,this.transportSessionId&&(e[ee]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[re]=this.applicationId),this.appCheckToken&&(e[oe]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(e[te]=ne);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ae.forceAllow_=!0}static forceDisallow(){Ae.forceDisallow_=!0}static isAvailable(){return!Object(r["q"])()&&(!!Ae.forceAllow_||!Ae.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!W()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(r["z"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(r["g"])(t),i=M(n,xe);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(r["q"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[ke]="t",n[we]=e,n[Ie]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(r["z"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Le{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(r["q"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=g(),window[be+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Le.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){I("frame writing exception"),s.stack&&I(s.stack),I(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||I("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[we]=this.myID,e[Ie]=this.myPW,e[Te]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Re+n.length<=Pe))break;{const e=this.pendingSegs.shift();n=n+"&"+Oe+i+"="+e.seg+"&"+Se+i+"="+e.ts+"&"+Ne+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(je)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){Object(r["q"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{I("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=16384,Fe=45e3;let qe=null;"undefined"!==typeof MozWebSocket?qe=MozWebSocket:"undefined"!==typeof WebSocket&&(qe=WebSocket);class We{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=fe(t),this.connURL=We.connectionURL_(t,r,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const s={};return s[Z]=X,!Object(r["q"])()&&"undefined"!==typeof location&&location.hostname&&ie.test(location.hostname)&&(s[te]=ne),t&&(s[ee]=t),n&&(s[se]=n),i&&(s[oe]=i),ue(e,ae,s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_.set("previous_websocket_failure",!0);try{if(Object(r["q"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${X}/${h}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:"/"}),s=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];s&&(n["proxy"]={origin:s}),this.mySock=new qe(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new qe(this.connURL,[],e)}}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){We.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==qe&&!We.forceDisallow_}static previouslyFailed(){return _.isInMemoryStorage||!0===_.get("previous_websocket_failure")}markConnectionHealthy(){_.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(r["t"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(r["d"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(r["z"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,Me);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}We.responsesRequiredToBeHealthy=2,We.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ae,We]}initTransports_(e){const t=We&&We["isAvailable"]();let n=t&&!We.previouslyFailed();if(e.webSocketOnly&&(t||S("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[We];else{const e=this.transports_=[];for(const t of Ue.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=6e4,He=5e3,Ve=10240,Be=102400,$e="t",Ye="d",Ge="s",Ke="r",Qe="e",Je="o",Xe="a",Ze="n",et="p",tt="h";class nt{constructor(e,t,n,i,s,r,o,a,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new Ue(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Be?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ve?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($e in e){const t=e[$e];t===Xe?this.upgradeIfSecondaryHealthy_():t===Ke?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Je&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=A("t",e),n=A("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:et,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Xe,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ze,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=A("t",e),n=A("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=A($e,e);if(Ye in e){const n=e[Ye];if(t===tt)this.onHandshake_(n);else if(t===Ze){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===Ke?this.onReset_(n):t===Qe?E("Server Error: "+n):t===Je?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):E("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),X!==n&&S("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ze))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(He))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:et,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(r["d"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){Object(r["d"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(r["p"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new rt}getInitialEvent(e){return Object(r["d"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=32,at=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new ct("")}function lt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ut(e){return e.pieces_.length-e.pieceNum_}function dt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _t(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function ft(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function gt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function vt(e,t){const n=lt(e),i=lt(t);if(null===n)return t;if(n===i)return vt(dt(e),dt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function bt(e,t){if(ut(e)!==ut(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ct(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ut(e)>ut(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class wt{constructor(e,t){this.errorPrefix_=t,this.parts_=ft(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(r["x"])(this.parts_[n]);Et(this)}}function It(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(r["x"])(t),Et(e)}function Tt(e){const t=e.parts_.pop();e.byteLength_-=Object(r["x"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>at)throw new Error(e.errorPrefix_+"has a key path longer than "+at+" bytes ("+e.byteLength_+").");if(e.parts_.length>ot)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ot+") or object contains a cycle "+Ot(e))}function Ot(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new St}getInitialEvent(e){return Object(r["d"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1e3,kt=3e5,Pt=3e3,Rt=3e4,xt=1.3,jt=3e4,Dt="server_kill",At=3;class Lt extends it{constructor(e,t,n,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Lt.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=kt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Object(r["q"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");St.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&rt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Object(r["z"])(s)),Object(r["d"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new r["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))},Pt),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Object(r["d"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(r["d"])(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,s=>{const r=s["d"],o=s["s"];Lt.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(r["h"])(e,"w")){const n=Object(r["w"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();S(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(r["n"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(r["s"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(r["d"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(r["z"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):E("Unrecognized action received from server: "+Object(r["z"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(r["d"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>jt&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},h=function(e){Object(r["d"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:h};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=c&&c.token,a=new nt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{S(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Dt)},s))}catch(E){this.log_("Failed to get token: "+E),o||(this.repoInfo_.nodeAdmin&&S(E),c())}}}interrupt(e){I("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){I("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(r["o"])(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>L(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){I("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=At&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){I("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=At&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(r["q"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+h.replace(/\./g,"-")]=1,Object(r["p"])()?e["framework.cordova"]=1:Object(r["r"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rt.getInstance().currentlyOnline();return Object(r["o"])(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Mt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Mt(R,e),i=new Mt(R,t);return 0!==this.compare(n,i)}minPost(){return Mt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt;class Wt extends Ft{static get __EMPTY_NODE(){return qt}static set __EMPTY_NODE(e){qt=e}compare(e,t){return j(e.name,t.name)}isDefinedOn(e){throw Object(r["e"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Mt.MIN}maxPost(){return new Mt(x,qt)}makePost(e,t){return Object(r["d"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Mt(e,qt)}toString(){return".key"}}const Ut=new Wt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(e=e,r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Ht.RED,this.left=null!=i?i:Bt.EMPTY_NODE,this.right=null!=s?s:Bt.EMPTY_NODE}copy(e,t,n,i,s){return new Ht(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Bt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0,Ht.BLACK=!1;class Vt{copy(e,t,n,i,s){return this}insert(e,t,n){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Bt{constructor(e,t=Bt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Bt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(e,t){return j(e.name,t.name)}function Yt(e,t){return j(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gt;function Kt(e){Gt=e}Bt.EMPTY_NODE=new Vt;const Qt=function(e){return"number"===typeof e?"number:"+q(e):"string:"+e},Jt=function(e){if(e.isLeafNode()){const t=e.val();Object(r["d"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(r["h"])(t,".sv"),"Priority must be a string or number.")}else Object(r["d"])(e===Gt||e.isEmpty(),"priority of unexpected type.");Object(r["d"])(e===Gt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xt,Zt,en;class tn{constructor(e,t=tn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(r["d"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Jt(this.priorityNode_)}static set __childrenNodeConstructor(e){Xt=e}static get __childrenNodeConstructor(){return Xt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new tn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===lt(e)?this.priorityNode_:tn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:tn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=lt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(r["d"])(".priority"!==n||1===ut(e),".priority must be the last token in a path"),this.updateImmediateChild(n,tn.__childrenNodeConstructor.EMPTY_NODE.updateChild(dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===tn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof tn.__childrenNodeConstructor?-1:(Object(r["d"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=tn.VALUE_TYPE_ORDER.indexOf(t),s=tn.VALUE_TYPE_ORDER.indexOf(n);return Object(r["d"])(i>=0,"Unknown leaf type: "+t),Object(r["d"])(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function nn(e){Zt=e}function sn(e){en=e}tn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class rn extends Ft{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?j(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Mt.MIN}maxPost(){return new Mt(x,new tn("[PRIORITY-POST]",en))}makePost(e,t){const n=Zt(e);return new Mt(t,new tn("[PRIORITY-POST]",n))}toString(){return".priority"}}const on=new rn,an=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){const t=e=>parseInt(Math.log(e)/an,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hn=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,null,null);{const c=parseInt(r/2,10)+t,h=s(t,c),l=s(c+1,i);return o=e[c],a=n?n(o):o,new Ht(a,o.node,Ht.BLACK,h,l)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const h=s(r+1,a),l=e[r],u=n?n(l):l;c(new Ht(u,l.node,i,null,h))},c=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ht.BLACK):(a(i,Ht.BLACK),a(i,Ht.RED))}return r},o=new cn(e.length),a=r(o);return new Bt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln;const un={};class dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(r["d"])(un&&on,"ChildrenNode.ts has not been loaded"),ln=ln||new dn({".priority":un},{".priority":on}),ln}get(e){const t=Object(r["w"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bt?t:null}hasIndex(e){return Object(r["h"])(this.indexSet_,e.toString())}addIndex(e,t){Object(r["d"])(e!==Ut,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Mt.Wrap);let o,a=s.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?hn(n,e.getCompare()):un;const c=e.toString(),h=Object.assign({},this.indexSet_);h[c]=e;const l=Object.assign({},this.indexes_);return l[c]=o,new dn(l,h)}addToIndexes(e,t){const n=Object(r["u"])(this.indexes_,(n,i)=>{const s=Object(r["w"])(this.indexSet_,i);if(Object(r["d"])(s,"Missing index implementation for "+i),n===un){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Mt.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),hn(n,s.getCompare())}return un}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Mt(e.name,i))),s.insert(e,e.node)}});return new dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(r["u"])(this.indexes_,n=>{if(n===un)return n;{const i=t.get(e.name);return i?n.remove(new Mt(e.name,i)):n}});return new dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class _n{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Jt(this.priorityNode_),this.children_.isEmpty()&&Object(r["d"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pn||(pn=new _n(new Bt(Yt),null,dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pn}updatePriority(e){return this.children_.isEmpty()?this:new _n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pn:t}}getChild(e){const t=lt(e);return null===t?this:this.getImmediateChild(t).getChild(dt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(r["d"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Mt(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?pn:this.priorityNode_;return new _n(i,r,s)}}updateChild(e,t){const n=lt(e);if(null===n)return t;{Object(r["d"])(".priority"!==lt(e)||1===ut(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(dt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(on,(r,o)=>{t[r]=o.val(e),n++,s&&_n.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1}),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qt(this.getPriority().val())+":"),this.forEachChild(on,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Mt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Mt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Mt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,Mt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,Mt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===Ut||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ut||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(on),n=t.getIterator(on);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Ut?null:this.indexMap_.get(e.toString())}}_n.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fn extends _n{constructor(){super(new Bt(Yt),_n.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _n.EMPTY_NODE}isEmpty(){return!1}}const mn=new fn;Object.defineProperties(Mt,{MIN:{value:new Mt(R,_n.EMPTY_NODE)},MAX:{value:new Mt(x,mn)}}),Wt.__EMPTY_NODE=_n.EMPTY_NODE,tn.__childrenNodeConstructor=_n,Kt(mn),sn(mn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=!0;function yn(e,t=null){if(null===e)return _n.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(r["d"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new tn(n,yn(t))}if(e instanceof Array||!gn){let n=_n.EMPTY_NODE;return F(e,(t,i)=>{if(Object(r["h"])(e,t)&&"."!==t.substring(0,1)){const e=yn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(yn(t))}{const n=[];let i=!1;const s=e;if(F(s,(e,t)=>{if("."!==e.substring(0,1)){const s=yn(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Mt(e,s)))}}),0===n.length)return _n.EMPTY_NODE;const r=hn(n,$t,e=>e.name,Yt);if(i){const e=hn(n,on.getCompare());return new _n(r,yn(t),new dn({".priority":e},{".priority":on}))}return new _n(r,yn(t),dn.Default)}}nn(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn extends Ft{constructor(e){super(),this.indexPath_=e,Object(r["d"])(!yt(e)&&".priority"!==lt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?j(e.name,t.name):s}makePost(e,t){const n=yn(e),i=_n.EMPTY_NODE.updateChild(this.indexPath_,n);return new Mt(t,i)}maxPost(){const e=_n.EMPTY_NODE.updateChild(this.indexPath_,mn);return new Mt(x,e)}toString(){return ft(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Ft{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?j(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Mt.MIN}maxPost(){return Mt.MAX}makePost(e,t){const n=yn(e);return new Mt(t,n)}toString(){return".value"}}const Cn=new bn,wn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function In(e){return{type:"value",snapshotNode:e}}function Tn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function En(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function On(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Sn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.index_=e}updateChild(e,t,n,i,s,o){Object(r["d"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(En(t,a)):Object(r["d"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tn(t,n)):o.trackChildChange(On(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(on,(e,i)=>{t.hasChild(e)||n.trackChildChange(En(e,i))}),t.isLeafNode()||t.forEachChild(on,(t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(On(t,i,s))}else n.trackChildChange(Tn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_n.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.indexedFilter_=new Nn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=kn.getStartPost_(e),this.endPost_=kn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new Mt(t,n))||(n=_n.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_n.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_n.EMPTY_NODE);const s=this;return t.forEachChild(on,(e,t)=>{s.matches(new Mt(e,t))||(i=i.updateImmediateChild(e,_n.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.rangedFilter_=new kn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Mt(t,n))||(n=_n.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=_n.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=_n.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(_n.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;while(r.hasNext()){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);const c=a&&o<this.limit_&&s(t,n)<=0;c?o++:i=i.updateImmediateChild(t.name,_n.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(r["d"])(a.numChildren()===this.limit_,"");const c=new Mt(t,n),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let r=i.getChildAfterChild(this.index_,h,this.reverse_);while(null!=r&&(r.name===t||a.hasChild(r.name)))r=i.getChildAfterChild(this.index_,r,this.reverse_);const u=null==r?1:o(r,c),d=l&&!n.isEmpty()&&u>=0;if(d)return null!=s&&s.trackChildChange(On(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(En(t,e));const n=a.updateImmediateChild(t,_n.EMPTY_NODE),i=null!=r&&this.rangedFilter_.matches(r);return i?(null!=s&&s.trackChildChange(Tn(r.name,r.node)),n.updateImmediateChild(r.name,r.node)):n}}return n.isEmpty()?e:l&&o(h,c)>=0?(null!=s&&(s.trackChildChange(En(h.name,h.node)),s.trackChildChange(Tn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(h.name,_n.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=on}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(r["d"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(r["d"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:R}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(r["d"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(r["d"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:x}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(r["d"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===on}copy(){const e=new Rn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xn(e){return e.loadsAllData()?new Nn(e.getIndex()):e.hasLimit()?new Pn(e):new kn(e)}function jn(e){const t={};if(e.isDefault())return t;let n;return e.index_===on?n="$priority":e.index_===Cn?n="$value":e.index_===Ut?n="$key":(Object(r["d"])(e.index_ instanceof vn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(r["z"])(n),e.startSet_&&(t["startAt"]=Object(r["z"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(r["z"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(r["z"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(r["z"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Dn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==on&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends it{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(r["d"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=An.getListenId_(e,n),a={};this.listens_[o]=a;const c=jn(e._queryParams);this.restRequest_(s+".json",c,(e,t)=>{let c=t;if(404===e&&(c=null,e=null),null===e&&this.onDataUpdate_(s,c,!1,n),Object(r["w"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=An.getListenId_(e,t);delete this.listens_[n]}get(e){const t=jn(e._queryParams),n=e._path.toString(),i=new r["a"];return this.restRequest_(n+".json",t,(e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(r["v"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(r["t"])(a.responseText)}catch(e){S("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&S("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(){this.rootNode_=_n.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return{value:null,children:new Map}}function Fn(e,t,n){if(yt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=lt(t);e.children.has(i)||e.children.set(i,Mn());const s=e.children.get(i);t=dt(t),Fn(s,t,n)}}function qn(e,t,n){null!==e.value?n(t,e.value):Wn(e,(e,i)=>{const s=new ct(t.toString()+"/"+e);qn(i,s,n)})}function Wn(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=1e4,Hn=3e4,Vn=3e5;class Bn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Un(e);const n=zn+(Hn-zn)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,(e,i)=>{i>0&&Object(r["h"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*Vn))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $n;function Yn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Kn(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})($n||($n={}));class Qn{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=$n.ACK_USER_WRITE,this.source=Yn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return Object(r["d"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new Qn(ht(),t,this.revert)}}return Object(r["d"])(lt(this.path)===e,"operationForChild called for unrelated child."),new Qn(dt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=$n.OVERWRITE}operationForChild(e){return yt(this.path)?new Jn(this.source,ht(),this.snap.getImmediateChild(e)):new Jn(this.source,dt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=$n.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new Jn(this.source,ht(),t.value):new Xn(this.source,ht(),t)}return Object(r["d"])(lt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xn(this.source,dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=lt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ti(e,t,n,i){const s=[],r=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(Sn(t.childName,t.snapshotNode))}),ni(e,s,"child_removed",t,i,n),ni(e,s,"child_added",t,i,n),ni(e,s,"child_moved",r,i,n),ni(e,s,"child_changed",t,i,n),ni(e,s,"value",t,i,n),s}function ni(e,t,n,i,s,r){const o=i.filter(e=>e.type===n);o.sort((t,n)=>si(e,t,n)),o.forEach(n=>{const i=ii(e,n,r);s.forEach(s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))})})}function ii(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function si(e,t,n){if(null==t.childName||null==n.childName)throw Object(r["e"])("Should only compare child_ events.");const i=new Mt(t.childName,t.snapshotNode),s=new Mt(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e,t){return{eventCache:e,serverCache:t}}function oi(e,t,n,i){return ri(new Zn(t,n,i),e.serverCache)}function ai(e,t,n,i){return ri(e.eventCache,new Zn(t,n,i))}function ci(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function hi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;const ui=()=>(li||(li=new Bt(D)),li);class di{constructor(e,t=ui()){this.value=e,this.children=t}static fromObject(e){let t=new di(null);return F(e,(e,n)=>{t=t.set(new ct(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(yt(e))return null;{const n=lt(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(dt(e),t);if(null!=s){const e=gt(new ct(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(yt(e))return this;{const t=lt(e),n=this.children.get(t);return null!==n?n.subtree(dt(e)):new di(null)}}set(e,t){if(yt(e))return new di(t,this.children);{const n=lt(e),i=this.children.get(n)||new di(null),s=i.set(dt(e),t),r=this.children.insert(n,s);return new di(this.value,r)}}remove(e){if(yt(e))return this.children.isEmpty()?new di(null):new di(null,this.children);{const t=lt(e),n=this.children.get(t);if(n){const i=n.remove(dt(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new di(null):new di(this.value,s)}return this}}get(e){if(yt(e))return this.value;{const t=lt(e),n=this.children.get(t);return n?n.get(dt(e)):null}}setTree(e,t){if(yt(e))return t;{const n=lt(e),i=this.children.get(n)||new di(null),s=i.setTree(dt(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new di(this.value,r)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,s)=>{n[i]=s.fold_(gt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(yt(e))return null;{const i=lt(e),s=this.children.get(i);return s?s.findOnPath_(dt(e),gt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,n){if(yt(e))return this;{this.value&&n(t,this.value);const i=lt(e),s=this.children.get(i);return s?s.foreachOnPath_(dt(e),gt(t,i),n):new di(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(gt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.writeTree_=e}static empty(){return new pi(new di(null))}}function _i(e,t,n){if(yt(t))return new pi(new di(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=vt(s,t);return r=r.updateChild(o,n),new pi(e.writeTree_.set(s,r))}{const i=new di(n),s=e.writeTree_.setTree(t,i);return new pi(s)}}}function fi(e,t,n){let i=e;return F(n,(e,n)=>{i=_i(i,gt(t,e),n)}),i}function mi(e,t){if(yt(t))return pi.empty();{const n=e.writeTree_.setTree(t,new di(null));return new pi(n)}}function gi(e,t){return null!=yi(e,t)}function yi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(vt(n.path,t)):null}function vi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(on,(e,n)=>{t.push(new Mt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new Mt(e,n.value))}),t}function bi(e,t){if(yt(t))return e;{const n=yi(e,t);return new pi(null!=n?new di(n):e.writeTree_.subtree(t))}}function Ci(e){return e.writeTree_.isEmpty()}function wi(e,t){return Ii(ht(),e.writeTree_,t)}function Ii(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,s)=>{".priority"===t?(Object(r["d"])(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Ii(gt(e,t),s,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(gt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e,t){return $i(t,e)}function Ei(e,t,n,i,s){Object(r["d"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=_i(e.visibleWrites,t,n)),e.lastWriteId=i}function Oi(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Si(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(r["d"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,o=!1,a=e.allWrites.length-1;while(s&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Ni(t,i.path)?s=!1:Ct(i.path,t.path)&&(o=!0)),a--}if(s){if(o)return ki(e),!0;if(i.snap)e.visibleWrites=mi(e.visibleWrites,i.path);else{const t=i.children;F(t,t=>{e.visibleWrites=mi(e.visibleWrites,gt(i.path,t))})}return!0}return!1}function Ni(e,t){if(e.snap)return Ct(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ct(gt(e.path,n),t))return!0;return!1}function ki(e){e.visibleWrites=Ri(e.allWrites,Pi,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Pi(e){return e.visible}function Ri(e,t,n){let i=pi.empty();for(let s=0;s<e.length;++s){const o=e[s];if(t(o)){const e=o.path;let t;if(o.snap)Ct(n,e)?(t=vt(n,e),i=_i(i,t,o.snap)):Ct(e,n)&&(t=vt(e,n),i=_i(i,ht(),o.snap.getChild(t)));else{if(!o.children)throw Object(r["e"])("WriteRecord should have .snap or .children");if(Ct(n,e))t=vt(n,e),i=fi(i,t,o.children);else if(Ct(e,n))if(t=vt(e,n),yt(t))i=fi(i,ht(),o.children);else{const e=Object(r["w"])(o.children,lt(t));if(e){const n=e.getChild(dt(t));i=_i(i,ht(),n)}}}}}return i}function xi(e,t,n,i,s){if(i||s){const r=bi(e.visibleWrites,t);if(!s&&Ci(r))return n;if(s||null!=n||gi(r,ht())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ct(e.path,t)||Ct(t,e.path))},o=Ri(e.allWrites,r,t),a=n||_n.EMPTY_NODE;return wi(o,a)}return null}{const i=yi(e.visibleWrites,t);if(null!=i)return i;{const i=bi(e.visibleWrites,t);if(Ci(i))return n;if(null!=n||gi(i,ht())){const e=n||_n.EMPTY_NODE;return wi(i,e)}return null}}}function ji(e,t,n){let i=_n.EMPTY_NODE;const s=yi(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(on,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const s=bi(e.visibleWrites,t);return n.forEachChild(on,(e,t)=>{const n=wi(bi(s,new ct(e)),t);i=i.updateImmediateChild(e,n)}),vi(s).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=bi(e.visibleWrites,t);return vi(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Di(e,t,n,i,s){Object(r["d"])(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=gt(t,n);if(gi(e.visibleWrites,o))return null;{const t=bi(e.visibleWrites,o);return Ci(t)?s.getChild(n):wi(t,s.getChild(n))}}function Ai(e,t,n,i){const s=gt(t,n),r=yi(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=bi(e.visibleWrites,s);return wi(t,i.getNode().getImmediateChild(n))}return null}function Li(e,t){return yi(e.visibleWrites,t)}function Mi(e,t,n,i,s,r,o){let a;const c=bi(e.visibleWrites,t),h=yi(c,ht());if(null!=h)a=h;else{if(null==n)return[];a=wi(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<s)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function Fi(){return{visibleWrites:pi.empty(),allWrites:[],lastWriteId:-1}}function qi(e,t,n,i){return xi(e.writeTree,e.treePath,t,n,i)}function Wi(e,t){return ji(e.writeTree,e.treePath,t)}function Ui(e,t,n,i){return Di(e.writeTree,e.treePath,t,n,i)}function zi(e,t){return Li(e.writeTree,gt(e.treePath,t))}function Hi(e,t,n,i,s,r){return Mi(e.writeTree,e.treePath,t,n,i,s,r)}function Vi(e,t,n){return Ai(e.writeTree,e.treePath,t,n)}function Bi(e,t){return $i(gt(e.treePath,t),e.writeTree)}function $i(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(r["d"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(r["d"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,On(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,En(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Tn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw Object(r["e"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,On(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Ki=new Gi;class Qi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Zn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vi(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:hi(this.viewCache_),s=Hi(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e){return{filter:e}}function Xi(e,t){Object(r["d"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(r["d"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Zi(e,t,n,i,s){const o=new Yi;let a,c;if(n.type===$n.OVERWRITE){const h=n;h.source.fromUser?a=is(e,t,h.path,h.snap,i,s,o):(Object(r["d"])(h.source.fromServer,"Unknown source."),c=h.source.tagged||t.serverCache.isFiltered()&&!yt(h.path),a=ns(e,t,h.path,h.snap,i,s,c,o))}else if(n.type===$n.MERGE){const h=n;h.source.fromUser?a=rs(e,t,h.path,h.children,i,s,o):(Object(r["d"])(h.source.fromServer,"Unknown source."),c=h.source.tagged||t.serverCache.isFiltered(),a=as(e,t,h.path,h.children,i,s,c,o))}else if(n.type===$n.ACK_USER_WRITE){const r=n;a=r.revert?ls(e,t,r.path,i,s,o):cs(e,t,r.path,r.affectedTree,i,s,o)}else{if(n.type!==$n.LISTEN_COMPLETE)throw Object(r["e"])("Unknown operation type: "+n.type);a=hs(e,t,n.path,i,o)}const h=o.getChanges();return es(t,a,h),{viewCache:a,changes:h}}function es(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ci(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(In(ci(t)))}}function ts(e,t,n,i,s,o){const a=t.eventCache;if(null!=zi(i,n))return t;{let c,h;if(yt(n))if(Object(r["d"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=hi(t),s=n instanceof _n?n:_n.EMPTY_NODE,r=Wi(i,s);c=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=qi(i,hi(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const l=lt(n);if(".priority"===l){Object(r["d"])(1===ut(n),"Can't have a priority with additional path components");const s=a.getNode();h=t.serverCache.getNode();const o=Ui(i,n,s,h);c=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const r=dt(n);let u;if(a.isCompleteForChild(l)){h=t.serverCache.getNode();const e=Ui(i,n,a.getNode(),h);u=null!=e?a.getNode().getImmediateChild(l).updateChild(r,e):a.getNode().getImmediateChild(l)}else u=Vi(i,l,t.serverCache);c=null!=u?e.filter.updateChild(a.getNode(),l,u,r,s,o):a.getNode()}}return oi(t,c,a.isFullyInitialized()||yt(n),e.filter.filtersNodes())}}function ns(e,t,n,i,s,r,o,a){const c=t.serverCache;let h;const l=o?e.filter:e.filter.getIndexedFilter();if(yt(n))h=l.updateFullNode(c.getNode(),i,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);h=l.updateFullNode(c.getNode(),e,null)}else{const e=lt(n);if(!c.isCompleteForPath(n)&&ut(n)>1)return t;const s=dt(n),r=c.getNode().getImmediateChild(e),o=r.updateChild(s,i);h=".priority"===e?l.updatePriority(c.getNode(),o):l.updateChild(c.getNode(),e,o,s,Ki,null)}const u=ai(t,h,c.isFullyInitialized()||yt(n),l.filtersNodes()),d=new Qi(s,u,r);return ts(e,u,n,s,d,a)}function is(e,t,n,i,s,r,o){const a=t.eventCache;let c,h;const l=new Qi(s,t,r);if(yt(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=oi(t,h,!0,e.filter.filtersNodes());else{const s=lt(n);if(".priority"===s)h=e.filter.updatePriority(t.eventCache.getNode(),i),c=oi(t,h,a.isFullyInitialized(),a.isFiltered());else{const r=dt(n),h=a.getNode().getImmediateChild(s);let u;if(yt(r))u=i;else{const e=l.getCompleteChild(s);u=null!=e?".priority"===pt(r)&&e.getChild(mt(r)).isEmpty()?e:e.updateChild(r,i):_n.EMPTY_NODE}if(h.equals(u))c=t;else{const n=e.filter.updateChild(a.getNode(),s,u,r,l,o);c=oi(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function ss(e,t){return e.eventCache.isCompleteForChild(t)}function rs(e,t,n,i,s,r,o){let a=t;return i.foreach((i,c)=>{const h=gt(n,i);ss(t,lt(h))&&(a=is(e,a,h,c,s,r,o))}),i.foreach((i,c)=>{const h=gt(n,i);ss(t,lt(h))||(a=is(e,a,h,c,s,r,o))}),a}function os(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function as(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,h=t;c=yt(n)?i:new di(null).setTree(n,i);const l=t.serverCache.getNode();return c.children.inorderTraversal((n,i)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=os(e,c,i);h=ns(e,h,new ct(n),l,s,r,o,a)}}),c.children.inorderTraversal((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=os(e,c,i);h=ns(e,h,new ct(n),l,s,r,o,a)}}),h}function cs(e,t,n,i,s,r,o){if(null!=zi(s,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(yt(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ns(e,t,n,c.getNode().getChild(n),s,r,a,o);if(yt(n)){let i=new di(null);return c.getNode().forEachChild(Ut,(e,t)=>{i=i.set(new ct(e),t)}),as(e,t,n,i,s,r,a,o)}return t}{let h=new di(null);return i.foreach((e,t)=>{const i=gt(n,e);c.isCompleteForPath(i)&&(h=h.set(e,c.getNode().getChild(i)))}),as(e,t,n,h,s,r,a,o)}}function hs(e,t,n,i,s){const r=t.serverCache,o=ai(t,r.getNode(),r.isFullyInitialized()||yt(n),r.isFiltered());return ts(e,o,n,i,Ki,s)}function ls(e,t,n,i,s,o){let a;if(null!=zi(i,n))return t;{const c=new Qi(i,t,s),h=t.eventCache.getNode();let l;if(yt(n)||".priority"===lt(n)){let n;if(t.serverCache.isFullyInitialized())n=qi(i,hi(t));else{const e=t.serverCache.getNode();Object(r["d"])(e instanceof _n,"serverChildren would be complete if leaf node"),n=Wi(i,e)}n=n,l=e.filter.updateFullNode(h,n,o)}else{const s=lt(n);let r=Vi(i,s,t.serverCache);null==r&&t.serverCache.isCompleteForChild(s)&&(r=h.getImmediateChild(s)),l=null!=r?e.filter.updateChild(h,s,r,dt(n),c,o):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(h,s,_n.EMPTY_NODE,dt(n),c,o):h,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=qi(i,hi(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=zi(i,ht()),oi(t,l,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Nn(n.getIndex()),s=xn(n);this.processor_=Ji(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode(_n.EMPTY_NODE,r.getNode(),null),c=s.updateFullNode(_n.EMPTY_NODE,o.getNode(),null),h=new Zn(a,r.isFullyInitialized(),i.filtersNodes()),l=new Zn(c,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=ri(l,h),this.eventGenerator_=new ei(this.query_)}get query(){return this.query_}}function ds(e){return ci(e.viewCache_)}function ps(e,t){const n=hi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!yt(t)&&!n.getImmediateChild(lt(t)).isEmpty())?n.getChild(t):null}function _s(e,t,n,i){t.type===$n.MERGE&&null!==t.source.queryId&&(Object(r["d"])(hi(e.viewCache_),"We should always have a full cache before handling merges"),Object(r["d"])(ci(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=Zi(e.processor_,s,t,n,i);return Xi(e.processor_,o.viewCache),Object(r["d"])(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,fs(e,o.changes,o.viewCache.eventCache.getNode(),null)}function fs(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return ti(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms,gs;class ys{constructor(){this.views=new Map}}function vs(e){Object(r["d"])(!ms,"__referenceConstructor has already been defined"),ms=e}function bs(e,t,n,i){const s=t.source.queryId;if(null!==s){const o=e.views.get(s);return Object(r["d"])(null!=o,"SyncTree gave us an op for an invalid query."),_s(o,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(_s(r,t,n,i));return s}}function Cs(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=qi(n,s?i:null),r=!1;e?r=!0:i instanceof _n?(e=Wi(n,i),r=!1):(e=_n.EMPTY_NODE,r=!1);const o=ri(new Zn(e,r,!1),new Zn(i,s,!1));return new us(t,o)}return o}function ws(e,t){let n=null;for(const i of e.views.values())n=n||ps(i,t);return n}function Is(e){Object(r["d"])(!gs,"__referenceConstructor has already been defined"),gs=e}class Ts{constructor(e){this.listenProvider_=e,this.syncPointTree_=new di(null),this.pendingWriteTree_=Fi(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Es(e,t,n,i,s){return Ei(e.pendingWriteTree_,t,n,i,s),s?js(e,new Jn(Yn(),t,n)):[]}function Os(e,t,n=!1){const i=Oi(e.pendingWriteTree_,t),s=Si(e.pendingWriteTree_,t);if(s){let t=new di(null);return null!=i.snap?t=t.set(ht(),!0):F(i.children,e=>{t=t.set(new ct(e),!0)}),js(e,new Qn(i.path,t,n))}return[]}function Ss(e,t,n){return js(e,new Jn(Gn(),t,n))}function Ns(e,t,n){const i=di.fromObject(n);return js(e,new Xn(Gn(),t,i))}function ks(e,t,n,i){const s=Ls(e,i);if(null!=s){const i=Ms(s),r=i.path,o=i.queryId,a=vt(r,t),c=new Jn(Kn(o),a,n);return Fs(e,r,c)}return[]}function Ps(e,t,n,i){const s=Ls(e,i);if(s){const i=Ms(s),r=i.path,o=i.queryId,a=vt(r,t),c=di.fromObject(n),h=new Xn(Kn(o),a,c);return Fs(e,r,h)}return[]}function Rs(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=vt(e,t),s=ws(n,i);if(s)return s});return xi(s,t,r,n,i)}function xs(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const s=vt(e,n);i=i||ws(t,s)});let s=e.syncPointTree_.get(n);s?i=i||ws(s,ht()):(s=new ys,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new Zn(i,!0,!1):null,a=Ti(e.pendingWriteTree_,t._path),c=Cs(s,t,a,r?o.getNode():_n.EMPTY_NODE,r);return ds(c)}function js(e,t){return Ds(t,e.syncPointTree_,null,Ti(e.pendingWriteTree_,ht()))}function Ds(e,t,n,i){if(yt(e.path))return As(e,t,n,i);{const s=t.get(ht());null==n&&null!=s&&(n=ws(s,ht()));let r=[];const o=lt(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Bi(i,o);r=r.concat(Ds(a,c,e,t))}return s&&(r=r.concat(bs(s,e,i,n))),r}}function As(e,t,n,i){const s=t.get(ht());null==n&&null!=s&&(n=ws(s,ht()));let r=[];return t.children.inorderTraversal((t,s)=>{const o=n?n.getImmediateChild(t):null,a=Bi(i,t),c=e.operationForChild(t);c&&(r=r.concat(As(c,s,o,a)))}),s&&(r=r.concat(bs(s,e,i,n))),r}function Ls(e,t){return e.tagToQueryMap.get(t)}function Ms(e){const t=e.indexOf("$");return Object(r["d"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function Fs(e,t,n){const i=e.syncPointTree_.get(t);Object(r["d"])(i,"Missing sync point for query tag that we're tracking");const s=Ti(e.pendingWriteTree_,t);return bs(i,n,s,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new qs(t)}node(){return this.node_}}class Ws{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=gt(this.path_,e);return new Ws(this.syncTree_,t)}node(){return Rs(this.syncTree_,this.path_)}}const Us=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},zs=function(e,t,n){return e&&"object"===typeof e?(Object(r["d"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Hs(e[".sv"],t,n):"object"===typeof e[".sv"]?Vs(e[".sv"],t):void Object(r["d"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Hs=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(r["d"])(!1,"Unexpected server value: "+e)}},Vs=function(e,t,n){e.hasOwnProperty("increment")||Object(r["d"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(r["d"])(!1,"Unexpected increment value: "+i);const s=t.node();if(Object(r["d"])(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s,a=o.getValue();return"number"!==typeof a?i:a+i},Bs=function(e,t,n,i){return Ys(t,new Ws(n,e),i)},$s=function(e,t,n){return Ys(e,new qs(t),n)};function Ys(e,t,n){const i=e.getPriority().val(),s=zs(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=zs(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new tn(r,yn(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new tn(s))),i.forEachChild(on,(e,i)=>{const s=Ys(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))}),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ks(e,t){let n=t instanceof ct?t:new ct(t),i=e,s=lt(n);while(null!==s){const e=Object(r["w"])(i.node.children,s)||{children:{},childCount:0};i=new Gs(s,i,e),n=dt(n),s=lt(n)}return i}function Qs(e){return e.node.value}function Js(e,t){e.node.value=t,sr(e)}function Xs(e){return e.node.childCount>0}function Zs(e){return void 0===Qs(e)&&!Xs(e)}function er(e,t){F(e.node.children,(n,i)=>{t(new Gs(n,e,i))})}function tr(e,t,n,i){n&&!i&&t(e),er(e,e=>{tr(e,t,!0,i)}),n&&i&&t(e)}function nr(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function ir(e){return new ct(null===e.parent?e.name:ir(e.parent)+"/"+e.name)}function sr(e){null!==e.parent&&rr(e.parent,e.name,e)}function rr(e,t,n){const i=Zs(n),s=Object(r["h"])(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,sr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,sr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=/[\[\].#$\/\u0000-\u001F\u007F]/,ar=/[\[\].#$\u0000-\u001F\u007F]/,cr=10485760,hr=function(e){return"string"===typeof e&&0!==e.length&&!or.test(e)},lr=function(e){return"string"===typeof e&&0!==e.length&&!ar.test(e)},ur=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),lr(e)},dr=function(e,t,n){const i=n instanceof ct?new wt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ot(i));if("function"===typeof t)throw new Error(e+"contains a function "+Ot(i)+" with contents = "+t.toString());if(k(t))throw new Error(e+"contains "+t.toString()+" "+Ot(i));if("string"===typeof t&&t.length>cr/3&&Object(r["x"])(t)>cr)throw new Error(e+"contains a string greater than "+cr+" utf8 bytes "+Ot(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(F(t,(t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!hr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ot(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');It(i,t),dr(e,r,i),Tt(i)}),n&&s)throw new Error(e+' contains ".value" child '+Ot(i)+" in addition to actual children.")}},pr=function(e,t,n,i){if((!i||void 0!==n)&&!lr(n))throw new Error(Object(r["l"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},_r=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pr(e,t,n,i)},fr=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!hr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!ur(n))throw new Error(Object(r["l"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gr(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||bt(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function yr(e,t,n){gr(e,n),br(e,e=>bt(e,t))}function vr(e,t,n){gr(e,n),br(e,e=>Ct(e,t)||Ct(t,e))}function br(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Cr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Cr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&I("event: "+n.toString()),$(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="repo_interrupt",Ir=25;class Tr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mn(),this.transactionQueueTree_=new Gs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Er(e,t,n){if(e.stats_=fe(e.repoInfo_),e.forceRestClient_||Y())e.server_=new An(e.repoInfo_,(t,n,i,s)=>{Nr(e,t,n,i,s)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>kr(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(r["z"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,(t,n,i,s)=>{Nr(e,t,n,i,s)},t=>{kr(e,t)},t=>{Pr(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new Bn(e.stats_,e.server_)),e.infoData_=new Ln,e.infoSyncTree_=new Ts({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Ss(e.infoSyncTree_,t._path,o),setTimeout(()=>{s("ok")},0)),r},stopListening:()=>{}}),Rr(e,"connected",!1),e.serverSyncTree_=new Ts({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,(n,i)=>{const r=s(n,i);vr(e.eventQueue_,t._path,r)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Or(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Sr(e){return Us({timestamp:Or(e)})}function Nr(e,t,n,i,s){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(i){const t=Object(r["u"])(n,e=>yn(e));a=Ps(e.serverSyncTree_,o,t,s)}else{const t=yn(n);a=ks(e.serverSyncTree_,o,t,s)}else if(i){const t=Object(r["u"])(n,e=>yn(e));a=Ns(e.serverSyncTree_,o,t)}else{const t=yn(n);a=Ss(e.serverSyncTree_,o,t)}let c=o;a.length>0&&(c=Wr(e,o)),vr(e.eventQueue_,c,a)}function kr(e,t){Rr(e,"connected",t),!1===t&&Dr(e)}function Pr(e,t){F(t,(t,n)=>{Rr(e,t,n)})}function Rr(e,t,n){const i=new ct("/.info/"+t),s=yn(n);e.infoData_.updateSnapshot(i,s);const r=Ss(e.infoSyncTree_,i,s);vr(e.eventQueue_,i,r)}function xr(e){return e.nextWriteId_++}function jr(e,t){const n=xs(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const i=yn(n).withIndex(t._queryParams.getIndex()),s=Ss(e.serverSyncTree_,t._path,i);return yr(e.eventQueue_,t._path,s),Promise.resolve(i)},n=>(Lr(e,"get for query "+Object(r["z"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function Dr(e){Lr(e,"onDisconnectEvents");const t=Sr(e),n=Mn();qn(e.onDisconnect_,ht(),(i,s)=>{const r=Bs(i,s,e.serverSyncTree_,t);Fn(n,i,r)});let i=[];qn(n,ht(),(t,n)=>{i=i.concat(Ss(e.serverSyncTree_,t,n));const s=$r(e,t);Wr(e,s)}),e.onDisconnect_=Mn(),vr(e.eventQueue_,ht(),i)}function Ar(e){e.persistentConnection_&&e.persistentConnection_.interrupt(wr)}function Lr(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),I(n,...t)}function Mr(e,t,n){return Rs(e.serverSyncTree_,t,n)||_n.EMPTY_NODE}function Fr(e,t=e.transactionQueueTree_){if(t||Br(e,t),Qs(t)){const n=Hr(e,t);Object(r["d"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&qr(e,ir(t),n)}else Xs(t)&&er(t,t=>{Fr(e,t)})}function qr(e,t,n){const i=n.map(e=>e.currentWriteId),s=Mr(e,t,i);let o=s;const a=s.hash();for(let l=0;l<n.length;l++){const e=n[l];Object(r["d"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=vt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const c=o.val(!0),h=t;e.server_.put(h.toString(),c,i=>{Lr(e,"transaction put response",{path:h.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Os(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();Br(e,Ks(e.transactionQueueTree_,t)),Fr(e,e.transactionQueueTree_),vr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)$(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{S("transaction at "+h.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Wr(e,t)}},a)}function Wr(e,t){const n=zr(e,t),i=ir(n),s=Hr(e,n);return Ur(e,s,i),i}function Ur(e,t,n){if(0===t.length)return;const i=[];let s=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let c=0;c<t.length;c++){const o=t[c],h=vt(n,o.path);let l,u=!1;if(Object(r["d"])(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,l=o.abortReason,s=s.concat(Os(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Ir)u=!0,l="maxretry",s=s.concat(Os(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Mr(e,o.path,a);o.currentInputSnapshot=n;const i=t[c].update(n.val());if(void 0!==i){dr("transaction failed: Data returned ",i,o.path);let t=yn(i);const c="object"===typeof i&&null!=i&&Object(r["h"])(i,".priority");c||(t=t.updatePriority(n.getPriority()));const h=o.currentWriteId,l=Sr(e),u=$s(t,n,l);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=u,o.currentWriteId=xr(e),a.splice(a.indexOf(h),1),s=s.concat(Es(e.serverSyncTree_,o.path,u,o.currentWriteId,o.applyLocally)),s=s.concat(Os(e.serverSyncTree_,h,!0))}else u=!0,l="nodata",s=s.concat(Os(e.serverSyncTree_,o.currentWriteId,!0))}vr(e.eventQueue_,n,s),s=[],u&&(t[c].status=2,function(e){setTimeout(e,Math.floor(0))}(t[c].unwatcher),t[c].onComplete&&("nodata"===l?i.push(()=>t[c].onComplete(null,!1,t[c].currentInputSnapshot)):i.push(()=>t[c].onComplete(new Error(l),!1,null))))}Br(e,e.transactionQueueTree_);for(let r=0;r<i.length;r++)$(i[r]);Fr(e,e.transactionQueueTree_)}function zr(e,t){let n,i=e.transactionQueueTree_;n=lt(t);while(null!==n&&void 0===Qs(i))i=Ks(i,n),t=dt(t),n=lt(t);return i}function Hr(e,t){const n=[];return Vr(e,t,n),n.sort((e,t)=>e.order-t.order),n}function Vr(e,t,n){const i=Qs(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);er(t,t=>{Vr(e,t,n)})}function Br(e,t){const n=Qs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Js(t,n.length>0?n:void 0)}er(t,t=>{Br(e,t)})}function $r(e,t){const n=ir(zr(e,t)),i=Ks(e.transactionQueueTree_,t);return nr(i,t=>{Yr(e,t)}),Yr(e,i),tr(i,t=>{Yr(e,t)}),n}function Yr(e,t){const n=Qs(t);if(n){const i=[];let s=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(r["d"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(r["d"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Os(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Js(t,void 0):n.length=o+1,vr(e.eventQueue_,ir(t),s);for(let e=0;e<i.length;e++)$(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Kr(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):S(`Invalid query segment '${n}' in query '${e}'`)}return t}const Qr=function(e,t){const n=Jr(e),i=n.namespace;"firebase.com"===n.domain&&O(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||O("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||N();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new he(n.host,n.secure,i,t,s,"",i!==n.subdomain),path:new ct(n.pathString)}},Jr=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",c=443;if("string"===typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let l=e.indexOf("/");-1===l&&(l=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(l,u)),l<u&&(s=Gr(e.substring(l,u)));const d=Kr(e.substring(Math.min(e.length,u)));h=t.indexOf(":"),h>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(h+1),10)):h=t.length;const p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return yt(this._path)?null:pt(this._path)}get ref(){return new Zr(this._repo,this._path)}get _queryIdentifier(){const e=Dn(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return Dn(this._queryParams)}isEqual(e){if(e=Object(r["m"])(e),!(e instanceof Xr))return!1;const t=this._repo===e._repo,n=bt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_t(this._path)}}class Zr extends Xr{constructor(e,t){super(e,t,new Rn,!1)}get parent(){const e=mt(this._path);return null===e?null:new Zr(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class eo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=no(this.ref,e);return new eo(this._node.getChild(t),n,on)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new eo(n,no(this.ref,t),on)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function to(e,t){return e=Object(r["m"])(e),e._checkNotDeleted("ref"),void 0!==t?no(e._root,t):e._root}function no(e,t){return e=Object(r["m"])(e),null===lt(e._path)?_r("child","path",t,!1):pr("child","path",t,!1),new Zr(e._repo,gt(e._path,t))}function io(e){return e=Object(r["m"])(e),jr(e._repo,e).then(t=>new eo(t,new Zr(e._repo,e._path),e._queryParams.getIndex()))}vs(Zr),Is(Zr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const so="FIREBASE_DATABASE_EMULATOR_HOST",ro={};let oo=!1;function ao(t,n,i,s,r){let o=s||t.options.databaseURL;void 0===o&&(t.options.projectId||O("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),I("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,c=Qr(o,r),h=c.repoInfo,l=void 0;"undefined"!==typeof e&&(l=Object({NODE_ENV:"production",BASE_URL:"/"})[so]),l?(a=!0,o=`http://${l}?ns=${h.namespace}`,c=Qr(o,r),h=c.repoInfo):a=!c.repoInfo.secure;const u=r&&a?new J(J.OWNER):new Q(t.name,t.options,n);fr("Invalid Firebase Database URL",c),yt(c.path)||O("Database URL must point to the root of a Firebase Database (not including a child path).");const d=ho(h,t,u,new K(t.name,i));return new lo(d,t)}function co(e,t){const n=ro[t];n&&n[e.key]===e||O(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Ar(e),delete n[e.key]}function ho(e,t,n,i){let s=ro[t.name];s||(s={},ro[t.name]=s);let r=s[e.toURLString()];return r&&O("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Tr(e,oo,n,i),s[e.toURLString()]=r,r}class lo{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Er(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zr(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(co(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&O("Cannot call "+e+" on a deleted database.")}}function uo(e=Object(i["d"])(),t){return Object(i["b"])(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function po(e){l(i["a"]),Object(i["c"])(new s["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ao(n,i,s,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["f"])(a,c,e),Object(i["f"])(a,c,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};po()}).call(this,n("4362"))},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"b",(function(){return z})),n.d(t,"c",(function(){return U})),n.d(t,"d",(function(){return G})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return K}));var i=n("22e5"),s=n("e691"),r=n("1fd5");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",h="0.7.11",l=new s["b"]("@firebase/app"),u="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",_="@firebase/app-check-compat",f="@firebase/app-check",m="@firebase/auth",g="@firebase/auth-compat",y="@firebase/database",v="@firebase/database-compat",b="@firebase/functions",C="@firebase/functions-compat",w="@firebase/installations",I="@firebase/installations-compat",T="@firebase/messaging",E="@firebase/messaging-compat",O="@firebase/performance",S="@firebase/performance-compat",N="@firebase/remote-config",k="@firebase/remote-config-compat",P="@firebase/storage",R="@firebase/storage-compat",x="@firebase/firestore",j="@firebase/firestore-compat",D="firebase",A="9.6.1",L="[DEFAULT]",M={[c]:"fire-core",[u]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[f]:"fire-app-check",[_]:"fire-app-check-compat",[m]:"fire-auth",[g]:"fire-auth-compat",[y]:"fire-rtdb",[v]:"fire-rtdb-compat",[b]:"fire-fn",[C]:"fire-fn-compat",[w]:"fire-iid",[I]:"fire-iid-compat",[T]:"fire-fcm",[E]:"fire-fcm-compat",[O]:"fire-perf",[S]:"fire-perf-compat",[N]:"fire-rc",[k]:"fire-rc-compat",[P]:"fire-gcs",[R]:"fire-gcs-compat",[x]:"fire-fst",[j]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},F=new Map,q=new Map;function W(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function U(e){const t=e.name;if(q.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;q.set(t,e);for(const n of F.values())W(n,e);return!0}function z(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},V=new r["b"]("app","Firebase",H);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=A;function Y(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},t),s=n.name;if("string"!==typeof s||!s)throw V.create("bad-app-name",{appName:String(s)});const o=F.get(s);if(o){if(Object(r["k"])(e,o.options)&&Object(r["k"])(n,o.config))return o;throw V.create("duplicate-app",{appName:s})}const a=new i["b"](s);for(const i of q.values())a.addComponent(i);const c=new B(e,n,a);return F.set(s,c),c}function G(e=L){const t=F.get(e);if(!t)throw V.create("no-app",{appName:e});return t}function K(e,t,n){var s;let r=null!==(s=M[e])&&void 0!==s?s:e;n&&(r+="-"+n);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}U(new i["a"](r+"-version",()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(e){U(new i["a"]("platform-logger",e=>new o(e),"PRIVATE")),K(c,h,e),K(c,h,"esm2017"),K("fire-js","")}Q("")},6331:function(e,t,n){"use strict";n("3404")},"738d":function(e,t,n){"use strict";n.r(t);var i=n("7a23"),s={class:"div-box"},r=Object(i["n"])("h5",null,"To Do List",-1),o=Object(i["n"])("i",{class:"fas fa-trash-alt"},null,-1),a={key:0},c=Object(i["p"])("取得資料庫資料");function h(e,t){var n=Object(i["S"])("el-input"),h=Object(i["S"])("el-divider"),l=Object(i["S"])("el-button"),u=Object(i["S"])("Delete"),d=Object(i["S"])("el-icon");return Object(i["L"])(),Object(i["m"])("div",s,[r,Object(i["q"])(n,{modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inputValue=t}),placeholder:"輸入一項待辦事項",onKeyup:t[1]||(t[1]=Object(i["jb"])((function(t){return e.addTodo()}),["enter"]))},null,8,["modelValue"]),Object(i["q"])(h),Object(i["n"])("ul",null,[(Object(i["L"])(!0),Object(i["m"])(i["b"],null,Object(i["Q"])(e.todos,(function(t,n){return Object(i["L"])(),Object(i["m"])("li",{key:t},[Object(i["n"])("span",null,Object(i["W"])(t),1),Object(i["q"])(l,{onClick:function(t){return e.removeTodo(n)}},{default:Object(i["hb"])((function(){return[o]})),_:2},1032,["onClick"])])})),128))]),Object(i["q"])(h),0!=e.todos.length?(Object(i["L"])(),Object(i["m"])("div",a,[Object(i["p"])(" Total : "+Object(i["W"])(e.todos.length)+" todo ",1),Object(i["q"])(l,{onClick:e.clearAll,type:"danger"},{default:Object(i["hb"])((function(){return[Object(i["q"])(d,null,{default:Object(i["hb"])((function(){return[Object(i["q"])(u)]})),_:1})]})),_:1},8,["onClick"])])):Object(i["l"])("",!0),Object(i["q"])(l,{onClick:t[2]||(t[2]=function(t){return e.writeUserData()})},{default:Object(i["hb"])((function(){return[c]})),_:1})])}n("a434"),n("b0c0");var l=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n};const u=Object(i["r"])({name:"Delete"}),d={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},p=Object(i["n"])("path",{fill:"currentColor",d:"M160 256H96a32 32 0 010-64h256V95.936a32 32 0 0132-32h256a32 32 0 0132 32V192h256a32 32 0 110 64h-64v672a32 32 0 01-32 32H192a32 32 0 01-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32zm192 0a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32z"},null,-1),_=[p];function f(e,t,n,s,r,o){return Object(i["L"])(),Object(i["m"])("svg",d,_)}var m=l(u,[["render",f]]),g=n("589b"),y="firebase",v="9.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(g["f"])(y,v,"app");var b=n("51b0"),C={apiKey:"AIzaSyB900FNxKYIwpFvlFcs4SqZro8bHPiqxvs",authDomain:"fantzulin-e590c.firebaseapp.com",databaseURL:"https://fantzulin-e590c-default-rtdb.firebaseio.com",projectId:"fantzulin-e590c",storageBucket:"fantzulin-e590c.appspot.com",messagingSenderId:"937701848678",appId:"1:937701848678:web:d30e705555247cb5b11fa7",measurementId:"G-C1JLS7P3PL"},w=Object(g["e"])(C),I={data:function(){return{todos:["假資料"],inputValue:""}},components:{Delete:m},methods:{addTodo:function(){this.todos.push(this.inputValue),console.log(this.todos),this.inputValue=""},removeTodo:function(e){this.todos.splice(e,1)},clearAll:function(){this.todos=[]},writeUserData:function(){var e=this,t="",n=Object(b["d"])(Object(b["c"])(w));Object(b["b"])(Object(b["a"])(n,"/food")).then((function(n){n.exists()?(t=n.val()[1].name,e.todos.push(t),console.log("firebase_data",t)):console.log("No data available")})).catch((function(e){console.error(e)}))}}};n("6331");I.render=h;t["default"]=I},a434:function(e,t,n){"use strict";var i=n("23e7"),s=n("23cb"),r=n("a691"),o=n("50c4"),a=n("7b0b"),c=n("65f0"),h=n("8418"),l=n("1dde"),u=l("splice"),d=Math.max,p=Math.min,_=9007199254740991,f="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var n,i,l,u,m,g,y=a(this),v=o(y.length),b=s(e,v),C=arguments.length;if(0===C?n=i=0:1===C?(n=0,i=v-b):(n=C-2,i=p(d(r(t),0),v-b)),v+n-i>_)throw TypeError(f);for(l=c(y,i),u=0;u<i;u++)m=b+u,m in y&&h(l,u,y[m]);if(l.length=i,n<i){for(u=b;u<v-i;u++)m=u+i,g=u+n,m in y?y[g]=y[m]:delete y[g];for(u=v;u>v-i+n;u--)delete y[u-1]}else if(n>i)for(u=v-i;u>b;u--)m=u+i-1,g=u+n-1,m in y?y[g]=y[m]:delete y[g];for(u=0;u<n;u++)y[u+b]=arguments[u+2];return y.length=v-i+n,l}})},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(s||(s={}));const r={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=a[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class h{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function l(e){i.forEach(t=>{t.setLogLevel(e)})}function u(e,t){for(const n of i){let i=null;t&&t.level&&(i=r[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const o=r.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:r,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-fe4b8ff8.a04b0c0c.js.map