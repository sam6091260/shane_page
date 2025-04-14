import{r as j,j as O}from"./index-e7553912.js";import{_ as ge}from"./index-fff717bf.js";import{A as st}from"./aos-a7a18523.js";/* empty css            */function Be(e,t){return function(){return e.apply(t,arguments)}}const{toString:ot}=Object.prototype,{getPrototypeOf:de}=Object,X=(e=>t=>{const n=ot.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:U}=Array,I=G("undefined");function it(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const je=N("ArrayBuffer");function at(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&je(e.buffer),t}const ct=G("string"),x=G("function"),Ue=G("number"),Z=e=>e!==null&&typeof e=="object",lt=e=>e===!0||e===!1,z=e=>{if(X(e)!=="object")return!1;const t=de(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ut=N("Date"),ft=N("File"),dt=N("Blob"),pt=N("FileList"),ht=e=>Z(e)&&x(e.pipe),mt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||x(e.append)&&((t=X(e))==="formdata"||t==="object"&&x(e.toString)&&e.toString()==="[object FormData]"))},yt=N("URLSearchParams"),[bt,wt,gt,Et]=["ReadableStream","Request","Response","Headers"].map(N),Rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function H(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ke(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const D=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),qe=e=>!I(e)&&e!==D;function ie(){const{caseless:e}=qe(this)&&this||{},t={},n=(r,s)=>{const o=e&&ke(t,s)||s;z(t[o])&&z(r)?t[o]=ie(t[o],r):z(r)?t[o]=ie({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&H(arguments[r],n);return t}const St=(e,t,n,{allOwnKeys:r}={})=>(H(t,(s,o)=>{n&&x(s)?e[o]=Be(s,n):e[o]=s},{allOwnKeys:r}),e),Ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Tt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&de(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ct=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Ue(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Nt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&de(Uint8Array)),Pt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ft=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Lt=N("HTMLFormElement"),_t=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ee=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Dt=N("RegExp"),Ie=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};H(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Bt=e=>{Ie(e,(t,n)=>{if(x(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(x(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},Ut=()=>{},kt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",Re="0123456789",He={DIGIT:Re,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+Re},qt=(e=16,t=He.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function It(e){return!!(e&&x(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ht=e=>{const t=new Array(10),n=(r,s)=>{if(Z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return H(r,(i,c)=>{const f=n(i,s+1);!I(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Mt=N("AsyncFunction"),zt=e=>e&&(Z(e)||x(e))&&x(e.then)&&x(e.catch),Me=((e,t)=>e?setImmediate:t?((n,r)=>(D.addEventListener("message",({source:s,data:o})=>{s===D&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),D.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",x(D.postMessage)),$t=typeof queueMicrotask<"u"?queueMicrotask.bind(D):typeof process<"u"&&process.nextTick||Me,a={isArray:U,isArrayBuffer:je,isBuffer:it,isFormData:mt,isArrayBufferView:at,isString:ct,isNumber:Ue,isBoolean:lt,isObject:Z,isPlainObject:z,isReadableStream:bt,isRequest:wt,isResponse:gt,isHeaders:Et,isUndefined:I,isDate:ut,isFile:ft,isBlob:dt,isRegExp:Dt,isFunction:x,isStream:ht,isURLSearchParams:yt,isTypedArray:Nt,isFileList:pt,forEach:H,merge:ie,extend:St,trim:Rt,stripBOM:Ot,inherits:Tt,toFlatObject:At,kindOf:X,kindOfTest:N,endsWith:xt,toArray:Ct,forEachEntry:Pt,matchAll:Ft,isHTMLForm:Lt,hasOwnProperty:Ee,hasOwnProp:Ee,reduceDescriptors:Ie,freezeMethods:Bt,toObjectSet:jt,toCamelCase:_t,noop:Ut,toFiniteNumber:kt,findKey:ke,global:D,isContextDefined:qe,ALPHABET:He,generateString:qt,isSpecCompliantForm:It,toJSONObject:Ht,isAsyncFn:Mt,isThenable:zt,setImmediate:Me,asap:$t};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const ze=m.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{$e[e]={value:e}});Object.defineProperties(m,$e);Object.defineProperty(ze,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(ze);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Jt=null;function ae(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Se(e,t,n){return e?e.concat(t).map(function(s,o){return s=Je(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function vt(e){return a.isArray(e)&&!e.some(ae)}const Vt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,h){let w=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&vt(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(w=a.toArray(p)))return y=Je(y),w.forEach(function(S,F){!(a.isUndefined(S)||S===null)&&t.append(i===!0?Se([y],F,o):i===null?y:y+"[]",l(S))}),!1}return ae(p)?!0:(t.append(Se(h,y,o),l(p)),!1)}const d=[],b=Object.assign(Vt,{defaultVisitor:u,convertValue:l,isVisitable:ae});function E(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(w,R){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(R)?R.trim():R,y,b))===!0&&E(w,y?y.concat(R):[R])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pe(e,t){this._pairs=[],e&&Q(e,this,t)}const ve=pe.prototype;ve.append=function(t,n){this._pairs.push([t,n])};ve.toString=function(t){const n=t?function(r){return t.call(this,r,Oe)}:Oe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Wt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,n){if(!t)return e;const r=n&&n.encode||Wt;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new pe(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Kt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Te=Kt,We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Xt=typeof URLSearchParams<"u"?URLSearchParams:pe,Gt=typeof FormData<"u"?FormData:null,Zt=typeof Blob<"u"?Blob:null,Qt={isBrowser:!0,classes:{URLSearchParams:Xt,FormData:Gt,Blob:Zt},protocols:["http","https","file","blob","url","data"]},he=typeof window<"u"&&typeof document<"u",ce=typeof navigator=="object"&&navigator||void 0,Yt=he&&(!ce||["ReactNative","NativeScript","NS"].indexOf(ce.product)<0),en=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),tn=he&&window.location.href||"http://localhost",nn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:he,hasStandardBrowserEnv:Yt,hasStandardBrowserWebWorkerEnv:en,navigator:ce,origin:tn},Symbol.toStringTag,{value:"Module"})),T={...nn,...Qt};function rn(e,t){return Q(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function sn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function on(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ke(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=on(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(sn(r),s,n,0)}),n}return null}function an(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const me={transitional:We,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Q(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),an(t)):t}],transformResponse:[function(t){const n=this.transitional||me.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{me.headers[e]={}});const ye=me,cn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ln=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&cn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function un(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const fn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function re(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function dn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class Y{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=q(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=$(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!fn(t))i(ln(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=q(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return un(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=q(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||re(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(r,i);c&&(!n||re(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||re(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=$(s),delete n[o];return}const c=t?dn(o):String(o).trim();c!==o&&delete n[o],n[c]=$(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);r[c]||(pn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}Y.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Y.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Y);const C=Y;function se(e,t){const n=this||ye,r=t||n,s=C.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Xe(e){return!!(e&&e.__CANCEL__)}function k(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(k,m,{__CANCEL__:!0});function Ge(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,b=0;for(;d!==s;)b+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(b*1e3/E):void 0}}function yn(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-n;d>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-d)))},()=>s&&i(s)]}const V=(e,t,n=3)=>{let r=0;const s=mn(50,250);return yn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},n)},xe=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ce=e=>(...t)=>a.asap(()=>e(...t)),bn=T.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,T.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(T.origin),T.navigator&&/(msie|trident)/i.test(T.navigator.userAgent)):()=>!0,wn=T.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function En(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ze(e,t){return e&&!gn(t)?En(e,t):t}const Ne=e=>e instanceof C?{...e}:e;function B(e,t){t=t||{};const n={};function r(l,u,d,b){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:b},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d,b){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,d,b)}else return r(l,u,d,b)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,d){if(d in t)return r(l,u);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,d)=>s(Ne(l),Ne(u),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,b=d(e[u],t[u],u);a.isUndefined(b)&&d!==c||(n[u]=b)}),n}const Qe=e=>{const t=B({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=C.from(i),t.url=Ve(Ze(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&bn(t.url))){const l=s&&o&&wn.read(o);l&&i.set(s,l)}return t},Rn=typeof XMLHttpRequest<"u",Sn=Rn&&function(e){return new Promise(function(n,r){const s=Qe(e);let o=s.data;const i=C.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,b,E,p;function y(){E&&E(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function w(){if(!h)return;const S=C.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),A={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:S,config:e,request:h};Ge(function(_){n(_),y()},function(_){r(_),y()},A),h=null}"onloadend"in h?h.onloadend=w:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(w)},h.onabort=function(){h&&(r(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let F=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const A=s.transitional||We;s.timeoutErrorMessage&&(F=s.timeoutErrorMessage),r(new m(F,A.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(F,A){h.setRequestHeader(A,F)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,p]=V(l,!0),h.addEventListener("progress",b)),f&&h.upload&&([d,E]=V(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=S=>{h&&(r(!S||S.type?new k(null,e,h):S),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=hn(s.url);if(R&&T.protocols.indexOf(R)===-1){r(new m("Unsupported protocol "+R+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},On=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof m?u:new k(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=r;return f.unsubscribe=()=>a.asap(c),f}},Tn=On,An=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},xn=async function*(e,t){for await(const n of Cn(e))yield*An(n,t)},Cn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Pe=(e,t,n,r)=>{const s=xn(e,t);let o=0,i,c=f=>{i||(i=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(n){let b=o+=d;n(b)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},ee=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ye=ee&&typeof ReadableStream=="function",Nn=ee&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),et=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Pn=Ye&&et(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Fe=64*1024,le=Ye&&et(()=>a.isReadableStream(new Response("").body)),W={stream:le&&(e=>e.body)};ee&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!W[t]&&(W[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,r)})})})(new Response);const Fn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(T.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Nn(e)).byteLength},Ln=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Fn(t)},_n=ee&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:b}=Qe(e);l=l?(l+"").toLowerCase():"text";let E=Tn([s,o&&o.toAbortSignal()],i),p;const y=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let h;try{if(f&&Pn&&n!=="get"&&n!=="head"&&(h=await Ln(u,r))!==0){let A=new Request(t,{method:"POST",body:r,duplex:"half"}),L;if(a.isFormData(r)&&(L=A.headers.get("content-type"))&&u.setContentType(L),A.body){const[_,M]=xe(h,V(Ce(f)));r=Pe(A.body,Fe,_,M)}}a.isString(d)||(d=d?"include":"omit");const w="credentials"in Request.prototype;p=new Request(t,{...b,signal:E,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:w?d:void 0});let R=await fetch(p);const S=le&&(l==="stream"||l==="response");if(le&&(c||S&&y)){const A={};["status","statusText","headers"].forEach(we=>{A[we]=R[we]});const L=a.toFiniteNumber(R.headers.get("content-length")),[_,M]=c&&xe(L,V(Ce(c),!0))||[];R=new Response(Pe(R.body,Fe,_,()=>{M&&M(),y&&y()}),A)}l=l||"text";let F=await W[a.findKey(W,l)||"text"](R,e);return!S&&y&&y(),await new Promise((A,L)=>{Ge(A,L,{data:F,headers:C.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:p})})}catch(w){throw y&&y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:w.cause||w}):m.from(w,w&&w.code,e,p)}}),ue={http:Jt,xhr:Sn,fetch:_n};a.forEach(ue,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Le=e=>`- ${e}`,Dn=e=>a.isFunction(e)||e===null||e===!1,tt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Dn(n)&&(r=ue[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Le).join(`
`):" "+Le(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ue};function oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function _e(e){return oe(e),e.headers=C.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tt.getAdapter(e.adapter||ye.adapter)(e).then(function(r){return oe(e),r.data=se.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Xe(r)||(oe(e),r&&r.response&&(r.response.data=se.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const nt="1.7.9",te={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{te[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const De={};te.transitional=function(t,n,r){function s(o,i){return"[Axios v"+nt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!De[i]&&(De[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};te.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Bn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const J={assertOptions:Bn,validators:te},P=J.validators;class K{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&J.assertOptions(r,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:J.assertOptions(s,{encode:P.function,serialize:P.function},!0)),J.assertOptions(n,{baseUrl:P.spelling("baseURL"),withXsrfToken:P.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=C.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,d=0,b;if(!f){const p=[_e.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),b=p.length,u=Promise.resolve(n);d<b;)u=u.then(p[d++],p[d++]);return u}b=c.length;let E=n;for(d=0;d<b;){const p=c[d++],y=c[d++];try{E=p(E)}catch(h){y.call(this,h);break}}try{u=_e.call(this,E)}catch(p){return Promise.reject(p)}for(d=0,b=l.length;d<b;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=B(this.defaults,t);const n=Ze(t.baseURL,t.url);return Ve(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){K.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(B(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}K.prototype[t]=n(),K.prototype[t+"Form"]=n(!0)});const v=K;class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new k(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}const jn=be;function Un(e){return function(n){return e.apply(null,n)}}function kn(e){return a.isObject(e)&&e.isAxiosError===!0}const fe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(fe).forEach(([e,t])=>{fe[t]=e});const qn=fe;function rt(e){const t=new v(e),n=Be(v.prototype.request,t);return a.extend(n,v.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return rt(B(e,s))},n}const g=rt(ye);g.Axios=v;g.CanceledError=k;g.CancelToken=jn;g.isCancel=Xe;g.VERSION=nt;g.toFormData=Q;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=Un;g.isAxiosError=kn;g.mergeConfig=B;g.AxiosHeaders=C;g.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=tt.getAdapter;g.HttpStatusCode=qn;g.default=g;const In=g;/**
 * @license lucide-react v0.302.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.302.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),zn=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:c="",children:f,...l},u)=>j.createElement("svg",{ref:u,...Hn,width:s,height:s,stroke:r,strokeWidth:i?Number(o)*24/Number(s):o,className:["lucide",`lucide-${Mn(e)}`,c].join(" "),...l},[...t.map(([d,b])=>j.createElement(d,b)),...Array.isArray(f)?f:[f]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.302.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=zn("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),Jn=()=>O.jsx("div",{className:"loading-spinner",style:{width:"100%",height:"100%"},children:O.jsx($n,{size:80,color:"white"})});function Xn({formRef:e}){const[t,n]=j.useState(!1),[r,s]=j.useState({name:"",email:"",message:""}),o=c=>{s({...r,[c.target.name]:c.target.value})},i=async c=>{c.preventDefault(),n(!0);try{const f=await In.post("https://polar-thicket-73181-a753805e876d.herokuapp.com/send-email",{...r}),{data:l}=f;console.log("Email sent successfully"),ge.success(l.message),s({name:"",email:"",message:""})}catch(f){const{response:{data:l}}=f;ge.error(l.message)}finally{n(!1)}};return j.useEffect(()=>{st.init()},[]),O.jsx(O.Fragment,{children:O.jsxs("form",{ref:e,className:"form",onSubmit:i,"data-aos":"zoom-in","data-aos-delay":200,children:[t?O.jsx("div",{style:{height:"200px"},children:O.jsx(Jn,{})}):O.jsxs(O.Fragment,{children:[O.jsx("label",{htmlFor:"name",children:"name"}),O.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:o}),O.jsx("label",{htmlFor:"email",children:"email"}),O.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:o}),O.jsx("label",{htmlFor:"message",children:"message"}),O.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:o})]}),O.jsx("button",{type:"submit",children:"submit"})]})})}export{Xn as default};
