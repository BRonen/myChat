(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{113:function(e,t){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(49),r=n.n(c),l=n(2),i=n(7),s=n(11),u=n(50),m=n.n(u).a.create({baseURL:"https://mychatteste.herokuapp.com/api"},{headers:{"content-type":"application/json"}});var h=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),h=Object(l.a)(u,2),f=h[0],g=h[1],p=Object(a.useState)("Unauth"),d=Object(l.a)(p,2),b=d[0],E=d[1];return o.a.createElement("div",{className:"Menu"},e.token?o.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}}):o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Login"),o.a.createElement("input",{type:"text",placeholder:"Login:",onChange:function(e){return r(e.target.value)}}),o.a.createElement("input",{type:"text",placeholder:"Password:",onChange:function(e){return g(e.target.value)}}),o.a.createElement("div",{className:"Buttons"},o.a.createElement("button",{onClick:function(){m.post("/login",{login:c,password:f}).then((function(t){e.setToken("Magic "+t.data.token)}),(function(e){E(e.response.data)}))}},"enter"),o.a.createElement(s.b,{to:"/register"},o.a.createElement("button",null,"register"))),o.a.createElement("p",null,"Unauth"===b?"":b)))};var f=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],u=Object(a.useState)(""),h=Object(l.a)(u,2),f=h[0],g=h[1],p=Object(a.useState)("Unauth"),d=Object(l.a)(p,2),b=d[0],E=d[1];return o.a.createElement("div",{className:"Menu"},e.token?o.a.createElement(i.a,{to:{pathname:"/",state:{from:e.location}}}):o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Register"),o.a.createElement("input",{type:"text",placeholder:"Login:",onChange:function(e){return r(e.target.value)}}),o.a.createElement("input",{type:"text",placeholder:"Password:",onChange:function(e){return g(e.target.value)}}),o.a.createElement("div",{className:"Buttons"},o.a.createElement("button",{onClick:function(){m.post("/register",{login:c,password:f}).then((function(t){console.log(t),e.setToken(t.data.token)})).catch((function(e){E(e.response.data)}))}},"enter"),o.a.createElement(s.b,{to:"/login"},o.a.createElement("button",null,"login"))),o.a.createElement("p",null,"Unauth"===b?"":b)))},g=n(57);var p=function(e){return o.a.createElement("div",{className:"receiver content-box"},o.a.createElement("center",null,o.a.createElement("h1",{className:"mssg",id:"name"},"Room: ",e.name," - ",e.clients," online")),o.a.createElement("center",null,o.a.createElement("p",{className:"mssg"},"Server: This chat have been cleared")),e.mssgs.map((function(e){return o.a.createElement("p",{className:"mssg",key:"key"},e.ownerName,": ",e.content,o.a.createElement("br",null))})))},d=n(53),b=n.n(d)()("https://mychatteste.herokuapp.com/api");function E(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];function r(e){b.emit("message",n),e.value=""}return o.a.createElement("div",{className:"sender content-box"},o.a.createElement("textarea",{placeholder:"Text:",id:"text-input",className:"message-input",onChange:function(e){c(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),r(e.target))}}),o.a.createElement("button",{onClick:function(){return r(document.getElementById("text-input"))}},"Send"))}var v=n(54),k=n(55),j=n(58),O=n(56),w=n(59),y=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(j.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(o)))).state={room:""},n.channelHandler=function(e){n.setState({room:e.target.value})},n.keyPressed=function(e){"Enter"===e.key&&n.props.getIn(n.state.room)},n}return Object(w.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"sender content-box"},o.a.createElement("input",{type:"text",maxLength:"10",placeholder:"Channel:",className:"message-input",onChange:this.channelHandler,onKeyPress:this.keyPressed}),o.a.createElement("button",{onClick:function(){e.props.getIn(e.state.room)}},"Send"))}}]),t}(o.a.Component);n(116);var S=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(0),s=Object(l.a)(i,2),u=s[0],m=s[1],h=Object(a.useState)({}),f=Object(l.a)(h,2),d=f[0],v=f[1],k=Object(a.useState)(!1),j=Object(l.a)(k,2),O=j[0],w=j[1],S=Object(a.useState)([]),x=Object(l.a)(S,2),C=x[0],N=x[1];function T(){O?w(!1):O||w(!0)}return Object(a.useEffect)((function(){console.log(e.token),b.emit("auth",e.token),b.on("message",(function(e){N((function(t){return[].concat(Object(g.a)(t),[e])}))})),b.on("counter",(function(e){console.log(e),m(e)})),b.on("profile",(function(e){console.log(e),v(e)})),b.on("room",r),b.on("update",N),b.on("disconnect",T),b.on("error",console.log)}),[O]),o.a.createElement("div",{className:"Main"},o.a.createElement("h1",null,d.login),o.a.createElement(p,{mssgs:C,clients:u,name:c}),o.a.createElement(E,null),o.a.createElement(y,{getIn:function(e){e=e||"default",b.emit("get",e),r(e)}}))},x=function(e){var t=Object.assign({},e);return o.a.createElement(i.b,Object.assign({},t,{component:function(){return t.token?o.a.createElement(o.a.Fragment,null,o.a.createElement(S,{token:t.token})):o.a.createElement(i.a,{to:{pathname:"/login",state:{from:t.location}}})}}))};n(117),n(118);var C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement((function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1];return o.a.createElement(s.a,null,o.a.createElement(i.d,null,o.a.createElement(x,{exact:!0,path:"/",setToken:c,token:n}),o.a.createElement(i.b,{exact:!0,path:"/login"},o.a.createElement(h,{setToken:c,token:n})),o.a.createElement(i.b,{exact:!0,path:"/register"},o.a.createElement(f,{setToken:c,token:n}))))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/myChat",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/myChat","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()},60:function(e,t,n){e.exports=n(119)}},[[60,1,2]]]);
//# sourceMappingURL=main.895f99ac.chunk.js.map