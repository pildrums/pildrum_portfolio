(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1644:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var i=n(5675),r=n(1513),o=n(5820),a=n(7693),l=n(1664),c=n.n(l),s=n(1163),d=n(7294),p=n(4141),u=n(5434),h=n(9583),f=n(5893);function g(){var e=(0,s.useRouter)(),t=(0,i._)(),n=(0,r.v)().scrollY;return(0,d.useEffect)(function(){n.onChange(function(){n.get()>80?t.start("scroll"):t.start("top")})},[n,t]),(0,f.jsx)(o.M,{children:(0,f.jsx)(x,{variants:m,animate:t,initial:"top",children:(0,f.jsxs)(y,{children:[(0,f.jsx)(v,{href:"/",logo:"assets/logo.png"}),(0,f.jsxs)(w,{children:[(0,f.jsx)(c(),{href:"/",children:(0,f.jsxs)(_,{animate:t,initial:"top",className:"/"===e.pathname?"active":"",children:["홈 ","/"===e.pathname&&(0,f.jsx)(k,{layoutId:"circle"})]})}),(0,f.jsx)(c(),{href:"/project",children:(0,f.jsxs)(_,{animate:t,initial:"top",className:"/project"===e.pathname?"active":"",children:["프로젝트"," ","/project"===e.pathname&&(0,f.jsx)(k,{layoutId:"circle"})]})}),(0,f.jsx)(c(),{href:"/career",children:(0,f.jsxs)(_,{animate:t,initial:"top",className:"/career"===e.pathname?"active":"",children:["커리어"," ","/career"===e.pathname&&(0,f.jsx)(k,{layoutId:"circle"})]})})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(j,{href:"https://github.com/pildrums",children:(0,f.jsx)(h.hJX,{})}),(0,f.jsx)(j,{href:"mailto:there7788@gmail.com",children:(0,f.jsx)(u.F8X,{})})]})]})})})}var m={top:{background:"#fff"},scroll:{background:"#ffc300"}},x=(0,p.ZP)(a.E.header).withConfig({displayName:"NavBar__Wrapper",componentId:"sc-77ieq5-0"})(["width:100%;box-shadow:2px 2px 4px rgba(0,0,0,0.2);position:fixed;top:0;z-index:9999;display:flex;justify-content:center;align-items:center;padding:0 40px;"]),y=(0,p.ZP)(a.E.nav).withConfig({displayName:"NavBar__Nav",componentId:"sc-77ieq5-1"})(["display:flex;justify-content:space-between;align-items:center;gap:40px;padding:0;width:1320px;.active{color:",";font-weight:600;}"],function(e){return e.theme.black.veryDark}),v=(0,p.ZP)(c()).withConfig({displayName:"NavBar__Logo",componentId:"sc-77ieq5-2"})(["background-image:url(",");width:80px;height:80px;margin:8px 0;background-position:center;background-size:cover;"],function(e){return e.logo}),w=p.ZP.div.withConfig({displayName:"NavBar__LinkContainer",componentId:"sc-77ieq5-3"})(["width:200px;display:flex;justify-content:space-between;"]),b=p.ZP.div.withConfig({displayName:"NavBar__IconList",componentId:"sc-77ieq5-4"})(["display:flex;align-items:center;gap:20px;svg{transition:opacity 0.3s ease-in-out;font-size:30px;color:",";opacity:0.5;&:hover{opacity:1;}}"],function(e){return e.theme.black.darker}),j=(0,p.ZP)(c()).withConfig({displayName:"NavBar__IconLink",componentId:"sc-77ieq5-5"})(["display:flex;justify-content:center;align-items:center;"]),_=(0,p.ZP)(a.E.span).withConfig({displayName:"NavBar__StyledLink",componentId:"sc-77ieq5-6"})(["position:relative;font-size:18px;font-weight:400;color:rgba(0,0,0,0.4);text-align:center;transition:color 0.3s ease-in-out;&:hover{color:rgba(0,0,0,0.8);}"]),k=(0,p.ZP)(a.E.span).withConfig({displayName:"NavBar__Circle",componentId:"sc-77ieq5-7"})(["position:absolute;width:5px;height:5px;background:",";border-radius:5px;bottom:-10px;left:0;right:0;margin:0 auto;"],function(e){return e.theme.red});function C(e){var t=e.children;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g,{}),(0,f.jsx)(a.E.div,{variants:I,initial:"initial",animate:"animate",exit:"exit",children:t})]})}var I={initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",stiffness:260,damping:20}}},2885:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(9008),r=n.n(i),o=n(5893);function a(e){var t=e.title;return(0,o.jsxs)(r(),{children:[(0,o.jsxs)("title",{children:[t," | 김필진 포트폴리오"]}),(0,o.jsx)("link",{rel:"shortcut icon",href:"favicon.ico",type:"image/x-icon"})]})}},7285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var i=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=i},354:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,i=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==i&&i}},6505:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var i=n(6495).Z,r=n(2648).Z,o=(0,n(1598).Z)(n(7294)),a=r(n(148)),l=n(7285),c=n(523),s=n(354);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(2783);var u=["name","httpEquiv","charSet","itemProp"];function h(e,t){var n,r,a,l,c=t.inAmpMode;return e.reduce(p,[]).reverse().concat(d(c).reverse()).filter((n=new Set,r=new Set,a=new Set,l={},function(e){var t=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;var o=e.key.slice(e.key.indexOf("$")+1);n.has(o)?t=!1:n.add(o)}switch(e.type){case"title":case"base":r.has(e.type)?t=!1:r.add(e.type);break;case"meta":for(var c=0,s=u.length;c<s;c++){var d=u[c];if(e.props.hasOwnProperty(d)){if("charSet"===d)a.has(d)?t=!1:a.add(d);else{var p=e.props[d],h=l[d]||new Set;("name"!==d||!i)&&h.has(p)?t=!1:(h.add(p),l[d]=h)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var r=i({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,o.default.cloneElement(e,r)}return o.default.cloneElement(e,{key:n})})}t.default=function(e){var t=e.children,n=o.useContext(l.AmpStateContext),i=o.useContext(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:h,headManager:i,inAmpMode:s.isInAmpMode(n)},t)},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,l=e.reduceComponentsToState;function c(){if(n&&n.mountedInstances){var t=i.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(l(t,e))}}return r&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),c()),o(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),o(function(){return n&&(n._pendingUpdate=c),function(){n&&(n._pendingUpdate=c)}}),a(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var i=(0,n(1598).Z)(n(7294)),r=!1,o=i.useLayoutEffect,a=r?function(){}:i.useEffect},2783:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warnOnce=void 0,t.warnOnce=function(e){}},9158:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ei}});var i=n(4141),r=n(5434),o=n(7693),a=n(5893),l=[{id:1,icon:(0,a.jsx)(r.Y1i,{}),title:"이름",content:"김필진"},{id:2,icon:(0,a.jsx)(r.kVv,{}),title:"생년월일",content:"92.07.31"},{id:3,icon:(0,a.jsx)(r.$0r,{}),title:"주소지",content:"경기도 안산시"},{id:4,icon:(0,a.jsx)(r.IXo,{}),title:"연락처",content:"010.4721.6470"},{id:5,icon:(0,a.jsx)(r.F8X,{}),title:"이메일",content:"there7788@gmail.com"},{id:6,icon:(0,a.jsx)(r.Egn,{}),title:"학력",content:"신성대학교 시각디자인과"}];function c(){return(0,a.jsxs)(d,{children:[(0,a.jsx)(p,{children:"About Me"}),(0,a.jsx)(u,{children:l.map(function(e){return(0,a.jsxs)(h,{variants:s,initial:"initial",whileHover:"hover",children:[e.icon,(0,a.jsxs)(f,{children:[(0,a.jsx)("span",{children:e.title}),(0,a.jsx)("span",{children:e.content})]})]},e.id)})})]})}var s={initial:{y:0},hover:{y:-15,transition:{damping:0,stiffness:10,bounce:.5}}},d=i.ZP.div.withConfig({displayName:"About__Wrapper",componentId:"sc-69lb8m-0"})(["width:100%;padding:48px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),p=i.ZP.h1.withConfig({displayName:"About__Title",componentId:"sc-69lb8m-1"})(["font-size:40px;border-bottom:4px solid ",";color:",";font-weight:600;height:56px;"],function(e){return e.theme.black.veryDark},function(e){return e.theme.black.darker}),u=i.ZP.div.withConfig({displayName:"About__AboutContent",componentId:"sc-69lb8m-2"})(["display:grid;grid-template-columns:repeat(2,1fr);gap:40px;margin:40px 0;"]),h=(0,i.ZP)(o.E.div).withConfig({displayName:"About__AboutItem",componentId:"sc-69lb8m-3"})(["color:",";padding:30px 50px;border-radius:10px;font-size:20px;display:flex;align-items:center;gap:20px;background:",";svg{font-size:56px;color:",";}"],function(e){return e.theme.black.lighter},function(e){return e.theme.black.darker},function(e){return e.theme.white.darker}),f=i.ZP.div.withConfig({displayName:"About__AboutItemContent",componentId:"sc-69lb8m-4"})(["display:flex;flex-direction:column;gap:10px;span{&:first-child{font-size:16px;font-weight:800;color:",";user-select:none;}&:last-child{font-size:16px;font-weight:400;color:",";}}"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.white.lighter});function g(){return(0,a.jsx)(m,{bgphoto:"assets/intro-image.png"})}var m=i.ZP.div.withConfig({displayName:"Intro__Wrapper",componentId:"sc-1jbn8ve-0"})(["width:100%;padding:250px 0;display:flex;flex-direction:column;justify-content:center;align-items:center;background:",";background-image:url(",");background-position:center;"],function(e){return e.theme.brown.lighter},function(e){return e.bgphoto}),x=n(9583),y=n(7735),v=[{id:1,title:"HTML5",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.gtO,{})},{id:2,title:"CSS3",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.r8,{})},{id:3,title:"JavaScript",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.vl3,{})},{id:4,title:"TypeScript",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.WZi,{})},{id:5,title:"React.js",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(y.pNp,{})},{id:6,title:"Next.js",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.Xou,{})},{id:7,title:"Styled-Components",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(y.urR,{})},{id:8,title:"SASS/SCSS",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.hBm,{})}];function w(){return(0,a.jsxs)(j,{variants:b,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(_,{children:"Frontend"}),v.map(function(e){return(0,a.jsxs)(k,{children:[(0,a.jsx)(C,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var b={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},j=(0,i.ZP)(o.E.div).withConfig({displayName:"Frontend__List",componentId:"sc-1si01bx-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),_=i.ZP.h2.withConfig({displayName:"Frontend__ListTitle",componentId:"sc-1si01bx-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),k=i.ZP.div.withConfig({displayName:"Frontend__Item",componentId:"sc-1si01bx-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),C=i.ZP.div.withConfig({displayName:"Frontend__Circle",componentId:"sc-1si01bx-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),I=[{id:1,title:"Git",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.U40,{})},{id:2,title:"Github",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.hJX,{})}];function N(){return(0,a.jsxs)(P,{variants:Z,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(S,{children:"Version Management"}),I.map(function(e){return(0,a.jsxs)(E,{children:[(0,a.jsx)(z,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var Z={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},P=(0,i.ZP)(o.E.div).withConfig({displayName:"Version__List",componentId:"sc-e4ihfh-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),S=i.ZP.h2.withConfig({displayName:"Version__ListTitle",componentId:"sc-e4ihfh-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),E=i.ZP.div.withConfig({displayName:"Version__Item",componentId:"sc-e4ihfh-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),z=i.ZP.div.withConfig({displayName:"Version__Circle",componentId:"sc-e4ihfh-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),A=[{id:1,title:"Figma",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.Tyb,{})},{id:2,title:"AdobeXD / Zeplin",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(y.RM8,{})}];function M(){return(0,a.jsxs)(q,{variants:L,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(O,{children:"Communication"}),A.map(function(e){return(0,a.jsxs)(T,{children:[(0,a.jsx)(F,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var L={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},q=(0,i.ZP)(o.E.div).withConfig({displayName:"Communication__List",componentId:"sc-1uf1gve-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),O=i.ZP.h2.withConfig({displayName:"Communication__ListTitle",componentId:"sc-1uf1gve-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),T=i.ZP.div.withConfig({displayName:"Communication__Item",componentId:"sc-1uf1gve-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),F=i.ZP.div.withConfig({displayName:"Communication__Circle",componentId:"sc-1uf1gve-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),B=[{id:1,title:"Heroku",green:!1,yellow:!1,red:!0,icon:(0,a.jsx)(y.ITS,{})},{id:2,title:"Jekyll / Github Pages",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.zZX,{})}];function H(){return(0,a.jsxs)(U,{variants:X,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(D,{children:"Version Management"}),B.map(function(e){return(0,a.jsxs)(V,{children:[(0,a.jsx)(W,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var X={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},U=(0,i.ZP)(o.E.div).withConfig({displayName:"Deployment__List",componentId:"sc-dh0afs-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),D=i.ZP.h2.withConfig({displayName:"Deployment__ListTitle",componentId:"sc-dh0afs-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),V=i.ZP.div.withConfig({displayName:"Deployment__Item",componentId:"sc-dh0afs-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),W=i.ZP.div.withConfig({displayName:"Deployment__Circle",componentId:"sc-dh0afs-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),J=[{id:1,title:"80 ~ 100%(학습 완료)",green:!0,yellow:!1,red:!1},{id:2,title:"40 ~ 80%(학습 중)",green:!1,yellow:!0,red:!1},{id:3,title:"0 ~ 40%(학습 시작)",green:!1,yellow:!1,red:!0}];function R(){return(0,a.jsxs)(G,{children:[(0,a.jsx)($,{children:"Stack"}),(0,a.jsx)(Y,{children:J.map(function(e){return(0,a.jsxs)(Q,{children:[(0,a.jsx)(ee,{green:e.green,yellow:e.yellow,red:e.red}),(0,a.jsx)("span",{children:e.title})]},e.id)})}),(0,a.jsxs)(K,{children:[(0,a.jsx)(w,{}),(0,a.jsx)(N,{}),(0,a.jsx)(M,{}),(0,a.jsx)(H,{})]})]})}var G=i.ZP.div.withConfig({displayName:"Stack__Wrapper",componentId:"sc-1sooqg5-0"})(["width:100%;padding:48px;display:flex;flex-direction:column;justify-content:center;align-items:center;background:",";"],function(e){return e.theme.yellow.darker}),$=i.ZP.h1.withConfig({displayName:"Stack__Title",componentId:"sc-1sooqg5-1"})(["font-size:40px;border-bottom:4px solid ",";color:",";font-weight:600;height:56px;margin-bottom:40px;"],function(e){return e.theme.black.veryDark},function(e){return e.theme.black.darker}),Y=i.ZP.div.withConfig({displayName:"Stack__Status",componentId:"sc-1sooqg5-2"})(["margin-bottom:40px;color:",";display:flex;gap:20px;"],function(e){return e.theme.black.lighter}),Q=i.ZP.div.withConfig({displayName:"Stack__StatusList",componentId:"sc-1sooqg5-3"})(["display:flex;align-items:center;gap:20px;div{width:20px;height:20px;border-radius:50%;}span{font-weight:400;font-size:18px;}"]),K=i.ZP.div.withConfig({displayName:"Stack__Content",componentId:"sc-1sooqg5-4"})(["display:grid;grid-template-columns:repeat(2,1fr);gap:20px;"]),ee=i.ZP.div.withConfig({displayName:"Stack__Circle",componentId:"sc-1sooqg5-5"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),et=n(1644),en=n(2885);function ei(){return(0,a.jsxs)(et.Z,{children:[(0,a.jsx)(en.Z,{title:"홈"}),(0,a.jsxs)(er,{children:[(0,a.jsx)(eo,{}),(0,a.jsx)(g,{}),(0,a.jsx)(c,{}),(0,a.jsx)(R,{})]})]})}var er=i.ZP.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-114ha2i-0"})(["height:100vh;display:flex;flex-direction:column;align-items:center;color:#fff;font-size:24px;"]),eo=i.ZP.div.withConfig({displayName:"pages__Space",componentId:"sc-114ha2i-1"})(["margin-top:80px;"])},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9158)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[228,445,415,611,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);