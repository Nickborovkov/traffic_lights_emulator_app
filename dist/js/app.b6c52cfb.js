(function(e){function t(t){for(var n,s,l=t[0],c=t[1],a=t[2],p=0,f=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/traffic_lights_emulator_app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"37e1":function(e,t,r){"use strict";r("d2eb")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"mainTitle"},[e._v("Traffic lights emulator app")]),r("router-view")],1)},i=[],s={},l=s,c=(r("034f"),r("2877")),a=Object(c["a"])(l,o,i,!1,null,null,null),u=a.exports,p=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"trafficLightBody"},[r("singleLight",{staticClass:"singleLight",attrs:{color:"red",currentColor:e.currentColor,timer:e.timeLeft}}),r("singleLight",{staticClass:"singleLight",attrs:{color:"yellow",currentColor:e.currentColor,timer:e.timeLeft}}),r("singleLight",{staticClass:"singleLight",attrs:{color:"green",currentColor:e.currentColor,timer:e.timeLeft}})],1)},h=[],m=(r("ac1f"),r("5319"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"singleLight"},[e.color===e.currentColor?r("div",{class:[e.currentColor+"Light",e.timer<=3?"lightBlink":""]},[r("p",[e._v(e._s(e.timer))])]):e._e()])}),d=[],v={props:["currentColor","timer","color"]},g=v,b=(r("cf00"),Object(c["a"])(g,m,d,!1,null,"a37c4eaa",null)),y=b.exports,C={data:function(){return{timeLeft:0,interval:null,prevWasRed:!0,prevWasGreen:!1}},props:["currentColor","time"],components:{singleLight:y},methods:{setPrevColor:function(){var e=this;"red"===this.currentColor&&(this.prevWasRed=!0,this.prevWasGreen=!1,setTimeout((function(){e.$router.replace("/yellow")}),1e3*this.time)),"green"===this.currentColor&&(this.prevWasGreen=!0,this.prevWasRed=!1,setTimeout((function(){e.$router.replace("/yellow")}),1e3*this.time)),"yellow"===this.currentColor&&this.prevWasRed&&(this.prevWasRed=!1,setTimeout((function(){e.$router.replace("/green")}),1e3*this.time)),"yellow"===this.currentColor&&this.prevWasGreen&&(this.prevWasGreen=!1,setTimeout((function(){e.$router.replace("/red")}),1e3*this.time))},setTimer:function(){var e=this;this.timeLeft=this.time,this.interval&&clearInterval(this.interval),this.interval=setInterval((function(){e.timeLeft=e.timeLeft-1}),1e3)}},mounted:function(){this.setPrevColor(),this.setTimer()},watch:{$route:function(){this.setPrevColor(),this.setTimer()}}},w=C,_=(r("37e1"),Object(c["a"])(w,f,h,!1,null,"3800766e",null)),L=_.exports;n["a"].use(p["a"]);var O=[{name:"home",path:"/",redirect:"red"},{name:"red",path:"/red",props:{currentColor:"red",time:10},component:L},{name:"yellow",path:"/yellow",props:{currentColor:"yellow",time:3},component:L},{name:"green",path:"/green",props:{currentColor:"green",time:15},component:L}],j=new p["a"]({mode:"hash",base:"/traffic_lights_emulator_app/",routes:O}),T=j;n["a"].config.productionTip=!1,new n["a"]({router:T,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,r){},b6d9:function(e,t,r){},cf00:function(e,t,r){"use strict";r("b6d9")},d2eb:function(e,t,r){}});
//# sourceMappingURL=app.b6c52cfb.js.map