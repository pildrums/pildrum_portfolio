(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1644:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var i=t(5675),r=t(1513),o=t(5820),a=t(7693),l=t(1664),d=t.n(l),c=t(1163),s=t(7294),p=t(4141),u=t(5434),h=t(9583),f=t(5893);function g(){var e=(0,c.useRouter)(),n=(0,i._)(),t=(0,r.v)().scrollY;return(0,s.useEffect)(function(){t.onChange(function(){t.get()>80?n.start("scroll"):n.start("top")})},[t,n]),(0,f.jsx)(o.M,{children:(0,f.jsx)(x,{variants:m,animate:n,initial:"top",children:(0,f.jsxs)(y,{children:[(0,f.jsx)(w,{href:"/",logo:"assets/logo.png"}),(0,f.jsxs)(v,{children:[(0,f.jsx)(d(),{href:"/",children:(0,f.jsxs)(_,{animate:n,initial:"top",className:"/"===e.pathname?"active":"",children:["홈 ","/"===e.pathname&&(0,f.jsx)(k,{layoutId:"circle"})]})}),(0,f.jsx)(d(),{href:"/project",children:(0,f.jsxs)(_,{animate:n,initial:"top",className:"/project"===e.pathname?"active":"",children:["프로젝트"," ","/project"===e.pathname&&(0,f.jsx)(k,{layoutId:"circle"})]})}),(0,f.jsx)(d(),{href:"/career",children:(0,f.jsxs)(_,{animate:n,initial:"top",className:"/career"===e.pathname?"active":"",children:["커리어"," ","/career"===e.pathname&&(0,f.jsx)(k,{layoutId:"circle"})]})})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(j,{href:"https://github.com/pildrums",children:(0,f.jsx)(h.hJX,{})}),(0,f.jsx)(j,{href:"mailto:there7788@gmail.com",children:(0,f.jsx)(u.F8X,{})})]})]})})})}var m={top:{background:"#fff"},scroll:{background:"#ffc300"}},x=(0,p.ZP)(a.E.header).withConfig({displayName:"NavBar__Wrapper",componentId:"sc-77ieq5-0"})(["width:100%;box-shadow:2px 2px 4px rgba(0,0,0,0.2);position:fixed;top:0;z-index:9999;display:flex;justify-content:center;align-items:center;padding:0 40px;"]),y=(0,p.ZP)(a.E.nav).withConfig({displayName:"NavBar__Nav",componentId:"sc-77ieq5-1"})(["display:flex;justify-content:space-between;align-items:center;gap:40px;padding:0;width:1320px;.active{color:",";font-weight:600;}"],function(e){return e.theme.black.veryDark}),w=(0,p.ZP)(d()).withConfig({displayName:"NavBar__Logo",componentId:"sc-77ieq5-2"})(["background-image:url(",");width:80px;height:80px;margin:8px 0;background-position:center;background-size:cover;"],function(e){return e.logo}),v=p.ZP.div.withConfig({displayName:"NavBar__LinkContainer",componentId:"sc-77ieq5-3"})(["width:200px;display:flex;justify-content:space-between;"]),b=p.ZP.div.withConfig({displayName:"NavBar__IconList",componentId:"sc-77ieq5-4"})(["display:flex;align-items:center;gap:20px;svg{transition:opacity 0.3s ease-in-out;font-size:30px;color:",";opacity:0.5;&:hover{opacity:1;}}"],function(e){return e.theme.black.darker}),j=(0,p.ZP)(d()).withConfig({displayName:"NavBar__IconLink",componentId:"sc-77ieq5-5"})(["display:flex;justify-content:center;align-items:center;"]),_=(0,p.ZP)(a.E.span).withConfig({displayName:"NavBar__StyledLink",componentId:"sc-77ieq5-6"})(["position:relative;font-size:18px;font-weight:400;color:rgba(0,0,0,0.4);text-align:center;transition:color 0.3s ease-in-out;&:hover{color:rgba(0,0,0,0.8);}"]),k=(0,p.ZP)(a.E.span).withConfig({displayName:"NavBar__Circle",componentId:"sc-77ieq5-7"})(["position:absolute;width:5px;height:5px;background:",";border-radius:5px;bottom:-10px;left:0;right:0;margin:0 auto;"],function(e){return e.theme.red});function C(e){var n=e.children;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g,{}),(0,f.jsx)(a.E.div,{variants:I,initial:"initial",animate:"animate",exit:"exit",children:n})]})}var I={initial:{x:300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},transition:{type:"spring",stiffness:260,damping:20}}},2885:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var i=t(9008),r=t.n(i),o=t(5893);function a(e){var n=e.title;return(0,o.jsx)(r(),{children:(0,o.jsxs)("title",{children:[n," | 김필진 포트폴리오"]})})}},7285:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AmpStateContext=void 0;var i=(0,t(2648).Z)(t(7294)).default.createContext({});n.AmpStateContext=i},354:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=e.hybrid,i=e.hasQuery;return void 0!==n&&n||void 0!==t&&t&&void 0!==i&&i}},6505:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.defaultHead=s,n.default=void 0;var i=t(6495).Z,r=t(2648).Z,o=(0,t(1598).Z)(t(7294)),a=r(t(148)),l=t(7285),d=t(523),c=t(354);function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[o.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function p(e,n){return"string"==typeof n||"number"==typeof n?e:n.type===o.default.Fragment?e.concat(o.default.Children.toArray(n.props.children).reduce(function(e,n){return"string"==typeof n||"number"==typeof n?e:e.concat(n)},[])):e.concat(n)}t(2783);var u=["name","httpEquiv","charSet","itemProp"];function h(e,n){var t,r,a,l,d=n.inAmpMode;return e.reduce(p,[]).reverse().concat(s(d).reverse()).filter((t=new Set,r=new Set,a=new Set,l={},function(e){var n=!0,i=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){i=!0;var o=e.key.slice(e.key.indexOf("$")+1);t.has(o)?n=!1:t.add(o)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(var d=0,c=u.length;d<c;d++){var s=u[d];if(e.props.hasOwnProperty(s)){if("charSet"===s)a.has(s)?n=!1:a.add(s);else{var p=e.props[s],h=l[s]||new Set;("name"!==s||!i)&&h.has(p)?n=!1:(h.add(p),l[s]=h)}}}}return n})).reverse().map(function(e,n){var t=e.key||n;if(!d&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(n){return e.props.href.startsWith(n)})){var r=i({},e.props||{});return r["data-href"]=r.href,r.href=void 0,r["data-optimized-fonts"]=!0,o.default.cloneElement(e,r)}return o.default.cloneElement(e,{key:t})})}n.default=function(e){var n=e.children,t=o.useContext(l.AmpStateContext),i=o.useContext(d.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:h,headManager:i,inAmpMode:c.isInAmpMode(t)},n)},("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},148:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){var n,t=e.headManager,l=e.reduceComponentsToState;function d(){if(t&&t.mountedInstances){var n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(l(n,e))}}return r&&(null==t||null==(n=t.mountedInstances)||n.add(e.children),d()),o(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=d),function(){t&&(t._pendingUpdate=d)}}),a(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null};var i=(0,t(1598).Z)(t(7294)),r=!1,o=i.useLayoutEffect,a=r?function(){}:i.useEffect},2783:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.warnOnce=void 0,n.warnOnce=function(e){}},8884:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ex}});var i=t(4141),r=t(5434),o=t(7693),a=t(5893),l=[{id:1,icon:(0,a.jsx)(r.Y1i,{}),title:"이름",content:"김필진"},{id:2,icon:(0,a.jsx)(r.kVv,{}),title:"생년월일",content:"92.07.31"},{id:3,icon:(0,a.jsx)(r.$0r,{}),title:"주소지",content:"경기도 안산시"},{id:4,icon:(0,a.jsx)(r.IXo,{}),title:"연락처",content:"010.4721.6470"},{id:5,icon:(0,a.jsx)(r.F8X,{}),title:"이메일",content:"there7788@gmail.com"},{id:6,icon:(0,a.jsx)(r.Egn,{}),title:"학력",content:"호서대학교 시각디자인학과"}];function d(){return(0,a.jsxs)(s,{children:[(0,a.jsx)(p,{children:"About Me"}),(0,a.jsx)(u,{children:l.map(function(e){return(0,a.jsxs)(h,{variants:c,initial:"initial",whileHover:"hover",children:[e.icon,(0,a.jsxs)(f,{children:[(0,a.jsx)("span",{children:e.title}),(0,a.jsx)("span",{children:e.content})]})]},e.id)})})]})}var c={initial:{y:0},hover:{y:-15,transition:{damping:0,stiffness:10,bounce:.5}}},s=i.ZP.div.withConfig({displayName:"About__Wrapper",componentId:"sc-69lb8m-0"})(["width:100%;padding:48px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),p=i.ZP.h1.withConfig({displayName:"About__Title",componentId:"sc-69lb8m-1"})(["font-size:40px;border-bottom:4px solid ",";color:",";font-weight:600;height:56px;"],function(e){return e.theme.black.veryDark},function(e){return e.theme.black.darker}),u=i.ZP.div.withConfig({displayName:"About__AboutContent",componentId:"sc-69lb8m-2"})(["display:grid;grid-template-columns:repeat(2,1fr);gap:40px;margin:40px 0;"]),h=(0,i.ZP)(o.E.div).withConfig({displayName:"About__AboutItem",componentId:"sc-69lb8m-3"})(["color:",";padding:30px 50px;border-radius:10px;font-size:20px;display:flex;align-items:center;gap:20px;background:",";svg{font-size:56px;color:",";}"],function(e){return e.theme.black.lighter},function(e){return e.theme.black.darker},function(e){return e.theme.white.darker}),f=i.ZP.div.withConfig({displayName:"About__AboutItemContent",componentId:"sc-69lb8m-4"})(["display:flex;flex-direction:column;gap:10px;span{&:first-child{font-size:16px;font-weight:800;color:",";user-select:none;}&:last-child{font-size:16px;font-weight:400;color:",";}}"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.white.lighter});function g(){return(0,a.jsx)(m,{bgphoto:"assets/intro-image.png"})}var m=i.ZP.div.withConfig({displayName:"Intro__Wrapper",componentId:"sc-1jbn8ve-0"})(["width:100%;padding:250px 0;display:flex;flex-direction:column;justify-content:center;align-items:center;background:",";background-image:url(",");background-position:center;"],function(e){return e.theme.brown.lighter},function(e){return e.bgphoto}),x=t(9583),y=t(7735),w=[{id:1,title:"HTML5",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.gtO,{})},{id:2,title:"CSS3",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.r8,{})},{id:3,title:"JavaScript",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.vl3,{})},{id:4,title:"TypeScript",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.WZi,{})},{id:5,title:"React.js",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(y.pNp,{})},{id:6,title:"Next.js",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.Xou,{})},{id:7,title:"Styled-Components",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(y.urR,{})},{id:8,title:"SASS/SCSS",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.hBm,{})}];function v(){return(0,a.jsxs)(j,{variants:b,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(_,{children:"Frontend"}),w.map(function(e){return(0,a.jsxs)(k,{children:[(0,a.jsx)(C,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var b={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},j=(0,i.ZP)(o.E.div).withConfig({displayName:"Frontend__List",componentId:"sc-1si01bx-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),_=i.ZP.h2.withConfig({displayName:"Frontend__ListTitle",componentId:"sc-1si01bx-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),k=i.ZP.div.withConfig({displayName:"Frontend__Item",componentId:"sc-1si01bx-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),C=i.ZP.div.withConfig({displayName:"Frontend__Circle",componentId:"sc-1si01bx-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),I=[{id:1,title:"Node.JS",green:!1,yellow:!1,red:!0,icon:(0,a.jsx)(x.jPo,{})},{id:2,title:"Python",green:!1,yellow:!1,red:!0,icon:(0,a.jsx)(y.Cul,{})},{id:3,title:"Django",green:!1,yellow:!1,red:!0,icon:(0,a.jsx)(y.faG,{})},{id:4,title:"MySQL",green:!1,yellow:!1,red:!0,icon:(0,a.jsx)(y.uJt,{})},{id:5,title:"MariaDB",green:!1,yellow:!1,red:!0,icon:(0,a.jsx)(y.J0P,{})},{id:6,title:"MongoDB",green:!1,yellow:!1,red:!0,icon:(0,a.jsx)(y.t$b,{})},{id:7,title:"Firebase",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.xEg,{})}];function N(){return(0,a.jsxs)(Z,{variants:P,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(S,{children:"Backend"}),I.map(function(e){return(0,a.jsxs)(E,{children:[(0,a.jsx)(M,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var P={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},Z=(0,i.ZP)(o.E.div).withConfig({displayName:"Backend__List",componentId:"sc-1fmpxd-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),S=i.ZP.h2.withConfig({displayName:"Backend__ListTitle",componentId:"sc-1fmpxd-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),E=i.ZP.div.withConfig({displayName:"Backend__Item",componentId:"sc-1fmpxd-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),M=i.ZP.div.withConfig({displayName:"Backend__Circle",componentId:"sc-1fmpxd-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),z=[{id:1,title:"React Native",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.pNp,{})}];function A(){return(0,a.jsxs)(B,{variants:L,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(T,{children:"Mobile App"}),z.map(function(e){return(0,a.jsxs)(q,{children:[(0,a.jsx)(O,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var L={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},B=(0,i.ZP)(o.E.div).withConfig({displayName:"MobileApp__List",componentId:"sc-nedmg9-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),T=i.ZP.h2.withConfig({displayName:"MobileApp__ListTitle",componentId:"sc-nedmg9-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),q=i.ZP.div.withConfig({displayName:"MobileApp__Item",componentId:"sc-nedmg9-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),O=i.ZP.div.withConfig({displayName:"MobileApp__Circle",componentId:"sc-nedmg9-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),F=[{id:1,title:"Git",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.U40,{})},{id:2,title:"Github",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.hJX,{})}];function H(){return(0,a.jsxs)(X,{variants:D,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(U,{children:"Version Management"}),F.map(function(e){return(0,a.jsxs)(J,{children:[(0,a.jsx)(V,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var D={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},X=(0,i.ZP)(o.E.div).withConfig({displayName:"Version__List",componentId:"sc-e4ihfh-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),U=i.ZP.h2.withConfig({displayName:"Version__ListTitle",componentId:"sc-e4ihfh-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),J=i.ZP.div.withConfig({displayName:"Version__Item",componentId:"sc-e4ihfh-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),V=i.ZP.div.withConfig({displayName:"Version__Circle",componentId:"sc-e4ihfh-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),W=[{id:1,title:"Figma",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(x.Tyb,{})},{id:2,title:"AdobeXD / Zeplin",green:!0,yellow:!1,red:!1,icon:(0,a.jsx)(y.RM8,{})}];function R(){return(0,a.jsxs)($,{variants:G,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(Q,{children:"Communication"}),W.map(function(e){return(0,a.jsxs)(Y,{children:[(0,a.jsx)(K,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var G={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},$=(0,i.ZP)(o.E.div).withConfig({displayName:"Communication__List",componentId:"sc-1uf1gve-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),Q=i.ZP.h2.withConfig({displayName:"Communication__ListTitle",componentId:"sc-1uf1gve-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),Y=i.ZP.div.withConfig({displayName:"Communication__Item",componentId:"sc-1uf1gve-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),K=i.ZP.div.withConfig({displayName:"Communication__Circle",componentId:"sc-1uf1gve-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),ee=[{id:1,title:"Heroku",green:!1,yellow:!1,red:!0,icon:(0,a.jsx)(y.ITS,{})},{id:2,title:"Jekyll / Github Pages",green:!1,yellow:!0,red:!1,icon:(0,a.jsx)(y.zZX,{})}];function en(){return(0,a.jsxs)(ei,{variants:et,initial:"initial",whileHover:"hover",children:[(0,a.jsx)(er,{children:"Version Management"}),ee.map(function(e){return(0,a.jsxs)(eo,{children:[(0,a.jsx)(ea,{green:e.green,yellow:e.yellow,red:e.red}),e.icon,(0,a.jsx)("span",{children:e.title})]},e.id)})]})}var et={initial:{y:0},hover:{y:-15,boxShadow:"2px 4px 20px rgba(0, 0, 0, 0.5)",transition:{damping:0,stiffness:10,bounce:.5}}},ei=(0,i.ZP)(o.E.div).withConfig({displayName:"Deployment__List",componentId:"sc-dh0afs-0"})(["padding:30px 50px;background:",";border-radius:10px;"],function(e){return e.theme.black.lighter}),er=i.ZP.h2.withConfig({displayName:"Deployment__ListTitle",componentId:"sc-dh0afs-1"})(["font-weight:400;color:",";border-bottom:1px solid ",";user-select:none;line-height:50px;"],function(e){return e.theme.yellow.lighter},function(e){return e.theme.yellow.darker}),eo=i.ZP.div.withConfig({displayName:"Deployment__Item",componentId:"sc-dh0afs-2"})(["display:flex;justify-content:flex-start;align-items:center;gap:20px;color:",";margin:20px 0;svg{font-size:60px;}span{font-size:20px;font-weight:500;user-select:none;color:",";}"],function(e){return e.theme.white.lighter},function(e){return e.theme.white.darker}),ea=i.ZP.div.withConfig({displayName:"Deployment__Circle",componentId:"sc-dh0afs-3"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),el=[{id:1,title:"80 ~ 100%(학습 완료)",green:!0,yellow:!1,red:!1},{id:2,title:"40 ~ 80%(학습 중)",green:!1,yellow:!0,red:!1},{id:3,title:"0 ~ 40%(학습 시작)",green:!1,yellow:!1,red:!0}];function ed(){return(0,a.jsxs)(ec,{children:[(0,a.jsx)(es,{children:"Stack"}),(0,a.jsx)(ep,{children:el.map(function(e){return(0,a.jsxs)(eu,{children:[(0,a.jsx)(ef,{green:e.green,yellow:e.yellow,red:e.red}),(0,a.jsx)("span",{children:e.title})]},e.id)})}),(0,a.jsxs)(eh,{children:[(0,a.jsx)(v,{}),(0,a.jsx)(N,{}),(0,a.jsx)(A,{}),(0,a.jsx)(H,{}),(0,a.jsx)(R,{}),(0,a.jsx)(en,{})]})]})}var ec=i.ZP.div.withConfig({displayName:"Stack__Wrapper",componentId:"sc-1sooqg5-0"})(["width:100%;padding:48px;display:flex;flex-direction:column;justify-content:center;align-items:center;background:",";"],function(e){return e.theme.yellow.darker}),es=i.ZP.h1.withConfig({displayName:"Stack__Title",componentId:"sc-1sooqg5-1"})(["font-size:40px;border-bottom:4px solid ",";color:",";font-weight:600;height:56px;margin-bottom:40px;"],function(e){return e.theme.black.veryDark},function(e){return e.theme.black.darker}),ep=i.ZP.div.withConfig({displayName:"Stack__Status",componentId:"sc-1sooqg5-2"})(["margin-bottom:40px;color:",";display:flex;gap:20px;"],function(e){return e.theme.black.lighter}),eu=i.ZP.div.withConfig({displayName:"Stack__StatusList",componentId:"sc-1sooqg5-3"})(["display:flex;align-items:center;gap:20px;div{width:20px;height:20px;border-radius:50%;}span{font-weight:400;font-size:18px;}"]),eh=i.ZP.div.withConfig({displayName:"Stack__Content",componentId:"sc-1sooqg5-4"})(["display:grid;grid-template-columns:repeat(2,1fr);gap:20px;"]),ef=i.ZP.div.withConfig({displayName:"Stack__Circle",componentId:"sc-1sooqg5-5"})(["width:10px;height:10px;border-radius:50%;"," "," ",""],function(e){return e.green&&(0,i.iv)(["background:",";"],e.theme.green.lighter)},function(e){return e.yellow&&(0,i.iv)(["background:",";"],e.theme.yellow.lighter)},function(e){return e.red&&(0,i.iv)(["background:",";"],e.theme.red)}),eg=t(1644),em=t(2885);function ex(){return(0,a.jsxs)(eg.Z,{children:[(0,a.jsx)(em.Z,{title:"홈"}),(0,a.jsxs)(ey,{children:[(0,a.jsx)(ew,{}),(0,a.jsx)(g,{}),(0,a.jsx)(d,{}),(0,a.jsx)(ed,{})]})]})}var ey=i.ZP.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-114ha2i-0"})(["height:100vh;display:flex;flex-direction:column;align-items:center;color:#fff;font-size:24px;"]),ew=i.ZP.div.withConfig({displayName:"pages__Space",componentId:"sc-114ha2i-1"})(["margin-top:80px;"])},8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8884)}])},9008:function(e,n,t){e.exports=t(6505)}},function(e){e.O(0,[228,445,415,611,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);