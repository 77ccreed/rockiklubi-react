(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},22:function(e,t,n){e.exports=n(47)},27:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(11),c=n.n(o),r=(n(27),n(29),n(6)),s=n(7),l=n(9),u=n(8),d=n(10),h=(n(14),n(32),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",{className:"display-4 m-3 ml-md-5 text-left"},i.a.createElement("span",{className:"Header-text2"},"Valga")," ",i.a.createElement("span",{className:"Header-text"},"Rockiklubi")))}}]),t}(a.Component)),v=(n(34),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("section",{className:"Header2"},i.a.createElement("h2",{className:"m-3 ml-md-5 text-left"},"Alternatiivklubi, kus propageeritakse elavat muusikat nii kodu kui v\xe4lismaalt."))}}]),t}(a.Component)),f=n(5),m=n(48),p=n(50),b=n(51),x=n(52),g=n(53),k=(n(36),[{src:"http://www.rockiklubi.ee/plakatid/2018/09_11_2018.jpg",altText:"\xdcritused"}]),j=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0},n.next=n.next.bind(Object(f.a)(Object(f.a)(n))),n.previous=n.previous.bind(Object(f.a)(Object(f.a)(n))),n.goToIndex=n.goToIndex.bind(Object(f.a)(Object(f.a)(n))),n.onExiting=n.onExiting.bind(Object(f.a)(Object(f.a)(n))),n.onExited=n.onExited.bind(Object(f.a)(Object(f.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===k.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?k.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=k.map(function(t){return i.a.createElement(m.a,{className:"Carousel",onExiting:e.onExiting,onExited:e.onExited,key:t.src},i.a.createElement("img",{src:t.src,alt:t.altText}),i.a.createElement(p.a,{captionText:t.caption,captionHeader:t.caption}))});return i.a.createElement(b.a,{activeIndex:t,next:this.next,previous:this.previous},i.a.createElement(x.a,{items:k,activeIndex:t,onClickHandler:this.goToIndex}),n,i.a.createElement(g.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),i.a.createElement(g.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(a.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,null),i.a.createElement("main",null,i.a.createElement(v,null),i.a.createElement(j,null)))}}]),t}(a.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(i.a.createElement(E,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/rockiklubi-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/rockiklubi-react","/service-worker.js");w?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):O(t,e)})}}()}},[[22,2,1]]]);
//# sourceMappingURL=main.8a9e0bf0.chunk.js.map