(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1740f2e9"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,l,u,s){var d=n+e.length,f=l.length,h=o;return void 0!==u&&(u=r(u),h=c),i.call(s,h,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":c=u[i.slice(1,-1)];break;default:var o=+i;if(0===o)return r;if(o>f){var s=a(o/10);return 0===s?r:s<=f?void 0===l[s-1]?i.charAt(1):l[s-1]+i.charAt(1):r}c=l[o-1]}return void 0===c?"":c}))}},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp;e.exports=r((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},3404:function(e,t,n){},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("d039"),i=n("825a"),c=n("a691"),o=n("50c4"),l=n("577e"),u=n("1d80"),s=n("8aa5"),d=n("0cb2"),f=n("14c3"),h=n("b622"),p=h("replace"),v=Math.max,b=Math.min,g=function(e){return void 0===e?e:String(e)},x=function(){return"$0"==="a".replace(/./,"$0")}(),O=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),j=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,n){var r=O?"$":"$0";return[function(e,n){var r=u(this),a=void 0==e?void 0:e[p];return void 0!==a?a.call(e,r,n):t.call(l(r),e,n)},function(e,a){var u=i(this),h=l(e);if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var p=n(t,u,h,a);if(p.done)return p.value}var x="function"===typeof a;x||(a=l(a));var O=u.global;if(O){var j=u.unicode;u.lastIndex=0}var m=[];while(1){var y=f(u,h);if(null===y)break;if(m.push(y),!O)break;var w=l(y[0]);""===w&&(u.lastIndex=s(h,o(u.lastIndex),j))}for(var k="",I=0,C=0;C<m.length;C++){y=m[C];for(var E=l(y[0]),S=v(b(c(y.index),h.length),0),A=[],R=1;R<y.length;R++)A.push(g(y[R]));var L=y.groups;if(x){var T=[E].concat(A,S,h);void 0!==L&&T.push(L);var V=l(a.apply(void 0,T))}else V=d(E,h,S,A,L,a);S>=I&&(k+=h.slice(I,S)+V,I=S+E.length)}return k+h.slice(I)}]}),!j||!x||O)},6331:function(e,t,n){"use strict";n("3404")},"738d":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"div-box"},i=Object(r["n"])("h5",null,"To Do List",-1),c={key:0},o={key:4,class:"item-container"},l=["innerHTML"],u=Object(r["n"])("pre",{id:"content",style:{"white-space":"pre-wrap"}},null,-1);function s(e,t){var n=Object(r["S"])("el-input"),s=Object(r["S"])("el-divider"),d=Object(r["S"])("Delete"),f=Object(r["S"])("el-icon"),h=Object(r["S"])("el-button");return Object(r["L"])(),Object(r["m"])("div",a,[i,Object(r["q"])(n,{modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.inputValue=t}),placeholder:"輸入一項待辦事項",onKeyup:t[1]||(t[1]=Object(r["jb"])((function(t){return e.addTodo()}),["enter"]))},null,8,["modelValue"]),Object(r["q"])(s),Object(r["n"])("ul",null,[(Object(r["L"])(!0),Object(r["m"])(r["b"],null,Object(r["Q"])(e.todos,(function(t,n){return Object(r["L"])(),Object(r["m"])("li",{key:t},[Object(r["n"])("span",null,Object(r["W"])(t),1),Object(r["q"])(h,{onClick:function(t){return e.removeTodo(n)},icon:e.Delete},{default:Object(r["hb"])((function(){return[Object(r["q"])(f,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(d)]})),_:1})]})),_:2},1032,["onClick","icon"])])})),128))]),Object(r["q"])(s),0!=e.todos.length?(Object(r["L"])(),Object(r["m"])("div",c,[Object(r["p"])(" Total : "+Object(r["W"])(e.todos.length)+" todo ",1),Object(r["q"])(h,{onClick:e.clearAll,type:"danger"},{default:Object(r["hb"])((function(){return[Object(r["q"])(f,null,{default:Object(r["hb"])((function(){return[Object(r["q"])(d)]})),_:1})]})),_:1},8,["onClick"])])):Object(r["l"])("",!0),e.authorized?Object(r["l"])("",!0):(Object(r["L"])(),Object(r["m"])("button",{key:1,onClick:t[2]||(t[2]=function(){return e.handleAuthClick&&e.handleAuthClick.apply(e,arguments)})},"Sign In")),e.authorized?(Object(r["L"])(),Object(r["m"])("button",{key:2,onClick:t[3]||(t[3]=function(){return e.handleSignoutClick&&e.handleSignoutClick.apply(e,arguments)})},"Sign Out")):Object(r["l"])("",!0),e.authorized?(Object(r["L"])(),Object(r["m"])("button",{key:3,onClick:t[4]||(t[4]=function(){return e.getData&&e.getData.apply(e,arguments)})},"Get Data")):Object(r["l"])("",!0),e.authorized&&e.items?(Object(r["L"])(),Object(r["m"])("div",o,[Object(r["n"])("pre",{innerHTML:e.items},null,8,l)])):Object(r["l"])("",!0),u])}n("d3b7"),n("ac1f"),n("5319"),n("a434");var d=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const f=Object(r["r"])({name:"Delete"}),h={class:"icon",width:"200",height:"200",viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},p=Object(r["n"])("path",{fill:"currentColor",d:"M160 256H96a32 32 0 010-64h256V95.936a32 32 0 0132-32h256a32 32 0 0132 32V192h256a32 32 0 110 64h-64v672a32 32 0 01-32 32H192a32 32 0 01-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32zm192 0a32 32 0 01-32-32V416a32 32 0 0164 0v320a32 32 0 01-32 32z"},null,-1),v=[p];function b(e,t,n,a,i,c){return Object(r["L"])(),Object(r["m"])("svg",h,v)}var g=d(f,[["render",b]]),x="937701848678-7sns7fb70f3v81b8c6c4u4mepf1i3t4k.apps.googleusercontent.com",O="AIzaSyB-76fvVrkjsxSJ4qmLVbMLDheQoPRSCvU",j=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],m="https://www.googleapis.com/auth/calendar.readonly",y={data:function(){return{todos:["學習","睡覺","打東東"],inputValue:"",items:void 0,api:void 0,authorized:!1}},created:function(){this.api=gapi,this.handleClientLoad()},components:{Delete:g},methods:{handleClientLoad:function(){this.api.load("client:auth2",this.initClient)},initClient:function(){var e=this;e.api.client.init({apiKey:O,clientId:x,discoveryDocs:j,scope:m}).then((function(t){e.api.auth2.getAuthInstance().isSignedIn.listen(e.authorized)}))},handleAuthClick:function(e){var t=this;Promise.resolve(this.api.auth2.getAuthInstance().signIn()).then((function(e){t.authorized=!0}))},handleSignoutClick:function(e){var t=this;Promise.resolve(this.api.auth2.getAuthInstance().signOut()).then((function(e){t.authorized=!1}))},getData:function(){var e=this,t=this;t.api.client.calendar.events.list({calendarId:"primary",timeMin:(new Date).toISOString(),showDeleted:!1,singleEvents:!0,maxResults:10,orderBy:"startTime"}).then((function(n){t.items=e.syntaxHighlight(n.result.items),console.log(t.items)}))},syntaxHighlight:function(e){return"string"!=typeof e&&(e=JSON.stringify(e,void 0,2)),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,(function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span class="'+t+'">'+e+"</span>"}))},addTodo:function(){this.todos.push(this.inputValue),console.log(this.todos),this.inputValue=""},removeTodo:function(e){this.todos.splice(e,1)},clearAll:function(){this.todos=[]}}};n("6331");y.render=s;t["default"]=y},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("577e"),a=n("ad6d"),i=n("9f7f"),c=n("5692"),o=n("7c73"),l=n("69f3").get,u=n("fce3"),s=n("107c"),d=RegExp.prototype.exec,f=c("native-string-replace",String.prototype.replace),h=d,p=function(){var e=/a/,t=/b*/g;return d.call(e,"a"),d.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),v=i.UNSUPPORTED_Y||i.BROKEN_CARET,b=void 0!==/()??/.exec("")[1],g=p||b||v||u||s;g&&(h=function(e){var t,n,i,c,u,s,g,x=this,O=l(x),j=r(e),m=O.raw;if(m)return m.lastIndex=x.lastIndex,t=h.call(m,j),x.lastIndex=m.lastIndex,t;var y=O.groups,w=v&&x.sticky,k=a.call(x),I=x.source,C=0,E=j;if(w&&(k=k.replace("y",""),-1===k.indexOf("g")&&(k+="g"),E=j.slice(x.lastIndex),x.lastIndex>0&&(!x.multiline||x.multiline&&"\n"!==j.charAt(x.lastIndex-1))&&(I="(?: "+I+")",E=" "+E,C++),n=new RegExp("^(?:"+I+")",k)),b&&(n=new RegExp("^"+I+"$(?!\\s)",k)),p&&(i=x.lastIndex),c=d.call(w?n:x,E),w?c?(c.input=c.input.slice(C),c[0]=c[0].slice(C),c.index=x.lastIndex,x.lastIndex+=c[0].length):x.lastIndex=0:p&&c&&(x.lastIndex=x.global?c.index+c[0].length:i),b&&c&&c.length>1&&f.call(c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c&&y)for(c.groups=s=o(null),u=0;u<y.length;u++)g=y[u],s[g[0]]=c[g[1]];return c}),e.exports=h},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp;t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),c=n("50c4"),o=n("7b0b"),l=n("65f0"),u=n("8418"),s=n("1dde"),d=s("splice"),f=Math.max,h=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!d},{splice:function(e,t){var n,r,s,d,b,g,x=o(this),O=c(x.length),j=a(e,O),m=arguments.length;if(0===m?n=r=0:1===m?(n=0,r=O-j):(n=m-2,r=h(f(i(t),0),O-j)),O+n-r>p)throw TypeError(v);for(s=l(x,r),d=0;d<r;d++)b=j+d,b in x&&u(s,d,x[b]);if(s.length=r,n<r){for(d=j;d<O-r;d++)b=d+r,g=d+n,b in x?x[g]=x[b]:delete x[g];for(d=O;d>O-r+n;d--)delete x[d-1]}else if(n>r)for(d=O-r;d>j;d--)b=d+r-1,g=d+n-1,b in x?x[g]=x[b]:delete x[g];for(d=0;d<n;d++)x[d+j]=arguments[d+2];return x.length=O-r+n,s}})},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),i=n("d039"),c=n("b622"),o=n("9112"),l=c("species"),u=RegExp.prototype;e.exports=function(e,t,n,s){var d=c(e),f=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),h=f&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!h||n){var p=/./[d],v=t(d,""[e],(function(e,t,n,r,i){var c=t.exec;return c===a||c===u.exec?f&&!i?{done:!0,value:p.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,v[0]),r(u,d,v[1])}s&&o(u[d],"sham",!0)}},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp;e.exports=r((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-1740f2e9.9954bc46.js.map