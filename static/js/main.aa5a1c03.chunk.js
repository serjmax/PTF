(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),i=n(8),o=n.n(i),l=(n(15),n(16),n(7),n(1)),c=n(2),s=n(4),p=n(3),d=n(5),g=new Array(150),m=1;m<g.length;m++)g[m]=m;var u=g.map(function(e){return r.a.createElement("div",{key:e,style:{borderTop:"solid 1px rgba(100,100,250, 0.2)",background:"rgba(100,100,250, 0.2)"},className:"styling one"},r.a.createElement("div",{style:{height:"11px",borderBottom:"solid 1px rgba(100,100,250, 0.2)"},className:"grid__baseline"}),r.a.createElement("div",{style:{height:"11px",borderBottom:"solid 1px rgba(100,100,250, 0.2)"},className:"grid__baseline"}),r.a.createElement("div",{style:{height:"11px",borderBottom:"solid 1px rgba(100,100,250, 0.2)"},className:"grid__baseline"}),r.a.createElement("div",{style:{height:"11px",borderBottom:"solid 1px rgba(100,100,250, 0.2)"},className:"grid__baseline"}),r.a.createElement("div",{style:{height:"11px",borderBottom:"solid 1px rgba(100,100,250, 0.2)"},className:"grid__baseline"}),r.a.createElement("div",{style:{height:"11px",borderBottom:"solid 1px rgba(100,100,250, 0.2)"},className:"grid__baseline"}))}),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isToggleOn:!1,isZoomOn:!0},n.handleClick=function(){n.setState(function(e){return{isToggleOn:!e.isToggleOn}})},n.handleZoom=function(){var e=document.documentElement,t=window.innerWidth/1024;console.log(t),n.setState(function(e){return{isZoomOn:!e.isZoomOn}}),n.state.isZoomOn?e.style="zoom: ".concat(t):e.style="zoom: 1"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=window.innerWidth/1024;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{style:{position:"fixed",top:"0",right:"0",zIndex:"9999999999999"},onClick:this.handleClick},this.state.isToggleOn?"ON":"OFF"),r.a.createElement("button",{style:{position:"fixed",top:"20px",right:"0",zIndex:"9999999999999"},onClick:this.handleZoom},this.state.isZoomOn?"Zoom: 0":"".concat(e)),r.a.createElement("div",{style:{padding:"14px 14px",width:"1024px",position:"absolute",zIndex:"9999999",top:"0"},className:this.state.isToggleOn?"main":"grid-off"},u))}}]),t}(a.Component);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:#4A8CFF;}\n"),y=r.a.createElement("g",null,r.a.createElement("path",{className:"st0",d:"M180.1,2.9c-23.2,0-42,18.8-42,42v110c0,23.2,18.8,42,42,42c23.2,0,42-18.8,42-42v-110 C222.1,21.7,203.4,2.9,180.1,2.9z M184.2,184.7c0,2.2-1.8,4.1-4.1,4.1s-4.1-1.8-4.1-4.1V15c0-2.2,1.8-4.1,4.1-4.1 c2.2,0,4.1,1.8,4.1,4.1V184.7z"}),r.a.createElement("path",{className:"st0",d:"M46,55.1v36.2c0,2.2-1.8,4.1-4.1,4.1s-4.1-1.8-4.1-4.1V22c0-10.5-8.5-19-19-19l0,0C8.5,3,0,11.5,0,22v156 c0,10.5,8.5,19,19,19l0,0c10.5,0,19-8.5,19-19v-70.5c0-2.2,1.8-4.1,4.1-4.1s4.1,1.8,4.1,4.1v70.4c0,10.5,8.5,19,19,19 c10.5,0,19-8.5,19-19v-21.4c0-7.6-2.6-14.9-7.3-20.9l-25.1-31.4c-1.1-1.4-1.8-3.2-1.8-5c0-1.9,0.7-3.7,1.9-5.2l24.6-29.7 c5-6,7.7-13.6,7.7-21.4V22c0-10.5-8.5-19-19-19s-19,8.5-19,19L46,55.1L46,55.1z"}),r.a.createElement("path",{className:"st0",d:"M368.1,55.1v36.2c0,2.2-1.8,4.1-4.1,4.1s-4.1-1.8-4.1-4.1V22c0-10.5-8.5-19-19-19l0,0c-10.5,0-19,8.5-19,19 v156c0,10.5,8.5,19,19,19l0,0c10.5,0,19-8.5,19-19v-70.5c0-2.2,1.8-4.1,4.1-4.1s4.1,1.8,4.1,4.1v70.4c0,10.5,8.5,19,19,19 c10.5,0,19-8.5,19-19v-21.4c0-7.6-2.6-14.9-7.3-20.9l-25-31.4c-1.1-1.4-1.8-3.2-1.8-5c0-1.9,0.6-3.7,1.9-5.2l24.6-29.7 c5-6,7.7-13.6,7.7-21.4V22c0-10.5-8.5-19-19-19s-19,8.5-19,19L368.1,55.1L368.1,55.1z"}),r.a.createElement("path",{className:"st0",d:"M111.2,196.9L111.2,196.9c10.5,0,19-8.5,19-19V82.1c0-10.5-8.5-19-19-19s-19,8.5-19,19V178 C92.2,188.4,100.7,196.9,111.2,196.9"}),r.a.createElement("path",{className:"st0",d:"M111.2,57.5L111.2,57.5c10.5,0,19-8.5,19-19V22c0-10.5-8.5-19-19-19s-19,8.5-19,19v16.6 C92.2,49,100.7,57.5,111.2,57.5"}),r.a.createElement("path",{className:"st0",d:"M272.1,189.1L272.1,189.1c-2.2,0-4.1-1.8-4.1-4.1v-61.7c0-10.5-8.5-19-19-19s-19,8.5-19,19v32.5 c0,23.2,18.8,41.4,42,41.4s42-18.8,42-41.9v-12.1c0-15.1-8.1-29.1-21.3-36.5l-20.2-11.4c-2.8-1.6-4.5-4.5-4.5-7.6V15.1 c0-2.2,1.8-4.1,4.1-4.1c2.2,0,4.1,1.8,4.1,4.1v60.5c0,10.5,8.5,19,19,19s19-8.5,19-19V44.9c0-23.2-18.8-41.9-41.9-41.9h0 c-23.2,0-42,18.8-41.9,42l0,9.7c0,15.1,8.2,29,21.3,36.5l20.2,11.4c2.8,1.6,4.4,4.5,4.4,7.6v74.8 C276.1,187.3,274.3,189.1,272.1,189.1"})),L=function(e){var t=e.svgRef,n=v(e,["svgRef"]);return r.a.createElement("svg",f({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 406 200",style:{enableBackground:"new 0 0 406 200"},xmlSpace:"preserve",ref:t},n),b,y)},O=r.a.forwardRef(function(e,t){return r.a.createElement(L,f({svgRef:t},e))});n.p;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w=r.a.createElement("path",{d:"M120.556 177.578L172.202 241.955C157.718 247.793 141.934 251.03 125.394 251.03C121.705 251.03 118.047 250.849 114.448 250.516L120.012 199.662L34.017 211.43C28.3021 205.319 23.1618 198.664 18.7471 191.524L120.556 177.578ZM121.554 73.5096C120.072 71.3617 121.342 67.4894 124.729 67.8827C127.874 68.2155 128.448 71.6945 126.997 73.6306C128.509 73.6609 130.081 73.6609 131.563 73.5399C135.887 73.1769 139.606 71.6945 139.908 66.4306C140.392 58.3835 134.254 51.4557 126.211 51.0019C118.167 50.5179 111.243 56.6591 110.79 64.7062C110.366 71.755 114.993 73.1769 121.554 73.5096ZM36.4057 213.941C42.2718 219.84 48.7123 225.165 55.6367 229.823L92.0122 221.958L89.4118 245.736C96.5478 247.884 103.986 249.397 111.606 250.244L116.777 202.929L36.4057 213.941ZM86.6904 244.889L88.807 225.528L59.0233 231.971C67.6107 237.356 76.8633 241.713 86.6904 244.889ZM124.245 149.352L20.1078 163.601L20.5009 166.384L123.61 152.287L216.197 212.005C204.616 224.197 190.616 234.059 174.953 240.805L121.796 174.552L17.3865 188.832L17.4469 189.316C6.34984 170.65 0 148.868 0 125.574C0 86.1551 18.1726 51.0019 46.5957 28.0101L58.2371 42.501L60.4444 40.7464L48.8333 26.2555C52.8246 23.1697 56.9974 20.2958 61.3515 17.7243L83.455 45.2842L85.6623 43.5296L63.831 16.3327C82.0339 6.04691 103.019 0.147705 125.394 0.147705C164.733 0.147705 199.808 18.2991 222.819 46.6456L209.756 57.1431L211.51 59.3516L224.542 48.8842C240.961 70.0911 250.758 96.7132 250.758 125.604C250.758 158.095 238.421 187.712 218.162 209.978L124.245 149.352ZM225.268 160.576L146.077 131.292L145.109 133.924L224.3 163.208L225.268 160.576ZM230.439 110.024L199.748 106.666L199.445 109.48L230.136 112.838L230.439 110.024ZM183.994 55.2977L186.806 55.6002L189.558 30.3698L186.746 30.0673L183.994 55.2977ZM31.2049 65.4928L56.4228 68.2457L56.7252 65.4323L31.5073 62.6793L31.2049 65.4928ZM28.5743 88.303L28.6045 92.6291L74.7164 91.5703C73.6581 93.6879 72.5998 95.8359 71.6927 98.014C68.0944 106.364 81.2174 111.537 84.7855 103.217C86.7206 98.6493 89.1396 94.2627 91.2562 89.7551L233.13 87.6072L233.1 84.7635L180.245 85.5803C180.668 83.4022 180.94 81.1635 181.091 78.8946C182.754 50.9717 161.437 26.9513 133.498 25.3177C114.025 24.1378 96.5175 34.1816 87.1137 49.7918C87.4161 49.7615 87.7185 49.7616 88.0208 49.8221C96.064 50.2758 102.172 57.1734 101.688 65.2508C101.295 71.6945 96.699 73.7516 90.7724 74.0542C91.9517 72.0878 91.2865 68.9415 88.293 68.6088C85.0878 68.2457 83.7876 71.6945 84.9064 73.9029C84.8762 73.9029 84.8762 73.9029 84.8459 73.9332C83.0014 73.6609 81.2174 73.0559 79.6753 72.1483C79.7358 73.9937 79.9172 76.9887 80.1894 80.0139C79.2218 82.4643 78.103 84.824 76.9237 87.214L28.5743 88.303ZM25.6412 113.17L26.0343 115.954L65.1312 110.599L64.7381 107.816L25.6412 113.17ZM91.3167 131.866L90.9236 129.083L22.8292 138.401L23.2223 141.184L91.3167 131.866Z",fill:"#4A8CFF"}),E=function(e){var t=e.svgRef,n=C(e,["svgRef"]);return r.a.createElement("svg",x({width:"100%",height:"",viewBox:"0 0 251 252",fill:"none",ref:t},n),w)},k=r.a.forwardRef(function(e,t){return r.a.createElement(E,x({svgRef:t},e))}),T=(n.p,n(17),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isToggleOn:!0},n.handleFocus=function(){n.setState(function(e){return{isToggleOn:!1}})},n.handleUnhide=function(){n.setState(function(e){return{isToggleOn:!0}})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("props",this.props),r.a.createElement("div",{style:{height:"252px",width:"100%"},className:""},r.a.createElement("div",{className:"body_20x24",style:{width:"336px",display:"inline-block"}},this.props.name),r.a.createElement("div",{className:"body_20x24",style:{width:"336px",display:"inline-block"}},this.props.language),r.a.createElement("div",{className:"body_20x24",style:{width:"324px",display:"inline-block",textAlign:"end"}},this.props.price," \u20bd"),r.a.createElement("div",{style:{borderTop:"solid 2px",marginLeft:"-14px",paddingRight:"28px",marginTop:"2px",width:"100%"}}),r.a.createElement("input",{onClick:this.handleFocus,style:{zIndex:"".concat(this.state.isToggleOn?"0":"2"),fontFamily:"".concat(this.props.link),fontSize:"".concat(this.props.fontSize),lineHeight:"".concat(this.props.lineHeight),width:"100%",border:"none",padding:"0",backgroundColor:"#ffffff00",marginTop:"".concat(this.props.marginTop),position:"relative"},type:"text",placeholder:this.props.word,name:"name",className:"input-font"}),r.a.createElement("div",{onClick:this.handleUnhide,style:{width:"100%",backgroundColor:"".concat((this.state.isToggleOn,"white")),position:"".concat(this.state.isToggleOn?"relative":"fixed"),height:"".concat(this.state.isToggleOn?"100%":"100vh"),zIndex:"".concat(this.state.isToggleOn?"0":"1"),top:"".concat(this.state.isToggleOn?"":"0"),left:"".concat(this.state.isToggleOn?"":"0"),display:"".concat(this.state.isToggleOn?"none":"block")}}))}}]),t}(a.Component)),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={fonts:[{id:1,fontSize:"144pt",lineHeight:"250px",marginTop:"-49px",link:"AFForm-Regular",name:"AFForm",word:"\u0414\u0443\u0445 \u0432\u0440\u0435\u043c\u0435\u043d\u0438",language:"Latin / \u041a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0430",price:2e3},{id:2,fontSize:"78pt",lineHeight:"184px",marginTop:"28px",link:"Form-Bold",name:"Form Bold",word:"\u0411\u0435\u0441\u0441\u0442\u0440\u0430\u0448\u0438\u0435",language:"Latin / \u041a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0430",price:2e3},{id:3,fontSize:"165px",lineHeight:"203px",marginTop:"-12px",link:"Germanica-Regular",name:"Germanica",word:"\u0434\u0438\u0437\u0430\u0439\u043d",language:"Latin / \u041a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u0430",price:2e3}]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.fonts.map(function(e){return r.a.createElement(T,{key:e.id,name:e.name,link:e.link,word:e.word,language:e.language,price:e.price,fontSize:e.fontSize,lineHeight:e.lineHeight,marginTop:e.marginTop,selected:!0})}))}}]),t}(a.Component);var N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"App main"},r.a.createElement(O,{className:"two"}),r.a.createElement("div",{style:{gridColumn:"1 / 3",gridRow:"2 / 4"}},r.a.createElement("div",null,"FONTS"),r.a.createElement("div",null,"INFO"),r.a.createElement("div",null,"GOODS"),r.a.createElement("div",null,"PLAYTYPE")),r.a.createElement(k,{style:{gridColumn:"11 / 13",gridRow:"1 / 3"}}),r.a.createElement("div",{className:"twelve",style:{marginTop:"50px"}},r.a.createElement(j,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.aa5a1c03.chunk.js.map