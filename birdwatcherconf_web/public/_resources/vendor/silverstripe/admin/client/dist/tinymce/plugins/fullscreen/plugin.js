!function(){"use strict";const e=e=>{let t=e;return{get:()=>t,set:e=>{t=e}}};var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const n=e=>({isFullscreen:()=>null!==e.get()}),o=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=r=e,o=(s=String).prototype,o.isPrototypeOf(n)||(null===(i=r.constructor)||void 0===i?void 0:i.name)===s.name)?"string":t;var n,o;var r,s,i})(t)===e,r=e=>t=>typeof t===e,s=e=>t=>e===t,i=o("string"),l=o("array"),a=s(null),c=r("boolean"),u=s(void 0),m=e=>!(e=>null==e)(e),d=r("function"),h=r("number"),f=()=>{},g=e=>()=>e;function p(e,...t){return(...n)=>{const o=t.concat(n);return e.apply(null,o)}}const v=g(!1),w=g(!0);class y{constructor(e,t){this.tag=e,this.value=t}static some(e){return new y(!0,e)}static none(){return y.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?y.some(e(this.value)):y.none()}bind(e){return this.tag?e(this.value):y.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:y.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return m(e)?y.some(e):y.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}y.singletonNone=new y(!1);const b=t=>{const n=e(y.none()),o=()=>n.get().each(t);return{clear:()=>{o(),n.set(y.none())},isSet:()=>n.get().isSome(),get:()=>n.get(),set:e=>{o(),n.set(y.some(e))}}},S=()=>b((e=>e.unbind())),x=Array.prototype.push,E=(e,t)=>{const n=e.length,o=new Array(n);for(let r=0;r<n;r++){const n=e[r];o[r]=t(n,r)}return o},F=(e,t)=>{for(let n=0,o=e.length;n<o;n++){t(e[n],n)}},T=(e,t)=>{const n=[];for(let o=0,r=e.length;o<r;o++){const r=e[o];t(r,o)&&n.push(r)}return n},k=(e,t)=>((e,t,n)=>{for(let o=0,r=e.length;o<r;o++){const r=e[o];if(t(r,o))return y.some(r);if(n(r,o))break}return y.none()})(e,t,v),O=(e,t)=>(e=>{const t=[];for(let n=0,o=e.length;n<o;++n){if(!l(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);x.apply(t,e[n])}return t})(E(e,t)),C=e=>((e,t)=>t>=0&&t<e.length?y.some(e[t]):y.none())(e,0),D=Object.keys,A=(e,t,n=0,o)=>{const r=e.indexOf(t,n);return-1!==r&&(!!u(o)||r+t.length<=o)},R=e=>void 0!==e.style&&d(e.style.getPropertyValue),N=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},L={fromHtml:(e,t)=>{const n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||n.childNodes.length>1){const t="HTML does not have a single root node";throw console.error(t,e),new Error(t)}return N(n.childNodes[0])},fromTag:(e,t)=>{const n=(t||document).createElement(e);return N(n)},fromText:(e,t)=>{const n=(t||document).createTextNode(e);return N(n)},fromDom:N,fromPoint:(e,t,n)=>y.from(e.dom.elementFromPoint(t,n)).map(N)};"undefined"!=typeof window?window:Function("return this;")();const M=e=>t=>(e=>e.dom.nodeType)(t)===e,P=M(1),H=M(3),W=M(9),q=M(11),I=(e,t)=>{const n=e.dom;if(1!==n.nodeType)return!1;{const e=n;if(void 0!==e.matches)return e.matches(t);if(void 0!==e.msMatchesSelector)return e.msMatchesSelector(t);if(void 0!==e.webkitMatchesSelector)return e.webkitMatchesSelector(t);if(void 0!==e.mozMatchesSelector)return e.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")}},B=e=>L.fromDom(e.dom.ownerDocument),V=e=>(e=>y.from(e.dom.parentNode).map(L.fromDom))(e).map(_).map((t=>T(t,(t=>{return n=t,!(e.dom===n.dom);var n})))).getOr([]),_=e=>E(e.dom.childNodes,L.fromDom),j=d(Element.prototype.attachShadow)&&d(Node.prototype.getRootNode),z=g(j),$=j?e=>L.fromDom(e.dom.getRootNode()):e=>W(e)?e:B(e),U=e=>{const t=$(e);return q(n=t)&&m(n.dom.host)?y.some(t):y.none();var n},K=e=>L.fromDom(e.dom.host),X=e=>m(e.dom.shadowRoot),Y=e=>{const t=H(e)?e.dom.parentNode:e.dom;if(null==t||null===t.ownerDocument)return!1;const n=t.ownerDocument;return U(L.fromDom(t)).fold((()=>n.body.contains(t)),(o=Y,r=K,e=>o(r(e))));var o,r},G=(e,t,n)=>{((e,t,n)=>{if(!(i(n)||c(n)||h(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")})(e.dom,t,n)},J=(e,t)=>{const n=e.dom.getAttribute(t);return null===n?void 0:n},Q=(e,t)=>{e.dom.removeAttribute(t)},Z=(e,t)=>{const n=e.dom;((e,t)=>{const n=D(e);for(let o=0,r=n.length;o<r;o++){const r=n[o];t(e[r],r)}})(t,((e,t)=>{((e,t,n)=>{if(!i(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);R(e)&&e.style.setProperty(t,n)})(n,t,e)}))},ee=(e,t)=>R(e)?e.style.getPropertyValue(t):"",te=e=>{const t=L.fromDom((e=>{if(z()&&m(e.target)){const t=L.fromDom(e.target);if(P(t)&&X(t)&&e.composed&&e.composedPath){const t=e.composedPath();if(t)return C(t)}}return y.from(e.target)})(e).getOr(e.target)),n=()=>e.stopPropagation(),o=()=>e.preventDefault(),r=(s=o,i=n,(...e)=>s(i.apply(null,e)));var s,i;return((e,t,n,o,r,s,i)=>({target:e,x:t,y:n,stop:o,prevent:r,kill:s,raw:i}))(t,e.clientX,e.clientY,n,o,r,e)},ne=(e,t,n,o,r)=>{const s=((e,t)=>n=>{e(n)&&t(te(n))})(n,o);return e.dom.addEventListener(t,s,r),{unbind:p(oe,e,t,s,r)}},oe=(e,t,n,o)=>{e.dom.removeEventListener(t,n,o)},re=w,se=(e,t,n)=>((e,t,n,o)=>ne(e,t,n,o,!1))(e,t,re,n),ie=()=>le(0,0),le=(e,t)=>({major:e,minor:t}),ae={nu:le,detect:(e,t)=>{const n=String(t).toLowerCase();return 0===e.length?ie():((e,t)=>{const n=((e,t)=>{for(let n=0;n<e.length;n++){const o=e[n];if(o.test(t))return o}})(e,t);if(!n)return{major:0,minor:0};const o=e=>Number(t.replace(n,"$"+e));return le(o(1),o(2))})(e,n)},unknown:ie},ce=(e,t)=>((e,t)=>{for(let n=0;n<e.length;n++){const o=t(e[n],n);if(o.isSome())return o}return y.none()})(t.brands,(t=>{const n=t.brand.toLowerCase();return k(e,(e=>{var t;return n===(null===(t=e.brand)||void 0===t?void 0:t.toLowerCase())})).map((e=>({current:e.name,version:ae.nu(parseInt(t.version,10),0)})))})),ue=(e,t)=>{const n=String(t).toLowerCase();return k(e,(e=>e.search(n)))},me=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,de=e=>t=>A(t,e),he=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:e=>A(e,"edge/")&&A(e,"chrome")&&A(e,"safari")&&A(e,"applewebkit")},{name:"Chromium",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,me],search:e=>A(e,"chrome")&&!A(e,"chromeframe")},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:e=>A(e,"msie")||A(e,"trident")},{name:"Opera",versionRegexes:[me,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:de("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:de("firefox")},{name:"Safari",versionRegexes:[me,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:e=>(A(e,"safari")||A(e,"mobile/"))&&A(e,"applewebkit")}],fe=[{name:"Windows",search:de("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:e=>A(e,"iphone")||A(e,"ipad"),versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:de("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"macOS",search:de("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:de("linux"),versionRegexes:[]},{name:"Solaris",search:de("sunos"),versionRegexes:[]},{name:"FreeBSD",search:de("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:de("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}],ge={browsers:g(he),oses:g(fe)},pe="Edge",ve="Chromium",we="Opera",ye="Firefox",be="Safari",Se=e=>{const t=e.current,n=e.version,o=e=>()=>t===e;return{current:t,version:n,isEdge:o(pe),isChromium:o(ve),isIE:o("IE"),isOpera:o(we),isFirefox:o(ye),isSafari:o(be)}},xe={unknown:()=>Se({current:void 0,version:ae.unknown()}),nu:Se,edge:g(pe),chromium:g(ve),ie:g("IE"),opera:g(we),firefox:g(ye),safari:g(be)},Ee="Windows",Fe="Android",Te="Linux",ke="macOS",Oe="Solaris",Ce="FreeBSD",De="ChromeOS",Ae=e=>{const t=e.current,n=e.version,o=e=>()=>t===e;return{current:t,version:n,isWindows:o(Ee),isiOS:o("iOS"),isAndroid:o(Fe),isMacOS:o(ke),isLinux:o(Te),isSolaris:o(Oe),isFreeBSD:o(Ce),isChromeOS:o(De)}},Re={unknown:()=>Ae({current:void 0,version:ae.unknown()}),nu:Ae,windows:g(Ee),ios:g("iOS"),android:g(Fe),linux:g(Te),macos:g(ke),solaris:g(Oe),freebsd:g(Ce),chromeos:g(De)},Ne=(e,t,n)=>{const o=ge.browsers(),r=ge.oses(),s=t.bind((e=>ce(o,e))).orThunk((()=>((e,t)=>ue(e,t).map((e=>{const n=ae.detect(e.versionRegexes,t);return{current:e.name,version:n}})))(o,e))).fold(xe.unknown,xe.nu),i=((e,t)=>ue(e,t).map((e=>{const n=ae.detect(e.versionRegexes,t);return{current:e.name,version:n}})))(r,e).fold(Re.unknown,Re.nu),l=((e,t,n,o)=>{const r=e.isiOS()&&!0===/ipad/i.test(n),s=e.isiOS()&&!r,i=e.isiOS()||e.isAndroid(),l=i||o("(pointer:coarse)"),a=r||!s&&i&&o("(min-device-width:768px)"),c=s||i&&!a,u=t.isSafari()&&e.isiOS()&&!1===/safari/i.test(n),m=!c&&!a&&!u;return{isiPad:g(r),isiPhone:g(s),isTablet:g(a),isPhone:g(c),isTouch:g(l),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:g(u),isDesktop:g(m)}})(i,s,e,n);return{browser:s,os:i,deviceType:l}},Le=e=>window.matchMedia(e).matches;let Me=(e=>{let t,n=!1;return(...o)=>(n||(n=!0,t=e.apply(null,o)),t)})((()=>Ne(navigator.userAgent,y.from(navigator.userAgentData),Le)));const Pe=(e,t)=>({left:e,top:t,translate:(n,o)=>Pe(e+n,t+o)}),He=Pe,We=e=>{const t=void 0===e?window:e;return Me().browser.isFirefox()?y.none():y.from(t.visualViewport)},qe=(e,t,n,o)=>({x:e,y:t,width:n,height:o,right:e+n,bottom:t+o}),Ie=e=>{const t=void 0===e?window:e,n=t.document,o=(e=>{const t=void 0!==e?e.dom:document,n=t.body.scrollLeft||t.documentElement.scrollLeft,o=t.body.scrollTop||t.documentElement.scrollTop;return He(n,o)})(L.fromDom(n));return We(t).fold((()=>{const e=t.document.documentElement,n=e.clientWidth,r=e.clientHeight;return qe(o.left,o.top,n,r)}),(e=>qe(Math.max(e.pageLeft,o.left),Math.max(e.pageTop,o.top),e.width,e.height)))},Be=(e,t,n)=>We(n).map((n=>{const o=e=>t(te(e));return n.addEventListener(e,o),{unbind:()=>n.removeEventListener(e,o)}})).getOrThunk((()=>({unbind:f})));var Ve=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),_e=tinymce.util.Tools.resolve("tinymce.Env");const je=(e,t)=>{e.dispatch("FullscreenStateChanged",{state:t}),e.dispatch("ResizeEditor")},ze=($e="fullscreen_native",e=>e.options.get($e));var $e;const Ue=e=>{const t=L.fromDom(e.getElement());return U(t).map(K).getOrThunk((()=>(e=>{const t=e.dom.body;if(null==t)throw new Error("Body is not available yet");return L.fromDom(t)})(B(t))))},Ke=e=>{return e.dom===(void 0!==(t=B(e).dom).fullscreenElement?t.fullscreenElement:void 0!==t.msFullscreenElement?t.msFullscreenElement:void 0!==t.webkitFullscreenElement?t.webkitFullscreenElement:null);var t},Xe=(e,t,n)=>T(((e,t)=>{const n=d(t)?t:v;let o=e.dom;const r=[];for(;null!==o.parentNode&&void 0!==o.parentNode;){const e=o.parentNode,t=L.fromDom(e);if(r.push(t),!0===n(t))break;o=e}return r})(e,n),t),Ye=e=>((e,t)=>{const n=void 0===t?document:t.dom;return 1!==(o=n).nodeType&&9!==o.nodeType&&11!==o.nodeType||0===o.childElementCount?[]:E(n.querySelectorAll(e),L.fromDom);var o})(e),Ge=(e,t,n)=>Xe(e,(e=>I(e,t)),n),Je=(e,t)=>((e,t)=>T(V(e),t))(e,(e=>I(e,t))),Qe="data-ephox-mobile-fullscreen-style",Ze="position:absolute!important;",et="top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;height:100%!important;overflow:visible!important;",tt=_e.os.isAndroid(),nt=e=>{const t=((e,t)=>{const n=e.dom,o=window.getComputedStyle(n).getPropertyValue(t);return""!==o||Y(e)?o:ee(n,t)})(e,"background-color");return void 0!==t&&""!==t?"background-color:"+t+"!important":"background-color:rgb(255,255,255)!important;"},ot=Ve.DOM,rt=We().fold((()=>({bind:f,unbind:f})),(e=>{const t=(()=>{const e=b(f);return{...e,on:t=>e.get().each(t)}})(),n=S(),o=S(),r=((e,t)=>{let n=null;return{cancel:()=>{a(n)||(clearTimeout(n),n=null)},throttle:(...o)=>{a(n)&&(n=setTimeout((()=>{n=null,e.apply(null,o)}),t))}}})((()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,window.requestAnimationFrame((()=>{t.on((t=>Z(t,{top:e.offsetTop+"px",left:e.offsetLeft+"px",height:e.height+"px",width:e.width+"px"})))}))}),50);return{bind:e=>{t.set(e),r.throttle(),n.set(Be("resize",r.throttle)),o.set(Be("scroll",r.throttle))},unbind:()=>{t.on((()=>{n.clear(),o.clear()})),t.clear()}}})),st=(e,t)=>{const n=document.body,o=document.documentElement,r=e.getContainer(),s=L.fromDom(r),i=Ue(e),l=t.get(),a=L.fromDom(e.getBody()),c=_e.deviceType.isTouch(),u=r.style,m=e.iframeElement,d=null==m?void 0:m.style,h=e=>{e(n,"tox-fullscreen"),e(o,"tox-fullscreen"),e(r,"tox-fullscreen"),U(s).map((e=>K(e).dom)).each((t=>{e(t,"tox-fullscreen"),e(t,"tox-shadowhost")}))},f=()=>{c&&(e=>{const t=Ye("["+Qe+"]");F(t,(t=>{const n=J(t,Qe);n&&"no-styles"!==n?Z(t,e.parseStyle(n)):Q(t,"style"),Q(t,Qe)}))})(e.dom),h(ot.removeClass),rt.unbind(),y.from(t.get()).each((e=>e.fullscreenChangeHandler.unbind()))};if(l)l.fullscreenChangeHandler.unbind(),ze(e)&&Ke(i)&&(e=>{const t=e.dom;t.exitFullscreen?t.exitFullscreen():t.msExitFullscreen?t.msExitFullscreen():t.webkitCancelFullScreen&&t.webkitCancelFullScreen()})(B(i)),d.width=l.iframeWidth,d.height=l.iframeHeight,u.width=l.containerWidth,u.height=l.containerHeight,u.top=l.containerTop,u.left=l.containerLeft,f(),g=l.scrollPos,window.scrollTo(g.x,g.y),t.set(null),je(e,!1),e.off("remove",f);else{const n=se(B(i),void 0!==document.fullscreenElement?"fullscreenchange":void 0!==document.msFullscreenElement?"MSFullscreenChange":void 0!==document.webkitFullscreenElement?"webkitfullscreenchange":"fullscreenchange",(n=>{ze(e)&&(Ke(i)||null===t.get()||st(e,t))})),o={scrollPos:Ie(window),containerWidth:u.width,containerHeight:u.height,containerTop:u.top,containerLeft:u.left,iframeWidth:d.width,iframeHeight:d.height,fullscreenChangeHandler:n};c&&((e,t,n)=>{const o=t=>n=>{const o=J(n,"style"),r=void 0===o?"no-styles":o.trim();r!==t&&(G(n,Qe,r),Z(n,e.parseStyle(t)))},r=Ge(t,"*"),s=O(r,(e=>Je(e,"*:not(.tox-silver-sink)"))),i=nt(n);F(s,o("display:none!important;")),F(r,o(Ze+et+i)),o((!0===tt?"":Ze)+et+i)(t)})(e.dom,s,a),d.width=d.height="100%",u.width=u.height="",h(ot.addClass),rt.bind(s),e.on("remove",f),t.set(o),ze(e)&&(e=>{const t=e.dom;t.requestFullscreen?t.requestFullscreen():t.msRequestFullscreen?t.msRequestFullscreen():t.webkitRequestFullScreen&&t.webkitRequestFullScreen()})(i),je(e,!0)}var g},it=(e,t)=>n=>{n.setActive(null!==t.get());const o=e=>n.setActive(e.state);return e.on("FullscreenStateChanged",o),()=>e.off("FullscreenStateChanged",o)};t.add("fullscreen",(t=>{const o=e(null);return t.inline||((e=>{(0,e.options.register)("fullscreen_native",{processor:"boolean",default:!1})})(t),((e,t)=>{e.addCommand("mceFullScreen",(()=>{st(e,t)}))})(t,o),((e,t)=>{const n=()=>e.execCommand("mceFullScreen");e.ui.registry.addToggleMenuItem("fullscreen",{text:"Fullscreen",icon:"fullscreen",shortcut:"Meta+Shift+F",onAction:n,onSetup:it(e,t)}),e.ui.registry.addToggleButton("fullscreen",{tooltip:"Fullscreen",icon:"fullscreen",onAction:n,onSetup:it(e,t)})})(t,o),t.addShortcut("Meta+Shift+F","","mceFullScreen")),n(o)}))}();