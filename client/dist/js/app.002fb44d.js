(function(e){function n(n){for(var r,a,u=n[0],i=n[1],l=n[2],s=0,p=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(p.length)p.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c8e41":"b0018d21","chunk-2d230100":"15bff950","chunk-63c1eac8":"6273d5aa","chunk-2d0c9395":"1552a158","chunk-b24502f0":"2742d38c"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var l=new Error;c=function(n){i.onerror=i.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,t[1](l)}o[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o={class:"vue-tempalte"},c={class:"navbar shadow bg-dark rounded justify-content-between flex-nowrap flex-row fixed-top"},a={class:"container"},u=Object(r["f"])("a",{class:"navbar-brand float-left",href:"/"}," Home ",-1),i={class:"nav navbar-nav flex-row float-right"},l={class:"nav-item"},s=Object(r["e"])("Sign in"),f={class:"nav-item"},p=Object(r["e"])("Sign up"),d={class:"App"},b={class:"vertical-center"},h={class:"inner-block"};function v(e,n){var t=Object(r["s"])("router-link"),v=Object(r["s"])("router-view");return Object(r["o"])(),Object(r["c"])("div",o,[Object(r["f"])("nav",c,[Object(r["f"])("div",a,[u,Object(r["f"])("ul",i,[Object(r["f"])("li",l,[Object(r["f"])(t,{class:"nav-link pr-3",to:"/login"},{default:Object(r["x"])((function(){return[s]})),_:1})]),Object(r["f"])("li",f,[Object(r["f"])(t,{class:"btn btn-outline-primary",to:"/signup"},{default:Object(r["x"])((function(){return[p]})),_:1})])])])]),Object(r["f"])("div",d,[Object(r["f"])("div",b,[Object(r["f"])("div",h,[Object(r["f"])(v)])])])])}const m={};m.render=v;var j=m,O=(t("d3b7"),t("6c02")),g=[{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-63c1eac8"),t.e("chunk-2d0c9395")]).then(t.bind(null,"57da"))}},{path:"/signup",name:"signup",component:function(){return Promise.all([t.e("chunk-63c1eac8"),t.e("chunk-b24502f0")]).then(t.bind(null,"c3f0"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-2d0c8e41").then(t.bind(null,"578a"))}},{path:"/forgot-password",name:"forgot-password",component:function(){return t.e("chunk-2d230100").then(t.bind(null,"eb4a"))}}],y=Object(O["a"])({history:Object(O["b"])("/"),routes:g}),w=y,k=t("5502");Object(k["a"])({state:{},mutations:{},actions:{},modules:{}}),t("ab8b"),t("c1c3");Object(r["b"])(j).use(w).mount("#app")},c1c3:function(e,n,t){}});
//# sourceMappingURL=app.002fb44d.js.map