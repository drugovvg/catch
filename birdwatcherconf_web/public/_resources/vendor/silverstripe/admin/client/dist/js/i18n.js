!function(){"use strict";!function(){let t=new class{constructor(){this.defaultLocale="en_US",this.currentLocale=null,this.autoDetectLocale=!0,this.lang={}}setLocale(t){this.currentLocale=t,this.autoDetectLocale=!1}getLocale(){return null!==this.currentLocale?this.currentLocale:this.defaultLocale}_t(t,e,n,r){const a=e||"";if(!this.lang)return a;const o=this.getLocale(),l=[o,o.replace(/_[\w]+/i,""),this.defaultLocale,this.defaultLocale.replace(/_[\w]+/i,"")];for(let e=0;e<l.length;e++){const n=l[e];if(this.lang[n]&&this.lang[n][t])return this.lang[n][t]}return a}addDictionary(t,e){void 0===this.lang[t]&&(this.lang[t]={});for(let n in e)this.lang[t][n]=e[n];this.autoDetectLocale&&(this.currentLocale=this.detectLocale())}getDictionary(t){return this.lang[t]}stripStr(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}stripStrML(t){const e=t.split("\n");for(let t=0;t<e.length;t+=1)e[t]=stripStr(e[t]);return stripStr(e.join(" "))}sprintf(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(0===n.length)return t;const a=new RegExp("(.?)(%s)","g");let o=0;return t.replace(a,(function(t,e,r,a,l){return"%"===e?t:e+n[o++]}))}inject(t,e){const n=new RegExp("{([A-Za-z0-9_]*)}","g");return t.replace(n,(function(t,n,r,a){return e[n]?e[n]:t}))}detectLocale(){let t=document.documentElement.getAttribute("lang");if(t||(t=document.body.getAttribute("lang")),!t){const e=document.getElementsByTagName("meta");for(let n=0;n<e.length;n++)e[n].attributes["http-equiv"]&&"content-language"===e[n].attributes["http-equiv"].nodeValue.toLowerCase()&&(t=e[n].attributes.content.nodeValue)}if(t||(t=this.defaultLocale),2===t.length)for(let e in this.lang)if(e.substr(0,2).toLowerCase()===t.toLowerCase())return e;const e=t.match(/([^-|_]*)[-|_](.*)/);return e?e[1].toLowerCase()+"_"+e[2].toUpperCase():null}addEvent(t,e,n,r){return t.addEventListener?(t.addEventListener(e,n,r),!0):t.attachEvent?t.attachEvent("on"+e,n):void console.log("Handler could not be attached")}};window.ss=void 0!==window.ss?window.ss:{},window.ss.i18n=window.i18n=t}()}();