"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{4833:(y,w,l)=>{l.d(w,{c:()=>c});var p=l(7205),h=l(7683),m=l(3139);const c=(d,s)=>{let e,n;const r=(u,v,f)=>{if("undefined"==typeof document)return;const _=document.elementFromPoint(u,v);_&&s(_)?_!==e&&(a(),i(_,f)):a()},i=(u,v)=>{e=u,n||(n=e);const f=e;(0,p.c)(()=>f.classList.add("ion-activated")),v()},a=(u=!1)=>{if(!e)return;const v=e;(0,p.c)(()=>v.classList.remove("ion-activated")),u&&n!==e&&e.click(),e=void 0};return(0,m.createGesture)({el:d,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>r(u.currentX,u.currentY,h.a),onMove:u=>r(u.currentX,u.currentY,h.b),onEnd:()=>{a(!0),(0,h.h)(),n=void 0}})}},8685:(y,w,l)=>{l.d(w,{g:()=>p});const p=(s,e,n,r,i)=>m(s[1],e[1],n[1],r[1],i).map(a=>h(s[0],e[0],n[0],r[0],a)),h=(s,e,n,r,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*n*i+3*n+r*i))-s*Math.pow(i-1,3),m=(s,e,n,r,i)=>d((r-=i)-3*(n-=i)+3*(e-=i)-(s-=i),3*n-6*e+3*s,3*e-3*s,s).filter(u=>u>=0&&u<=1),d=(s,e,n,r)=>{if(0===s)return((s,e,n)=>{const r=e*e-4*s*n;return r<0?[]:[(-e+Math.sqrt(r))/(2*s),(-e-Math.sqrt(r))/(2*s)]})(e,n,r);const i=(3*(n/=s)-(e/=s)*e)/3,a=(2*e*e*e-9*e*n+27*(r/=s))/27;if(0===i)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-i),-Math.sqrt(-i)];const u=Math.pow(a/2,2)+Math.pow(i/3,3);if(0===u)return[Math.pow(a/2,.5)-e/3];if(u>0)return[Math.pow(-a/2+Math.sqrt(u),1/3)-Math.pow(a/2+Math.sqrt(u),1/3)-e/3];const v=Math.sqrt(Math.pow(-i/3,3)),f=Math.acos(-a/(2*Math.sqrt(Math.pow(-i/3,3)))),_=2*Math.pow(v,1/3);return[_*Math.cos(f/3)-e/3,_*Math.cos((f+2*Math.PI)/3)-e/3,_*Math.cos((f+4*Math.PI)/3)-e/3]}},5062:(y,w,l)=>{l.d(w,{i:()=>p});const p=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},1112:(y,w,l)=>{l.r(w),l.d(w,{startFocusVisible:()=>c});const p="ion-focused",m=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=d=>{let s=[],e=!0;const n=d?d.shadowRoot:document,r=d||document.body,i=E=>{s.forEach(g=>g.classList.remove(p)),E.forEach(g=>g.classList.add(p)),s=E},a=()=>{e=!1,i([])},u=E=>{e=m.includes(E.key),e||i([])},v=E=>{if(e&&E.composedPath){const g=E.composedPath().filter(o=>!!o.classList&&o.classList.contains("ion-focusable"));i(g)}},f=()=>{n.activeElement===r&&i([])};return n.addEventListener("keydown",u),n.addEventListener("focusin",v),n.addEventListener("focusout",f),n.addEventListener("touchstart",a),n.addEventListener("mousedown",a),{destroy:()=>{n.removeEventListener("keydown",u),n.removeEventListener("focusin",v),n.removeEventListener("focusout",f),n.removeEventListener("touchstart",a),n.removeEventListener("mousedown",a)},setFocus:i}}},2983:(y,w,l)=>{l.d(w,{C:()=>d,a:()=>m,d:()=>c});var p=l(5861),h=l(3756);const m=function(){var s=(0,p.Z)(function*(e,n,r,i,a,u){var v;if(e)return e.attachViewToDom(n,r,a,i);if(!(u||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof r?null===(v=n.ownerDocument)||void 0===v?void 0:v.createElement(r):r;return i&&i.forEach(_=>f.classList.add(_)),a&&Object.assign(f,a),n.appendChild(f),yield new Promise(_=>(0,h.c)(f,_)),f});return function(n,r,i,a,u,v){return s.apply(this,arguments)}}(),c=(s,e)=>{if(e){if(s)return s.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},d=()=>{let s,e;return{attachViewToDom:function(){var i=(0,p.Z)(function*(a,u,v={},f=[]){var _,E;if(s=a,u){const o="string"==typeof u?null===(_=s.ownerDocument)||void 0===_?void 0:_.createElement(u):u;f.forEach(t=>o.classList.add(t)),Object.assign(o,v),s.appendChild(o),yield new Promise(t=>(0,h.c)(o,t))}else if(s.children.length>0){const o=null===(E=s.ownerDocument)||void 0===E?void 0:E.createElement("div");f.forEach(t=>o.classList.add(t)),o.append(...s.children),s.appendChild(o)}const g=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),s.parentNode.insertBefore(e,s),g.appendChild(s),s});return function(u,v){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(s&&e&&(e.parentNode.insertBefore(s,e),e.remove()),Promise.resolve())}}},7683:(y,w,l)=>{l.d(w,{a:()=>m,b:()=>c,c:()=>h,d:()=>s,h:()=>d});const p={getEngine(){var e;const n=window;return n.TapticEngine||(null===(e=n.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&n.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const n=this.getEngine();if(!n)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;n.impact({style:r})},notification(e){const n=this.getEngine();if(!n)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;n.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},h=()=>{p.selection()},m=()=>{p.selectionStart()},c=()=>{p.selectionChanged()},d=()=>{p.selectionEnd()},s=e=>{p.impact(e)}},6465:(y,w,l)=>{l.d(w,{I:()=>d,a:()=>i,b:()=>s,c:()=>v,d:()=>_,f:()=>a,g:()=>r,i:()=>n,p:()=>f,r:()=>E,s:()=>u});var p=l(5861),h=l(3756),m=l(7208);const d="ion-content",s=".ion-content-scroll-host",e=`${d}, ${s}`,n=g=>g&&"ION-CONTENT"===g.tagName,r=function(){var g=(0,p.Z)(function*(o){return n(o)?(yield new Promise(t=>(0,h.c)(o,t)),o.getScrollElement()):o});return function(t){return g.apply(this,arguments)}}(),i=g=>g.querySelector(s)||g.querySelector(e),a=g=>g.closest(e),u=(g,o)=>n(g)?g.scrollToTop(o):Promise.resolve(g.scrollTo({top:0,left:0,behavior:o>0?"smooth":"auto"})),v=(g,o,t,M)=>n(g)?g.scrollByPoint(o,t,M):Promise.resolve(g.scrollBy({top:t,left:o,behavior:M>0?"smooth":"auto"})),f=g=>(0,m.a)(g,d),_=g=>{if(n(g)){const t=g.scrollY;return g.scrollY=!1,t}return g.style.setProperty("overflow","hidden"),!0},E=(g,o)=>{n(g)?g.scrollY=o:g.style.removeProperty("overflow")}},7208:(y,w,l)=>{l.d(w,{a:()=>m,b:()=>h,p:()=>p});const p=c=>console.warn(`[Ionic Warning]: ${c}`),h=(c,...d)=>console.error(`[Ionic Error]: ${c}`,...d),m=(c,...d)=>console.error(`<${c.tagName.toLowerCase()}> must be used inside ${d.join(" or ")}.`)},3230:(y,w,l)=>{l.d(w,{a:()=>p,b:()=>a,c:()=>s,d:()=>u,e:()=>t,f:()=>m,g:()=>h,h:()=>g,i:()=>e,j:()=>r,k:()=>v,l:()=>n,m:()=>d,n:()=>c,o:()=>i,p:()=>f,q:()=>_,r:()=>E,s:()=>o});const p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(y,w,l)=>{l.d(w,{s:()=>p});const p=n=>{try{if(n instanceof class e{constructor(r){this.value=r}})return n.value;if(!c()||"string"!=typeof n||""===n)return n;const r=document.createDocumentFragment(),i=document.createElement("div");r.appendChild(i),i.innerHTML=n,s.forEach(f=>{const _=r.querySelectorAll(f);for(let E=_.length-1;E>=0;E--){const g=_[E];g.parentNode?g.parentNode.removeChild(g):r.removeChild(g);const o=m(g);for(let t=0;t<o.length;t++)h(o[t])}});const a=m(r);for(let f=0;f<a.length;f++)h(a[f]);const u=document.createElement("div");u.appendChild(r);const v=u.querySelector("div");return null!==v?v.innerHTML:u.innerHTML}catch(r){return console.error(r),""}},h=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let i=n.attributes.length-1;i>=0;i--){const a=n.attributes.item(i),u=a.name;if(!d.includes(u.toLowerCase())){n.removeAttribute(u);continue}const v=a.value;null!=v&&v.toLowerCase().includes("javascript:")&&n.removeAttribute(u)}const r=m(n);for(let i=0;i<r.length;i++)h(r[i])},m=n=>null!=n.children?n.children:n.childNodes,c=()=>{var n;const r=window,i=null===(n=null==r?void 0:r.Ionic)||void 0===n?void 0:n.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},d=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},1316:(y,w,l)=>{l.r(w),l.d(w,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>p,copyVisualViewport:()=>o,keyboardDidClose:()=>f,keyboardDidOpen:()=>u,keyboardDidResize:()=>v,resetKeyboardAssist:()=>e,setKeyboardClose:()=>a,setKeyboardOpen:()=>i,startKeyboardAssist:()=>n,trackViewportChanges:()=>g});const p="ionKeyboardDidShow",h="ionKeyboardDidHide";let c={},d={},s=!1;const e=()=>{c={},d={},s=!1},n=t=>{r(t),t.visualViewport&&(d=o(t.visualViewport),t.visualViewport.onresize=()=>{g(t),u()||v(t)?i(t):f(t)&&a(t)})},r=t=>{t.addEventListener("keyboardDidShow",M=>i(t,M)),t.addEventListener("keyboardDidHide",()=>a(t))},i=(t,M)=>{_(t,M),s=!0},a=t=>{E(t),s=!1},u=()=>!s&&c.width===d.width&&(c.height-d.height)*d.scale>150,v=t=>s&&!f(t),f=t=>s&&d.height===t.innerHeight,_=(t,M)=>{const D=new CustomEvent(p,{detail:{keyboardHeight:M?M.keyboardHeight:t.innerHeight-d.height}});t.dispatchEvent(D)},E=t=>{const M=new CustomEvent(h);t.dispatchEvent(M)},g=t=>{c=Object.assign({},d),d=o(t.visualViewport)},o=t=>({width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale})},7741:(y,w,l)=>{l.d(w,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(m,c,d)=>{const s=m*c/d-m+"ms",e=2*Math.PI*c/d;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(m,c,d)=>{const s=c/d,e=m*s-m+"ms",n=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(n)+"px",left:9*Math.cos(n)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(m,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(m,c,d)=>({y1:14,y2:26,style:{transform:`rotate(${360/d*c+(c<d/2?180:-180)}deg)`,"animation-delay":m*c/d-m+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(m,c,d)=>({y1:12,y2:20,style:{transform:`rotate(${360/d*c+(c<d/2?180:-180)}deg)`,"animation-delay":m*c/d-m+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(m,c,d)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":m*c/d-m+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(m,c,d)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":m*c/d-m+"ms"}})}}},6546:(y,w,l)=>{l.r(w),l.d(w,{createSwipeBackGesture:()=>d});var p=l(3756),h=l(5062),m=l(3139);l(3509);const d=(s,e,n,r,i)=>{const a=s.ownerDocument.defaultView,u=(0,h.i)(s),f=t=>u?-t.deltaX:t.deltaX;return(0,m.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>(t=>{const{startX:C}=t;return u?C>=a.innerWidth-50:C<=50})(t)&&e(),onStart:n,onMove:t=>{const C=f(t)/a.innerWidth;r(C)},onEnd:t=>{const M=f(t),C=a.innerWidth,D=M/C,A=(t=>u?-t.velocityX:t.velocityX)(t),L=A>=0&&(A>.2||M>C/2),O=(L?1-D:D)*C;let T=0;if(O>5){const P=O/Math.abs(A);T=Math.min(P,540)}i(L,D<=0?.01:(0,p.l)(0,D,.9999),T)}})}},2854:(y,w,l)=>{l.d(w,{c:()=>m,g:()=>d,h:()=>h,o:()=>e});var p=l(5861);const h=(n,r)=>null!==r.closest(n),m=(n,r)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},r):r,d=n=>{const r={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(n).forEach(i=>r[i]=!0),r},s=/^[a-z][a-z0-9+\-.]*:/,e=function(){var n=(0,p.Z)(function*(r,i,a,u){if(null!=r&&"#"!==r[0]&&!s.test(r)){const v=document.querySelector("ion-router");if(v)return null!=i&&i.preventDefault(),v.push(r,a,u)}return!1});return function(i,a,u,v){return n.apply(this,arguments)}}()},2961:(y,w,l)=>{l.d(w,{p:()=>m});var p=l(1086),h=l(5e3);let m=(()=>{class c{getCoreByBatchNumber(s){let e=s.substring(5).split("~");return e={partNumber:e[0],batch1:e[1],batch2:e[2]},(0,p.of)({idCore:1,batchNumber:e})}getIri(s){return`/api/additional_materials/${s.id}`}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275prov=h.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},6015:(y,w,l)=>{l.d(w,{e:()=>e});var p=l(2340),h=l(1086),m=l(4850),c=l(5e3),d=l(6322),s=l(512);let e=(()=>{class n{constructor(i,a){this.requestService=i,this.alertService=a}getKitById(i){return this.requestService.createGetRequest(`${p.N.moldingApi}datas_kits?page=1&idMM=${i}`).pipe((0,m.U)(a=>{if(0===a.length)throw this.alertService.simpleAlert("Erreur","Kit non trouv\xe9","Veuillez r\xe9-essayer"),new Error(`aucun kit ne correspond au num\xe9ro : ${i}`);return{id:a[0].id,aCuirAv:a[0].ACuirAv,aDrapAv:a[0].ADrapAv,createdAt:a[0].createdAt,decongel:a[0].Decongel,designationSAP:a[0].DesignationSAP,idMM:a[0].idMM,lotSAP:a[0].LotSAP,peremptionMoins18:a[0].PeremptionMoins18,referenceSAP:a[0].ReferenceSAP,status:a[0].status,tackLife:a[0].TackLife,timeOut:a[0].TimeOut,updateAt:a[0].updateAt}}))}isPerim(i,a){return new Date(i)<new Date(a)}kitIsInKits(i,a){return a.some(u=>u.idMM===i.idMM)}getIri(i){return`/api/datas_kits/${i.id}`}handleError(i,a="error"){return this.alertService.simpleAlert("Erreur Kit","Kit non conforme","Il semble y avoir un probl\xe8me avec le kit scann\xe9. V\xe9rifier le kit et essayer de nouveau."),(0,h.of)()}}return n.\u0275fac=function(i){return new(i||n)(c.LFG(d.s),c.LFG(s.c))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac}),n})()},388:(y,w,l)=>{l.d(w,{s:()=>_});class p{constructor(){this.kits=[],this.moldingDay=new Date,this.materialSupplementary=[]}getIri(){return`api/moldings/${this.id}`}}var h=l(2340),m=l(8929),c=l(1086),d=l(534),s=l(4850),e=l(5e3),n=l(6015),r=l(2644),i=l(6322),a=l(2961),u=l(512),v=l(9928),f=l(4501);let _=(()=>{class E{constructor(o,t,M,C,D,A,S){this.kitService=o,this.toolService=t,this.requestService=M,this.coreService=C,this.alertService=D,this.navCtrl=A,this.loadingService=S,this.molding$=new m.xQ,this.molding=new p,this.updateMoldings()}saveMolding(o){const t=this.checkMoldingDatas(),M=this.molding.id?this.patchMolding():this.postMolding();(0,c.of)(t,M).pipe((0,d.u)()).subscribe(C=>{o&&this.printMolding()})}loadMolding(o){this.loadingService.startLoading("Patienter pendant le chargement du moulage"),this.getMoldingById(o).subscribe(t=>{this.molding=t,this.updateMoldings(),this.loadingService.stopLoading()},t=>{console.error(t),this.loadingService.stopLoading(),this.alertService.simpleAlert("Erreur moulage","Erreur de r\xe9cup\xe9ration du moulage",`Le moulage ${o} n'existe pas`)})}checkMoldingDatas(){const o=new m.xQ;return void 0===this.molding.OT?this.alertService.presentAlertConfirm("OUTILLAGE MANQUANT","Voulez-vous continuer sans outillage ?").then(M=>{M?o.next(!0):o.error("Veuillez renseigner l'outillage de moulage"),o.complete()},M=>{console.error("Il n'y a pas eu de r\xe9ponse de l'utilisateur",M),o.error(!1),o.complete()}):0===this.molding.kits.length?(o.error(!1),o.complete()):(o.next(!0),o.complete()),o}updateDates(){this.molding.aCuireAv=null,this.molding.aDraperAv=null,this.molding.matPolym=this.molding.kits.reduce((t,M)=>t.aCuirAv>M.aCuirAv?M:t),this.molding.matDrap=this.molding.kits.reduce((t,M)=>t.aDrapAv>M.aDrapAv?M:t);const o=this.molding.kits.reduce((t,M)=>t.peremptionMoins18>M.peremptionMoins18?M:t);this.molding.aCuireAv=this.molding.matPolym.aCuirAv<o.peremptionMoins18?this.molding.matPolym.aCuirAv:o.peremptionMoins18,this.molding.aDraperAv=this.molding.matDrap.aDrapAv<o.peremptionMoins18?this.molding.matDrap.aDrapAv:o.peremptionMoins18}getMoldingById(o){return this.requestService.createGetRequest(`${h.N.moldingApi}moldings/${o}`).pipe((0,s.U)(t=>(t.kits=this.moldingServerToMoldingObject(t),t)))}getMoldings(){return this.requestService.createGetRequest(`${h.N.moldingApi}moldings`)}addKit(o){this.kitService.kitIsInKits(o,this.molding.kits)?(this.alertService.presentToast("Le kit a d\xe9j\xe0 \xe9t\xe9 scann\xe9"),console.error("kit en doublon")):(this.molding.kits.push(o),this.updateDates(),this.updateMoldings())}addNida(o){this.molding.materialSupplementary.push(o),this.updateMoldings()}addTool(o){this.molding.OT=o,this.alertService.presentToast("Outillage associ\xe9 !"),this.updateMoldings()}postMolding(){const o=this.toIri();return this.requestService.createPostRequest(`${h.N.moldingApi}moldings`,o)}patchMolding(){const o=this.toIri();return this.requestService.createPatchRequest(`${h.N.moldingApi}moldings/${o.id}`,o)}updateMoldings(){this.molding$.next(this.molding)}toIri(){const o=this.molding;return{id:o.id,kits:o.kits.map(t=>this.kitService.getIri(t)),materialSupplementary:o.materialSupplementary.map(t=>this.coreService.getIri(t)),moldingDay:o.moldingDay,outillage:o.OT?this.toolService.getIri(o.OT):null,aCuireAv:o.aCuireAv,aDraperAv:o.aDraperAv,matPolym:this.kitService.getIri(o.matPolym),matDrap:this.kitService.getIri(o.matDrap)}}moldingServerToMoldingObject(o){return o.kits.map(t=>({aCuirAv:t.ACuirAv,aDrapAv:t.ADrapAv,createdAt:t.createdAt,decongel:t.Decongel,designationSAP:t.DesignationSAP,id:t.id,idMM:t.idMM,lotSAP:t.LotSAP,peremptionMoins18:t.PeremptionMoins18,referenceSAP:t.ReferenceSAP,status:t.status,tackLife:t.TackLife,timeOut:t.TimeOut}))}printMolding(){return(0,c.of)(this.navCtrl.navigateForward(["molding/print-molding-sheet",this.molding.id]))}}return E.\u0275fac=function(o){return new(o||E)(e.LFG(n.e),e.LFG(r.o),e.LFG(i.s),e.LFG(a.p),e.LFG(u.c),e.LFG(v.SH),e.LFG(f.b))},E.\u0275prov=e.Yz7({token:E,factory:E.\u0275fac,providedIn:"root"}),E})()}}]);