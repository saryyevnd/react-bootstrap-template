(this["webpackJsonpnode-sass-theme-generator"]=this["webpackJsonpnode-sass-theme-generator"]||[]).push([[29],{126:function(e,t,n){var r={"./accordions":[113,1],"./accordions.js":[113,1],"./allerts":[118,5],"./allerts.js":[118,5],"./badges":[119,6],"./badges.js":[119,6],"./breadcrumbs":[116,7],"./breadcrumbs.js":[116,7],"./buttons":[117,3],"./buttons-group":[115,2],"./buttons-group.js":[115,2],"./buttons.js":[117,3],"./cards":[112,0],"./cards.js":[112,0],"./carousels":[114,4],"./carousels.js":[114,4],"./close-buttons":[91,8],"./close-buttons.js":[91,8],"./dropdowns":[92,9],"./dropdowns.js":[92,9],"./figures":[93,10],"./figures.js":[93,10],"./forms":[94,11],"./forms.js":[94,11],"./home":[58],"./home.js":[58],"./images":[95,12],"./images.js":[95,12],"./input-groups":[96,13],"./input-groups.js":[96,13],"./list-groups":[97,14],"./list-groups.js":[97,14],"./modals":[98,15],"./modals.js":[98,15],"./navbars":[99,16],"./navbars.js":[99,16],"./navs":[100,17],"./navs.js":[100,17],"./offcanvas":[101,18],"./offcanvas.js":[101,18],"./overlays":[102,19],"./overlays.js":[102,19],"./paginations":[103,20],"./paginations.js":[103,20],"./placeholders":[104,21],"./placeholders.js":[104,21],"./popovers":[105,22],"./popovers.js":[105,22],"./progress-bars":[106,23],"./progress-bars.js":[106,23],"./spinners":[107,24],"./spinners.js":[107,24],"./tabbed-components":[108,25],"./tabbed-components.js":[108,25],"./tables":[109,26],"./tables.js":[109,26],"./toasts":[110,27],"./toasts.js":[110,27],"./tooltips":[111,28],"./tooltips.js":[111,28]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=126,e.exports=a},132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(20),c=n.n(s),i=n(33),o=n(10),u=n.n(o),l=n(16),d=n(41),b=n(25),j=n(7),h=n(21),p=n(58),f=n(1),m=function(){return Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/",element:Object(f.jsx)(p.default,{})}),h.a.map((function(e){return Object(f.jsx)(j.a,{path:"/".concat(e),element:Object(f.jsx)(d.c,{page:e})},e)}))]})},O=n(34),g=function(){var e=Object(b.a)().setIsThemeFetching;return Object(r.useLayoutEffect)((function(){Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=localStorage.getItem("theme"))&&h.b.includes(n)){t.next=5;break}return t.next=4,Object(O.a)("default",e);case 4:return t.abrupt("return",t.sent);case 5:return t.next=7,Object(O.a)(n,e);case 7:case"end":return t.stop()}}),t)})))()}),[e]),Object(f.jsxs)(a.a.Fragment,{children:[Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)("div",{className:"sidebar",children:Object(f.jsx)(d.f,{})}),Object(f.jsx)("div",{className:"body",children:Object(f.jsxs)("div",{className:"body__inner",children:[Object(f.jsx)("div",{className:"navigation",children:Object(f.jsx)(d.d,{})}),Object(f.jsx)("div",{className:"content",children:Object(f.jsx)(m,{})})]})})]})}),Object(f.jsx)(d.e,{})]})},x=n(65);c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{basename:"/react-bootstrap-template",children:Object(f.jsx)(x.b,{children:Object(f.jsx)(g,{})})})}),document.getElementById("root"))},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=["default","cerulean","cosmo","cyborg","darkly","flatly","journal","litera","lumen","lux","materia","minty","morph","pulse","quartz","sandstone","simplex","sketchy","slate","solar","spacelab","superhero","united","vapor","yeti","zephyr"],a=["accordions","allerts","badges","breadcrumbs","buttons-group","buttons","cards","carousels","close-buttons","dropdowns","figures","forms","images","input-groups","modals","navbars","navs","offcanvas","overlays","paginations","placeholders","popovers","progress-bars","spinners","tabbed-components","tables","toasts","tooltips"]},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n(65),s=function(){return Object(r.useContext)(a.a)}},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(10),a=n.n(r),s=n(16),c=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function i(e,t){return new Promise(function(){var n=Object(s.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return document.body.style.overflow="hidden",t((function(){return!0})),n.next=4,c(500);case 4:(i=document.createElement("link")).setAttribute("href","/react-bootstrap-template/css/".concat(e,".css")),i.setAttribute("rel","stylesheet"),i.setAttribute("id","theme-link"),document.head.appendChild(i),i.onload=Object(s.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return localStorage.setItem("theme",e),n.next=3,c(500);case 3:t((function(){return!1})),document.body.style.overflow="auto",r();case 6:case"end":return n.stop()}}),n)})));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}var o=function(e,t){return new Promise(function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=document.getElementById("theme-link"),!s.getAttribute("href").includes(e)){n.next=4;break}return n.abrupt("return",r());case 4:return s.remove(),n.next=7,i(e,t);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},41:function(e,t,n){"use strict";n.d(t,"f",(function(){return C})),n.d(t,"d",(function(){return W})),n.d(t,"e",(function(){return L})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return J}));var r,a,s,c,i,o=n(10),u=n.n(o),l=n(16),d=n(4),b=n(0),j=n(133),h=n(134),p=n(141),f=n(1),m=function(e){var t=e.page,r=Object(b.useState)(!0),a=Object(d.a)(r,2),s=a[0],c=a[1],i=Object(b.useState)(null),o=Object(d.a)(i,2),m=o[0],O=o[1];return Object(b.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(126)("./".concat(t));case 2:r=e.sent,a=r.default,O((function(){return Object(f.jsx)(R,{page:t,children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(h.a,{className:"bg-primary p-3 rounded-3",lg:"12",children:Object(f.jsx)("h1",{className:"h1 text-capitalize text-light",children:t})}),Object(f.jsx)(a,{})]})})})),c(!1);case 6:case"end":return e.stop()}}),e)})))()}),[t]),s?Object(f.jsx)(j.a,{children:Object(f.jsx)(h.a,{className:"text-center",lg:"12",children:Object(f.jsx)(p.a,{size:"lg",animation:"border",variant:"primary"})})}):m},O=n(25),g=n(32),x=(n(127),n(143)),v=n(84),w=n(34),y=n(21),k=n(7),S=n(33),N=n.p+"static/media/reactbootstrap.1c7d4dd1.svg",C=function(){var e=Object(k.e)().pathname,t=Object(O.a)(),n=t.isSidebarOpen,r=t.toggleSidebar,a=t.setIsThemeFetching,s=t.setIsSidebarOpen,c=localStorage.getItem("theme"),i=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!1),e.next=3,Object(w.b)(t,a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(g.c,{toggled:n,onToggle:r,breakPoint:"lg",children:[Object(f.jsx)(g.d,{className:"bg-primary border-0",children:Object(f.jsx)(x.a,{children:Object(f.jsxs)(v.a,{className:"w-100 text-center text-light m-0",children:[Object(f.jsx)("img",{src:N,alt:"react-bootstrap",style:{width:"40px"}})," ","React-Bootstrap"]})})}),Object(f.jsxs)(g.a,{className:"bg-dark p-0",iconShape:"circle",children:[Object(f.jsx)(g.e,{title:"Themes",icon:"T",children:y.b.map((function(e){return Object(f.jsx)(g.b,{active:e===c,className:"text-capitalize",onClick:function(){return i(e)},children:e},e)}))}),Object(f.jsx)(g.e,{title:"Components",icon:"C",children:y.a.map((function(t){return Object(f.jsx)(g.b,{className:"text-capitalize active",onClick:r,children:Object(f.jsx)(S.b,{className:e==="/".concat(t)?"text-light fw-bold":"",to:"/".concat(t),children:t})},t)}))})]})]})},I=n(30),T=n(142),M=n(135),z=n(144),H=n(31),W=function(){var e=Object(O.a)().toggleSidebar,t=Object(b.useState)(""),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(b.useState)({pages:[],themes:[]}),c=Object(d.a)(s,2),i=c[0],o=c[1],j=Object(b.useState)(!1),h=Object(d.a)(j,2),p=h[0],m=h[1],g=Object(O.a)().setIsThemeFetching,v=localStorage.getItem("theme"),N=Object(k.e)().pathname,C=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.b)(t,g);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){o((function(){return{pages:y.a.filter((function(e){return!!r&&e.toLowerCase().includes(r.toLowerCase())})),themes:y.b.filter((function(e){return!!r&&e.toLowerCase().includes(r.toLowerCase())}))}}))}),[r]),Object(f.jsx)(x.a,{bg:"primary",expand:"lg",children:Object(f.jsxs)(T.a,{fluid:!0,children:[Object(f.jsxs)(E,{show:p,onToggle:m,align:"start",children:[Object(f.jsx)(M.a.Toggle,{variant:"secondary",placeholder:"Search...",as:z.a,type:"input",value:r,onChange:function(e){return a(e.target.value)},onClick:function(e){e.stopPropagation(),m(!0)}}),Object(f.jsxs)(P,{variant:"dark",children:[Object(f.jsx)(M.a.Divider,{}),!!i.pages.length&&Object(f.jsx)(M.a.Header,{children:"Components"}),i.pages.map((function(e){return Object(f.jsx)(M.a.Item,{className:"text-capitalize",as:S.b,to:"/".concat(e),active:N==="/".concat(e),children:e},e)})),!!i.themes.length&&Object(f.jsx)(M.a.Header,{children:"Themes"}),i.themes.map((function(e){return Object(f.jsx)(M.a.Item,{onClick:C.bind(null,e),className:"text-capitalize",active:v===e,children:e},e)})),!!i.themes.length||!!i.pages.length||Object(f.jsx)(M.a.ItemText,{children:"No result yet "})]})]}),Object(f.jsx)(x.a.Toggle,{onClick:e,"aria-controls":"basic-navbar-nav"})]})})},E=Object(H.a)(M.a)(r||(r=Object(I.a)(["\n  width: calc(100% - 70px);\n  max-width: 600px;\n"]))),P=Object(H.a)(M.a.Menu)(a||(a=Object(I.a)(["\n  width: 100%;\n  max-height: 400px;\n  overflow: auto;\n  padding: 1rem !important;\n\n  top: calc(100% - 3px) !important;\n\n  @media (max-width: 991.9px) {\n    width: calc(100% + 70px);\n  }\n"]))),F=n.p+"static/media/preloader.3f6ea0a7.gif",L=function(){return Object(O.a)().isThemeFetching?Object(f.jsx)("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",top:"0",left:"0",zIndex:1,backgroundColor:"#fff"},children:Object(f.jsx)("img",{style:{width:400,height:300},src:F,alt:"preloader"})}):null},R=function(e){var t=Object(b.useState)(!0),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(b.useLayoutEffect)((function(){a(!1),setTimeout((function(){return a(!0)}),100)}),[a,e.page]),Object(f.jsx)(A,{isReady:r,children:e.children})},A=H.a.div(s||(s=Object(I.a)(["\n  position: relative;\n  top: ",";\n  will-change: all;\n  opacity: ",";\n  transition: opacity "," ease-out,\n    top "," ease-out;\n"])),(function(e){var t=e.isReady;return"".concat(t?"0":"-100px")}),(function(e){return e.isReady?1:0}),(function(e){return e.isReady?"1s":"0s"}),(function(e){return e.isReady?".5s":"0s"})),_=n(2),B=n(3),D=["iWidth","iHeight","iMaxWidth","iMinHeight","showSize"],J=function(e){var t=e.iWidth,n=e.iHeight,r=e.iMaxWidth,a=e.iMinHeight,s=e.showSize,c=Object(B.a)(e,D);return t=t||100,n=n||100,r=r||t||"initial",a=a||"initial",s=s||!1,Object(f.jsx)(U,Object(_.a)(Object(_.a)({className:"bg-dark text-light"},c),{},{iMaxWidth:r,iMinHeight:a,children:Object(f.jsx)(q,Object(_.a)(Object(_.a)({className:"bg-transparent text-light"},c),{},{iWidth:t,iHeight:n,iMaxWidth:r,iMinHeight:a,showSize:s}))}))},U=H.a.div(c||(c=Object(I.a)(["\n  width: 100%;\n  max-width: ",";\n  min-height: (",");\n"])),(function(e){return e.iMaxWidth}),(function(e){return e.iMinHeight})),q=H.a.div(i||(i=Object(I.a)(["\n  position: relative;\n  width: 100%;\n  max-width: ",";\n  min-height: ",";\n  padding-top: ",";\n\n  &::before {\n    display: ",';\n    content: "','";\n    color: inherit;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%, -50%, 0);\n    font-size: 1.25rem;\n  }\n'])),(function(e){return e.iMaxWidth}),(function(e){return e.iMinHeight}),(function(e){var t=e.iWidth;return e.iHeight/t*100+"%"}),(function(e){return e.showSize?"block":"none"}),(function(e){return e.iWidth+"x"+e.iHeight}))},58:function(e,t,n){"use strict";n.r(t);n(0);var r=n(133),a=n(134),s=n(1);t.default=function(){return Object(s.jsx)(r.a,{children:Object(s.jsx)(a.a,{children:"Home Page"})})}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(4),a=n(0),s=n(1),c=Object(a.createContext)(null),i=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),i=n[0],o=n[1],u=Object(a.useState)(!1),l=Object(r.a)(u,2),d=l[0],b=l[1];return Object(s.jsx)(c.Provider,{value:{toggleSidebar:function(){return o((function(e){return!e}))},setIsSidebarOpen:o,isSidebarOpen:i,isThemeFetching:d,setIsThemeFetching:b},children:e.children})}}},[[132,30,31]]]);
//# sourceMappingURL=main.6ff29162.chunk.js.map