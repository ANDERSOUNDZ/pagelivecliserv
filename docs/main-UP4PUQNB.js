import{b as Mt,c as Nt,d as Dt,e as Tt,h as At,j as Ft,k as jt,l as H}from"./chunk-PWGG5U5C.js";import{$ as C,A as pt,Aa as k,Ac as Ot,Fa as gt,Ga as bt,Nb as S,Sb as Rt,Ua as vt,Wa as wt,X as dt,Xa as yt,Ya as _t,Za as Ct,_ as M,_a as B,a as y,ab as Et,ac as xt,b as $,bb as A,da as v,ea as ut,i as lt,ja as F,ka as E,l as ht,lb as St,ma as mt,nc as z,o as ft,ub as w,vb as b,wb as _,xa as j,yc as W,z as K,za as I}from"./chunk-7UOYOB6U.js";var ae=[{path:"servicio",loadChildren:()=>import("./chunk-LH3DJVQA.js").then(t=>t.ServiciosModule)},{path:"cliente",loadChildren:()=>import("./chunk-L4FDEGGV.js").then(t=>t.ClientesModule)},{path:"serviciosclientes",loadChildren:()=>import("./chunk-42GBM4YG.js").then(t=>t.ClientesservicioModule)},{path:"**",redirectTo:"servicio"}],It=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=E({type:e}),e.\u0275inj=C({imports:[H.forRoot(ae),H]});let t=e;return t})();var le=()=>({exact:!0}),kt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=F({type:e,selectors:[["app-sidebar"]],decls:25,vars:2,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"list-group"],["routerLinkActive","active","routerLink","servicio/listaservicio",1,"list-group-item",3,"routerLinkActiveOptions"],["routerLinkActive","active","routerLink","cliente",1,"list-group-item"],["routerLinkActive","active","routerLink","serviciosclientes",1,"list-group-item"],["routerLinkActive","active",1,"list-group-item"],["href","https://www.apiclienteservicio.somee.com/swagger/index.html","target","_blank"]],template:function(n,s){n&1&&(w(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),S(5,"Menu Administraci\xF3n:"),b(),_(6,"hr"),w(7,"ul",4)(8,"li",5),S(9," Servicios "),b(),w(10,"li",6),S(11," Clientes "),b(),w(12,"li",7),S(13," Lista Servicios Clientes "),b()()()()()(),_(14,"br"),w(15,"div",0)(16,"div",1)(17,"div",2)(18,"ul",4)(19,"li",8)(20,"h4"),S(21,"ApiREST:"),b(),w(22,"a",9),S(23,"https://www.apiclienteservicio.somee.com/swagger/index.html"),b(),S(24,". "),b()()()()()),n&2&&(vt(8),St("routerLinkActiveOptions",Rt(1,le)))},dependencies:[Ft,jt],styles:[".card[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 4px 8px #0003}.card-img-top[_ngcontent-%COMP%]{border-radius:10px 10px 0 0}@media (max-width: 768px){.card[_ngcontent-%COMP%]{margin-top:20px}}"]});let t=e;return t})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=E({type:e}),e.\u0275inj=C({imports:[W,H]});let t=e;return t})();var Q=class{constructor(e,i){this.open=e,this.close=i||e}isManual(){return this.open==="manual"||this.close==="manual"}},fe={hover:["mouseover","mouseout"],focus:["focusin","focusout"]};function pe(t,e=fe){let i=(t||"").trim();if(i.length===0)return[];let o=i.split(/\s+/).map(s=>s.split(":")).map(s=>{let r=e[s[0]]||s;return new Q(r[0],r[1])}),n=o.filter(s=>s.isManual());if(n.length>1)throw new Error("Triggers parse error: only one manual trigger is allowed");if(n.length===1&&o.length>1)throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers");return o}function Lt(t,e){let i=pe(e.triggers),o=e.target;if(i.length===1&&i[0].isManual())return Function.prototype;let n=[],s=[],r=()=>{s.forEach(a=>n.push(a())),s.length=0};return i.forEach(a=>{let c=a.open===a.close,l=c?e.toggle:e.show;if(!c&&a.close&&e.hide){let h=a.close,p=e.hide,m=()=>t.listen(o,h,p);s.push(m)}l&&n.push(t.listen(o,a.open,()=>l(r)))}),()=>{n.forEach(a=>a())}}function Vt(t,e){return e.outsideClick?t.listen("document","click",i=>{e.target&&e.target.contains(i.target)||e.targets&&e.targets.some(o=>o.contains(i.target))||e.hide&&e.hide()}):Function.prototype}function Pt(t,e){return e.outsideEsc?t.listen("document","keyup.esc",i=>{e.target&&e.target.contains(i.target)||e.targets&&e.targets.some(o=>o.contains(i.target))||e.hide&&e.hide()}):Function.prototype}var u=typeof window<"u"&&window||{},Ke=u.document,Qe=u.location,Je=u.gc?()=>u.gc():()=>null,ti=u.performance?u.performance:null,ei=u.Event,ii=u.MouseEvent,oi=u.KeyboardEvent,ni=u.EventTarget,si=u.History,ri=u.Location,ai=u.EventListener;var x;function $t(){let t=u.document.createElement("span");t.innerText="testing bs version",t.classList.add("d-none"),t.classList.add("pl-1"),u.document.head.appendChild(t);let e=u.getComputedStyle(t).paddingLeft;return e&&parseFloat(e)?(u.document.head.removeChild(t),"bs4"):(u.document.head.removeChild(t),"bs5")}function de(){return x||(x=$t()),x==="bs4"}function ue(){return x||(x=$t()),x==="bs5"}function L(){return{isBs4:de(),isBs5:ue()}}var ci=typeof console>"u"||!("warn"in console);var qt=function(t){return t.top="top",t.bottom="bottom",t.left="left",t.right="right",t.auto="auto",t.end="right",t.start="left",t["top left"]="top left",t["top right"]="top right",t["right top"]="right top",t["right bottom"]="right bottom",t["bottom right"]="bottom right",t["bottom left"]="bottom left",t["left bottom"]="left bottom",t["left top"]="left top",t["top start"]="top left",t["top end"]="top right",t["end top"]="right top",t["end bottom"]="right bottom",t["bottom end"]="bottom right",t["bottom start"]="bottom left",t["start bottom"]="start bottom",t["start top"]="left top",t}(qt||{}),G=function(t){return t.top="top",t.bottom="bottom",t.left="start",t.right="end",t.auto="auto",t.end="end",t.start="start",t["top left"]="top start",t["top right"]="top end",t["right top"]="end top",t["right bottom"]="end bottom",t["bottom right"]="bottom end",t["bottom left"]="bottom start",t["left bottom"]="start bottom",t["left top"]="start top",t["top start"]="top start",t["top end"]="top end",t["end top"]="end top",t["end bottom"]="end bottom",t["bottom end"]="bottom end",t["bottom start"]="bottom start",t["start bottom"]="start bottom",t["start top"]="start top",t}(G||{});function N(t,e){if(t.nodeType!==1)return[];let o=t.ownerDocument.defaultView?.getComputedStyle(t,null);return e?o&&o[e]:o}function it(t){if(!t)return document.documentElement;let e=null,i=t?.offsetParent,o;for(;i===e&&t.nextElementSibling&&o!==t.nextElementSibling;)o=t.nextElementSibling,i=o.offsetParent;let n=i&&i.nodeName;return!n||n==="BODY"||n==="HTML"?o?o.ownerDocument.documentElement:document.documentElement:i&&["TH","TD","TABLE"].indexOf(i.nodeName)!==-1&&N(i,"position")==="static"?it(i):i}function me(t){let{nodeName:e}=t;return e==="BODY"?!1:e==="HTML"||it(t.firstElementChild)===t}function J(t){return t.parentNode!==null?J(t.parentNode):t}function U(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;let i=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,o=i?t:e,n=i?e:t,s=document.createRange();s.setStart(o,0),s.setEnd(n,0);let r=s.commonAncestorContainer;if(t!==r&&e!==r||o.contains(n))return me(r)?r:it(r);let a=J(t);return a.host?U(a.host,e):U(t,J(e).host)}function Ut(t){if(!t||!t.parentElement)return document.documentElement;let e=t.parentElement;for(;e?.parentElement&&N(e,"transform")==="none";)e=e.parentElement;return e||document.documentElement}function Bt(t,e){let i=e==="x"?"Left":"Top",o=i==="Left"?"Right":"Bottom";return parseFloat(t[`border${i}Width`])+parseFloat(t[`border${o}Width`])}function zt(t,e,i){let o=e,n=i;return Math.max(o[`offset${t}`],o[`scroll${t}`],n[`client${t}`],n[`offset${t}`],n[`scroll${t}`],0)}function Gt(t){let e=t.body,i=t.documentElement;return{height:zt("Height",e,i),width:zt("Width",e,i)}}function V(t){return $(y({},t),{right:(t.left||0)+t.width,bottom:(t.top||0)+t.height})}function ge(t){return t!==""&&!isNaN(parseFloat(t))&&isFinite(Number(t))}function f(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function Wt(t){let e=t.getBoundingClientRect();if(!(e&&f(e.top)&&f(e.left)&&f(e.bottom)&&f(e.right)))return e;let i={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o=t.nodeName==="HTML"?Gt(t.ownerDocument):void 0,n=o?.width||t.clientWidth||f(e.right)&&f(i.left)&&e.right-i.left||0,s=o?.height||t.clientHeight||f(e.bottom)&&f(i.top)&&e.bottom-i.top||0,r=t.offsetWidth-n,a=t.offsetHeight-s;if(r||a){let c=N(t);r-=Bt(c,"x"),a-=Bt(c,"y"),i.width-=r,i.height-=a}return V(i)}function ot(t,e,i=!1){let o=e.nodeName==="HTML",n=Wt(t),s=Wt(e),r=N(e),a=parseFloat(r.borderTopWidth),c=parseFloat(r.borderLeftWidth);i&&o&&(s.top=Math.max(s.top??0,0),s.left=Math.max(s.left??0,0));let l=V({top:(n.top??0)-(s.top??0)-a,left:(n.left??0)-(s.left??0)-c,width:n.width,height:n.height});if(l.marginTop=0,l.marginLeft=0,o){let h=parseFloat(r.marginTop),p=parseFloat(r.marginLeft);f(l.top)&&(l.top-=a-h),f(l.bottom)&&(l.bottom-=a-h),f(l.left)&&(l.left-=c-p),f(l.right)&&(l.right-=c-p),l.marginTop=h,l.marginLeft=p}return l}function nt(t){return t.nodeName==="HTML"?t:t.parentNode||t.host}function Xt(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body;default:}let{overflow:e,overflowX:i,overflowY:o}=N(t);return/(auto|scroll|overlay)/.test(String(e)+String(o)+String(i))?t:Xt(nt(t))}function Yt(t,e="top"){let i=e==="top"?"scrollTop":"scrollLeft",o=t.nodeName;if(o==="BODY"||o==="HTML"){let n=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||n)[i]}return t[i]}function be(t,e=!1){let i=t.ownerDocument.documentElement,o=ot(t,i),n=Math.max(i.clientWidth,window.innerWidth||0),s=Math.max(i.clientHeight,window.innerHeight||0),r=e?0:Yt(i),a=e?0:Yt(i,"left"),c={top:r-Number(o?.top)+Number(o?.marginTop),left:a-Number(o?.left)+Number(o?.marginLeft),width:n,height:s};return V(c)}function Kt(t){let e=t.nodeName;return e==="BODY"||e==="HTML"?!1:N(t,"position")==="fixed"?!0:Kt(nt(t))}function st(t,e,i=0,o,n=!1){let s={top:0,left:0},r=n?Ut(t):U(t,e);if(o==="viewport")s=be(r,n);else{let a;o==="scrollParent"?(a=Xt(nt(e)),a.nodeName==="BODY"&&(a=t.ownerDocument.documentElement)):o==="window"?a=t.ownerDocument.documentElement:a=o;let c=ot(a,r,n);if(c&&a.nodeName==="HTML"&&!Kt(r)){let{height:l,width:h}=Gt(t.ownerDocument);f(s.top)&&f(c.top)&&f(c.marginTop)&&(s.top+=c.top-c.marginTop),f(s.top)&&(s.bottom=Number(l)+Number(c.top)),f(s.left)&&f(c.left)&&f(c.marginLeft)&&(s.left+=c.left-c.marginLeft),f(s.top)&&(s.right=Number(h)+Number(c.left))}else c&&(s=c)}return f(s.left)&&(s.left+=i),f(s.top)&&(s.top+=i),f(s.right)&&(s.right-=i),f(s.bottom)&&(s.bottom-=i),s}function ve({width:t,height:e}){return t*e}function Qt(t,e,i,o,n=["top","bottom","right","left"],s="viewport",r=0){if(t.indexOf("auto")===-1)return t;let a=st(i,o,r,s),c={top:{width:a?.width??0,height:(e?.top??0)-(a?.top??0)},right:{width:(a?.right??0)-(e?.right??0),height:a?.height??0},bottom:{width:a?.width??0,height:(a?.bottom??0)-(e?.bottom??0)},left:{width:(e.left??0)-(a?.left??0),height:a?.height??0}},l=Object.keys(c).map(d=>$(y({position:d},c[d]),{area:ve(c[d])})).sort((d,g)=>g.area-d.area),h=l.filter(({width:d,height:g})=>d>=i.clientWidth&&g>=i.clientHeight);h=h.filter(({position:d})=>n.some(g=>g===d));let p=h.length>0?h[0].position:l[0].position,m=t.split(" ")[1];return i.className=i.className.replace(/bs-tooltip-auto/g,`bs-tooltip-${L().isBs5?G[p]:p}`),p+(m?`-${m}`:"")}function we(t){return{width:t.offsets.target.width,height:t.offsets.target.height,left:Math.floor(t.offsets.target.left??0),top:Math.round(t.offsets.target.top??0),bottom:Math.round(t.offsets.target.bottom??0),right:Math.floor(t.offsets.target.right??0)}}function ye(t){let e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,i=>e[i])}function _e(t){return t==="right"?"left":t==="left"?"right":t}var Y=(t,e=0)=>t?parseFloat(t):e;function Jt(t){let i=t.ownerDocument.defaultView?.getComputedStyle(t),o=Y(i?.marginTop)+Y(i?.marginBottom),n=Y(i?.marginLeft)+Y(i?.marginRight);return{width:Number(t.offsetWidth)+n,height:Number(t.offsetHeight)+o}}function te(t,e,i){let o=i?Ut(t):U(t,e);return ot(e,o,i)}function tt(t,e,i){let o=i.split(" ")[0],n=Jt(t),s={width:n.width,height:n.height},r=["right","left"].indexOf(o)!==-1,a=r?"top":"left",c=r?"left":"top",l=r?"height":"width",h=r?"width":"height";return s[a]=(e[a]??0)+e[l]/2-n[l]/2,s[c]=o===c?(e[c]??0)-n[h]:e[ye(c)]??0,s}function ee(t,e){return!!t.modifiers[e]?.enabled}var Ce={top:["top","top start","top end"],bottom:["bottom","bottom start","bottom end"],start:["start","start top","start bottom"],end:["end","end top","end bottom"]};function Z(t,e){return L().isBs5?Ce[e].includes(t):!1}function Ee(t){return L().isBs5?Z(t,"end")?"ms-2":Z(t,"start")?"me-2":Z(t,"top")?"mb-2":Z(t,"bottom")?"mt-2":"":""}function Se(t,e){let i=t.instance.target,o=i.className,n=L().isBs5?G[t.placement]:t.placement;if(t.placementAuto&&(o=o.replace(/bs-popover-auto/g,`bs-popover-${n}`),o=o.replace(/ms-2|me-2|mb-2|mt-2/g,""),o=o.replace(/bs-tooltip-auto/g,`bs-tooltip-${n}`),o=o.replace(/\sauto/g,` ${n}`),o.indexOf("popover")!==-1&&(o=o+" "+Ee(n)),o.indexOf("popover")!==-1&&o.indexOf("popover-auto")===-1&&(o+=" popover-auto"),o.indexOf("tooltip")!==-1&&o.indexOf("tooltip-auto")===-1&&(o+=" tooltip-auto")),o=o.replace(/left|right|top|bottom|end|start/g,`${n.split(" ")[0]}`),e){e.setAttribute(i,"class",o);return}i.className=o}function Zt(t,e,i){!t||!e||Object.keys(e).forEach(o=>{let n="";if(["width","height","top","right","bottom","left"].indexOf(o)!==-1&&ge(e[o])&&(n="px"),i){i.setStyle(t,o,`${String(e[o])}${n}`);return}t.style[o]=String(e[o])+n})}function Re(t){let e=t.offsets.target,i=t.instance.target.querySelector(".arrow");if(!i)return t;let o=["left","right"].indexOf(t.placement.split(" ")[0])!==-1,n=o?"height":"width",s=o?"Top":"Left",r=s.toLowerCase(),a=o?"left":"top",c=o?"bottom":"right",l=Jt(i)[n],h=t.placement.split(" ")[1];(t.offsets.host[c]??0)-l<(e[r]??0)&&(e[r]-=(e[r]??0)-((t.offsets.host[c]??0)-l)),Number(t.offsets.host[r])+Number(l)>(e[c]??0)&&(e[r]+=Number(t.offsets.host[r])+Number(l)-Number(e[c])),e=V(e);let p=N(t.instance.target),m=parseFloat(p[`margin${s}`])||0,d=parseFloat(p[`border${s}Width`])||0,g;if(!h)g=Number(t.offsets.host[r])+Number(t.offsets.host[n]/2-l/2);else{let P=parseFloat(p.borderRadius)||0,O=Number(m+d+P);g=r===h?Number(t.offsets.host[r])+O:Number(t.offsets.host[r])+Number(t.offsets.host[n]-O)}let T=g-(e[r]??0)-m-d;return T=Math.max(Math.min(e[n]-(l+5),T),0),t.offsets.arrow={[r]:Math.round(T),[a]:""},t.instance.arrow=i,t}function xe(t){if(t.offsets.target=V(t.offsets.target),!ee(t.options,"flip"))return t.offsets.target=y(y({},t.offsets.target),tt(t.instance.target,t.offsets.host,t.placement)),t;let e=st(t.instance.target,t.instance.host,0,"viewport",!1),i=t.placement.split(" ")[0],o=t.placement.split(" ")[1]||"",n=t.offsets.host,s=t.instance.target,r=t.instance.host,a=Qt("auto",n,s,r,t.options.allowedPositions),c=[i,a];return c.forEach((l,h)=>{if(i!==l||c.length===h+1)return;i=t.placement.split(" ")[0];let p=i==="left"&&Math.floor(t.offsets.target.right??0)>Math.floor(t.offsets.host.left??0)||i==="right"&&Math.floor(t.offsets.target.left??0)<Math.floor(t.offsets.host.right??0)||i==="top"&&Math.floor(t.offsets.target.bottom??0)>Math.floor(t.offsets.host.top??0)||i==="bottom"&&Math.floor(t.offsets.target.top??0)<Math.floor(t.offsets.host.bottom??0),m=Math.floor(t.offsets.target.left??0)<Math.floor(e.left??0),d=Math.floor(t.offsets.target.right??0)>Math.floor(e.right??0),g=Math.floor(t.offsets.target.top??0)<Math.floor(e.top??0),T=Math.floor(t.offsets.target.bottom??0)>Math.floor(e.bottom??0),P=i==="left"&&m||i==="right"&&d||i==="top"&&g||i==="bottom"&&T,O=["top","bottom"].indexOf(i)!==-1,ct=O&&o==="left"&&m||O&&o==="right"&&d||!O&&o==="left"&&g||!O&&o==="right"&&T;(p||P||ct)&&((p||P)&&(i=c[h+1]),ct&&(o=_e(o)),t.placement=i+(o?` ${o}`:""),t.offsets.target=y(y({},t.offsets.target),tt(t.instance.target,t.offsets.host,t.placement)))}),t}function Oe(t,e,i,o){if(!t||!e)return;let n=te(t,e);!i.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/)&&!i.match(/^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/)&&(i="auto");let s=!!i.match(/auto/g),r=i.match(/auto\s(left|right|top|bottom|start|end)/)?i.split(" ")[1]||"auto":i,a=r.match(/^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/);a&&(r=a[1]+(a[2]?` ${a[2]}`:"")),["left right","right left","top bottom","bottom top"].indexOf(r)!==-1&&(r="auto"),r=Qt(r,n,t,e,o?o.allowedPositions:void 0);let c=tt(t,n,r);return{options:o||{modifiers:{}},instance:{target:t,host:e,arrow:void 0},offsets:{target:c,host:n,arrow:void 0},positionFixed:!1,placement:r,placementAuto:s}}function Me(t){if(!ee(t.options,"preventOverflow"))return t;let e="transform",i=t.instance.target.style,{top:o,left:n,[e]:s}=i;i.top="",i.left="",i[e]="";let r=st(t.instance.target,t.instance.host,0,t.options.modifiers.preventOverflow?.boundariesElement||"scrollParent",!1);i.top=o,i.left=n,i[e]=s;let a=["left","right","top","bottom"],c={primary(l){let h=t.offsets.target[l];return(t.offsets.target[l]??0)<(r[l]??0)&&(h=Math.max(t.offsets.target[l]??0,r[l]??0)),{[l]:h}},secondary(l){let h=l==="right",p=h?"left":"top",m=h?"width":"height",d=t.offsets.target[p];return(t.offsets.target[l]??0)>(r[l]??0)&&(d=Math.min(t.offsets.target[p]??0,(r[l]??0)-t.offsets.target[m])),{[p]:d}}};return a.forEach(l=>{let h=["left","top","start"].indexOf(l)!==-1?c.primary:c.secondary;t.offsets.target=y(y({},t.offsets.target),h(l))}),t}function Ne(t){let e=t.placement,i=e.split(" ")[0],o=e.split(" ")[1];if(o){let{host:n,target:s}=t.offsets,r=["bottom","top"].indexOf(i)!==-1,a=r?"left":"top",c=r?"width":"height",l={start:{[a]:n[a]},end:{[a]:(n[a]??0)+n[c]-s[c]}};t.offsets.target=$(y({},s),{[a]:a===o?l.start[a]:l.end[a]})}return t}var et=class{position(e,i){return this.offset(e,i)}offset(e,i){return te(i,e)}positionElements(e,i,o,n,s){let r=[xe,Ne,Me,Re],a=qt[o],c=Oe(i,e,a,s);if(c)return r.reduce((l,h)=>h(l),c)}},De=new et;function Te(t,e,i,o,n,s){let r=De.positionElements(t,e,i,o,n);if(!r)return;let a=we(r);Zt(e,{"will-change":"transform",top:"0px",left:"0px",transform:`translate3d(${a.left}px, ${a.top}px, 0px)`},s),r.instance.arrow&&Zt(r.instance.arrow,r.offsets.arrow,s),Se(r,s)}var X=(()=>{let e=class e{constructor(o,n,s){this.update$$=new lt,this.positionElements=new Map,this.isDisabled=!1,Ot(s)&&o.runOutsideAngular(()=>{this.triggerEvent$=pt(K(window,"scroll",{passive:!0}),K(window,"resize",{passive:!0}),ft(0,ht),this.update$$),this.triggerEvent$.subscribe(()=>{this.isDisabled||this.positionElements.forEach(r=>{Te(q(r.target),q(r.element),r.attachment,r.appendToBody,this.options,n.createRenderer(null,null))})})})}position(o){this.addPositionElement(o)}get event$(){return this.triggerEvent$}disable(){this.isDisabled=!0}enable(){this.isDisabled=!1}addPositionElement(o){this.positionElements.set(q(o.element),o)}calcPosition(){this.update$$.next(null)}deletePositionElement(o){this.positionElements.delete(q(o))}setOptions(o){this.options=o}};e.\u0275fac=function(n){return new(n||e)(v(A),v(B),v(gt))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function q(t){return typeof t=="string"?document.querySelector(t):t instanceof I?t.nativeElement:t??null}var D=class{constructor(e,i,o){this.nodes=e,this.viewRef=i,this.componentRef=o}},rt=class{constructor(e,i,o,n,s,r,a,c,l){this._viewContainerRef=e,this._renderer=i,this._elementRef=o,this._injector=n,this._componentFactoryResolver=s,this._ngZone=r,this._applicationRef=a,this._posService=c,this._document=l,this.onBeforeShow=new k,this.onShown=new k,this.onBeforeHide=new k,this.onHidden=new k,this._providers=[],this._isHiding=!1,this.containerDefaultSelector="body",this._listenOpts={},this._globalListener=Function.prototype}get isShown(){return this._isHiding?!1:!!this._componentRef}attach(e){return this._componentFactory=this._componentFactoryResolver.resolveComponentFactory(e),this}to(e){return this.container=e||this.container,this}position(e){return e?(this.attachment=e.attachment||this.attachment,this._elementRef=e.target||this._elementRef,this):this}provide(e){return this._providers.push(e),this}show(e={}){if(this._subscribePositioning(),this._innerComponent=void 0,!this._componentRef){this.onBeforeShow.emit(),this._contentRef=this._getContentRef(e.content,e.context,e.initialState);let i=j.create({providers:this._providers,parent:this._injector});if(!this._componentFactory)return;if(this._componentRef=this._componentFactory.create(i,this._contentRef.nodes),this._applicationRef.attachView(this._componentRef.hostView),this.instance=this._componentRef.instance,Object.assign(this._componentRef.instance,e),this.container instanceof I&&this.container.nativeElement.appendChild(this._componentRef.location.nativeElement),typeof this.container=="string"&&typeof this._document<"u"){let o=this._document.querySelector(this.container)||this._document.querySelector(this.containerDefaultSelector);if(!o)return;o.appendChild(this._componentRef.location.nativeElement)}!this.container&&this._elementRef&&this._elementRef.nativeElement.parentElement&&this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement),this._contentRef.componentRef&&(this._innerComponent=this._contentRef.componentRef.instance,this._contentRef.componentRef.changeDetectorRef.markForCheck(),this._contentRef.componentRef.changeDetectorRef.detectChanges()),this._componentRef.changeDetectorRef.markForCheck(),this._componentRef.changeDetectorRef.detectChanges(),this.onShown.emit(e.id?{id:e.id}:this._componentRef.instance)}return this._registerOutsideClick(),this._componentRef}hide(e){if(!this._componentRef)return this;this._posService.deletePositionElement(this._componentRef.location),this.onBeforeHide.emit(this._componentRef.instance);let i=this._componentRef.location.nativeElement;return i.parentNode?.removeChild(i),this._contentRef?.componentRef?.destroy(),this._viewContainerRef&&this._contentRef?.viewRef&&this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef)),this._contentRef?.viewRef?.destroy(),this._contentRef=void 0,this._componentRef=void 0,this._removeGlobalListener(),this.onHidden.emit(e?{id:e}:null),this}toggle(){if(this.isShown){this.hide();return}this.show()}dispose(){this.isShown&&this.hide(),this._unsubscribePositioning(),this._unregisterListenersFn&&this._unregisterListenersFn()}listen(e){this.triggers=e.triggers||this.triggers,this._listenOpts.outsideClick=e.outsideClick,this._listenOpts.outsideEsc=e.outsideEsc,e.target=e.target||this._elementRef?.nativeElement;let i=this._listenOpts.hide=()=>e.hide?e.hide():void this.hide(),o=this._listenOpts.show=s=>{e.show?e.show(s):this.show(s),s()},n=s=>{this.isShown?i():o(s)};return this._renderer&&(this._unregisterListenersFn=Lt(this._renderer,{target:e.target,triggers:e.triggers,show:o,hide:i,toggle:n})),this}_removeGlobalListener(){this._globalListener&&(this._globalListener(),this._globalListener=Function.prototype)}attachInline(e,i){return e&&i&&(this._inlineViewRef=e.createEmbeddedView(i)),this}_registerOutsideClick(){if(!(!this._componentRef||!this._componentRef.location)){if(this._listenOpts.outsideClick){let e=this._componentRef.location.nativeElement;setTimeout(()=>{this._renderer&&this._elementRef&&(this._globalListener=Vt(this._renderer,{targets:[e,this._elementRef.nativeElement],outsideClick:this._listenOpts.outsideClick,hide:()=>this._listenOpts.hide&&this._listenOpts.hide()}))})}if(this._listenOpts.outsideEsc&&this._renderer&&this._elementRef){let e=this._componentRef.location.nativeElement;this._globalListener=Pt(this._renderer,{targets:[e,this._elementRef.nativeElement],outsideEsc:this._listenOpts.outsideEsc,hide:()=>this._listenOpts.hide&&this._listenOpts.hide()})}}}getInnerComponent(){return this._innerComponent}_subscribePositioning(){this._zoneSubscription||!this.attachment||(this.onShown.subscribe(()=>{this._posService.position({element:this._componentRef?.location,target:this._elementRef,attachment:this.attachment,appendToBody:this.container==="body"})}),this._zoneSubscription=this._ngZone.onStable.subscribe(()=>{this._componentRef&&this._posService.calcPosition()}))}_unsubscribePositioning(){this._zoneSubscription&&(this._zoneSubscription.unsubscribe(),this._zoneSubscription=void 0)}_getContentRef(e,i,o){if(!e)return new D([]);if(e instanceof yt){if(this._viewContainerRef){let r=this._viewContainerRef.createEmbeddedView(e,i);return r.markForCheck(),new D([r.rootNodes],r)}let s=e.createEmbeddedView({});return this._applicationRef.attachView(s),new D([s.rootNodes],s)}if(typeof e=="function"){let s=this._componentFactoryResolver.resolveComponentFactory(e),r=j.create({providers:this._providers,parent:this._injector}),a=s.create(r);return Object.assign(a.instance,o),this._applicationRef.attachView(a.hostView),new D([[a.location.nativeElement]],a.hostView,a)}let n=this._renderer?[this._renderer.createText(`${e}`)]:[];return new D([n])}},ie=(()=>{let e=class e{constructor(o,n,s,r,a,c){this._componentFactoryResolver=o,this._ngZone=n,this._injector=s,this._posService=r,this._applicationRef=a,this._document=c}createLoader(o,n,s){return new rt(n,s,o,this._injector,this._componentFactoryResolver,this._ngZone,this._applicationRef,this._posService,this._document)}};e.\u0275fac=function(n){return new(n||e)(v(Ct),v(A),v(j),v(X),v(xt),v(z))},e.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var oe=(()=>{let e=class e{static forRoot(){return{ngModule:e,providers:[ie,X]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=E({type:e}),e.\u0275inj=C({imports:[W]});let t=e;return t})();var ne=(()=>{let e=class e{constructor(){this.title="cliente-servicio"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=F({type:e,selectors:[["app-root"]],decls:7,vars:0,consts:[[1,"row"],[1,"col-md-4"],[1,"col-md-8"]],template:function(n,s){n&1&&(_(0,"br"),w(1,"div",0)(2,"div",1),_(3,"app-sidebar"),b(),w(4,"div",2),_(5,"router-outlet"),b()(),_(6,"br"))},dependencies:[At,kt]});let t=e;return t})();var Fe="@",je=(()=>{let e=class e{constructor(o,n,s,r,a){this.doc=o,this.delegate=n,this.zone=s,this.animationType=r,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=ut(_t,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-VGNNYDIO.js")).catch(n=>{throw new dt(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:s})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let r=new s(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(o,n){let s=this.delegate.createRenderer(o,n);if(s.\u0275type===0)return s;typeof s.throwOnSyntheticProps=="boolean"&&(s.throwOnSyntheticProps=!1);let r=new at(s);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let c=a.createRenderer(o,n);r.use(c)}).catch(a=>{r.use(s)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){wt()},e.\u0275prov=M({token:e,factory:e.\u0275fac});let t=e;return t})(),at=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,o,n){this.delegate.insertBefore(e,i,o,n)}removeChild(e,i,o){this.delegate.removeChild(e,i,o)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,o,n){this.delegate.setAttribute(e,i,o,n)}removeAttribute(e,i,o){this.delegate.removeAttribute(e,i,o)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,o,n){this.delegate.setStyle(e,i,o,n)}removeStyle(e,i,o){this.delegate.removeStyle(e,i,o)}setProperty(e,i,o){this.shouldReplay(i)&&this.replay.push(n=>n.setProperty(e,i,o)),this.delegate.setProperty(e,i,o)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,o){return this.shouldReplay(i)&&this.replay.push(n=>n.listen(e,i,o)),this.delegate.listen(e,i,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(Fe)}};function se(t="animations"){return Et("NgAsyncAnimations"),mt([{provide:B,useFactory:(e,i,o)=>new je(e,i,o,t),deps:[z,Nt,A]},{provide:bt,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=E({type:e,bootstrap:[ne]}),e.\u0275inj=C({providers:[se()],imports:[Tt,It,Ht,Mt,oe.forRoot()]});let t=e;return t})();Dt().bootstrapModule(re).catch(t=>console.error(t));
