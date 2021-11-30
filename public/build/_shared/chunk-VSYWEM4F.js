import{b as mr}from"/build/_shared/chunk-GUACUXYP.js";import{a as p,b as gr,f as d}from"/build/_shared/chunk-AKSB5QXU.js";var Be=p(pe=>{d();"use strict";pe.parse=_r;pe.serialize=Cr;var Rr=decodeURIComponent,xr=encodeURIComponent,jr=/; */,G=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function _r(e,r){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var t={},a=r||{},n=e.split(jr),o=a.decode||Rr,s=0;s<n.length;s++){var i=n[s],u=i.indexOf("=");if(!(u<0)){var c=i.substr(0,u).trim(),l=i.substr(++u,i.length).trim();l[0]=='"'&&(l=l.slice(1,-1)),t[c]==null&&(t[c]=kr(l,o))}}return t}function Cr(e,r,t){var a=t||{},n=a.encode||xr;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!G.test(e))throw new TypeError("argument name is invalid");var o=n(r);if(o&&!G.test(o))throw new TypeError("argument val is invalid");var s=e+"="+o;if(a.maxAge!=null){var i=a.maxAge-0;if(isNaN(i)||!isFinite(i))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(i)}if(a.domain){if(!G.test(a.domain))throw new TypeError("option domain is invalid");s+="; Domain="+a.domain}if(a.path){if(!G.test(a.path))throw new TypeError("option path is invalid");s+="; Path="+a.path}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(s+="; HttpOnly"),a.secure&&(s+="; Secure"),a.sameSite){var u=typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite;switch(u){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s}function kr(e,r){try{return r(e)}catch{return e}}});var Z=p(Q=>{d();"use strict";Object.defineProperty(Q,"__esModule",{value:!0});var qe=Be();function br(e,{secrets:r=[],...t}={}){return{get name(){return e},get isSigned(){return r.length>0},get expires(){return typeof t.maxAge!="undefined"?new Date(Date.now()+t.maxAge*1e3):t.expires},async parse(a,n){if(!a)return null;let o=qe.parse(a,{...t,...n});return e in o?o[e]===""?"":await Er(o[e],r):null},async serialize(a,n){return qe.serialize(e,a===""?"":await Dr(a,r),{...t,...n})}}}function Mr(e){return e!=null&&typeof e.name=="string"&&typeof e.isSigned=="boolean"&&typeof e.parse=="function"&&typeof e.serialize=="function"}async function Dr(e,r){let t=Or(e);return r.length>0&&(t=await sign(t,r[0])),t}async function Er(e,r){if(r.length>0){for(let t of r){let a=await unsign(e,t);if(a!==!1)return Te(a)}return null}return Te(e)}function Or(e){return btoa(JSON.stringify(e))}function Te(e){try{return JSON.parse(atob(e))}catch{return{}}}Q.createCookie=br;Q.isCookie=Mr});var re=p(ee=>{d();"use strict";Object.defineProperty(ee,"__esModule",{value:!0});function Pr(e,r={}){let t=r;typeof r=="number"&&(t={status:r});let a=new Headers(t.headers);return a.has("Content-Type")||a.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(e),{...t,headers:a})}function Br(e,r=302){let t=r;typeof r=="number"?t={status:r}:typeof t.status=="undefined"&&(t.status=302);let a=new Headers(t.headers);return a.set("Location",e),new Response("",{...t,headers:a})}ee.json=Pr;ee.redirect=Br});var Se=p(E=>{d();"use strict";Object.defineProperty(E,"__esModule",{value:!0});var ve=re();async function qr(e,r,t,a,n){let o=e.routes[r].module;if(!o.loader)return Promise.resolve(ve.json(null));let s;try{s=await o.loader({request:t,context:a,params:n})}catch(i){if(!F(i))throw i;we(i)||i.headers.set("X-Remix-Catch","yes"),s=i}if(s===void 0)throw new Error(`You defined a loader for route "${r}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);return F(s)?s:ve.json(s)}async function Tr(e,r,t,a,n){let o=e.routes[r].module;if(!o.action)throw new Error(`You made a ${t.method} request to ${t.url} but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`);let s;try{s=await o.action({request:t,context:a,params:n})}catch(i){if(!F(i))throw i;we(i)||i.headers.set("X-Remix-Catch","yes"),s=i}if(s===void 0)throw new Error(`You defined an action for route "${r}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);return F(s)?s:ve.json(s)}function Ar(e){return F(e)&&e.headers.get("X-Remix-Catch")!=null}function F(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body!="undefined"}var Lr=new Set([301,302,303,307,308]);function we(e){return Lr.has(e.status)}function Hr(e){let r=e.headers.get("Content-Type");return r&&/\bapplication\/json\b/.test(r)?e.json():e.text()}E.callRouteAction=Tr;E.extractData=Hr;E.isCatchResponse=Ar;E.isRedirectResponse=we;E.loadRouteData=qr});var Ae=p(te=>{d();"use strict";Object.defineProperty(te,"__esModule",{value:!0});function Ir(e,r){return e.map(t=>({params:t.params,pathname:t.pathname,route:r[t.route.id]}))}function Nr(e){return Object.keys(e).reduce((r,t)=>(r[t]=e[t].module,r),{})}te.createEntryMatches=Ir;te.createEntryRouteModules=Nr});var Le=p(ge=>{d();"use strict";Object.defineProperty(ge,"__esModule",{value:!0});async function Fr(e){return{message:e.message,stack:e.stack}}ge.serializeError=Fr});var Ie=p((Ut,U)=>{d();"use strict";var q={decodeValues:!0,map:!1,silent:!1};function me(e){return typeof e=="string"&&!!e.trim()}function Re(e,r){var t=e.split(";").filter(me),a=t.shift().split("="),n=a.shift(),o=a.join("=");r=r?Object.assign({},q,r):q;try{o=r.decodeValues?decodeURIComponent(o):o}catch(i){console.error("set-cookie-parser encountered an error while decoding a cookie with value '"+o+"'. Set options.decodeValues to false to disable this feature.",i)}var s={name:n,value:o};return t.forEach(function(i){var u=i.split("="),c=u.shift().trimLeft().toLowerCase(),l=u.join("=");c==="expires"?s.expires=new Date(l):c==="max-age"?s.maxAge=parseInt(l,10):c==="secure"?s.secure=!0:c==="httponly"?s.httpOnly=!0:c==="samesite"?s.sameSite=l:s[c]=l}),s}function He(e,r){if(r=r?Object.assign({},q,r):q,!e)return r.map?{}:[];if(e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var t=e.headers[Object.keys(e.headers).find(function(n){return n.toLowerCase()==="set-cookie"})];!t&&e.headers.cookie&&!r.silent&&console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=t}if(Array.isArray(e)||(e=[e]),r=r?Object.assign({},q,r):q,r.map){var a={};return e.filter(me).reduce(function(n,o){var s=Re(o,r);return n[s.name]=s,n},a)}else return e.filter(me).map(function(n){return Re(n,r)})}function Ur(e){if(Array.isArray(e))return e;if(typeof e!="string")return[];var r=[],t=0,a,n,o,s,i;function u(){for(;t<e.length&&/\s/.test(e.charAt(t));)t+=1;return t<e.length}function c(){return n=e.charAt(t),n!=="="&&n!==";"&&n!==","}for(;t<e.length;){for(a=t,i=!1;u();)if(n=e.charAt(t),n===","){for(o=t,t+=1,u(),s=t;t<e.length&&c();)t+=1;t<e.length&&e.charAt(t)==="="?(i=!0,t=s,r.push(e.substring(a,o)),a=t):t=o+1}else t+=1;(!i||t>=e.length)&&r.push(e.substring(a,e.length))}return r}U.exports=He;U.exports.parse=He;U.exports.parseString=Re;U.exports.splitCookiesString=Ur});var Ne=p(je=>{d();"use strict";Object.defineProperty(je,"__esModule",{value:!0});var zr=Ie();function Vr(e,r,t,a){return r.reduce((n,o,s)=>{let i=e.routes[o.route.id].module,u=t[s]?t[s].headers:new Headers,c=a?a.headers:new Headers,l=new Headers(i.headers?typeof i.headers=="function"?i.headers({loaderHeaders:u,parentHeaders:n,actionHeaders:c}):i.headers:void 0);return xe(c,l),xe(u,l),xe(n,l),l},new Headers)}function xe(e,r){let t=e.get("Set-Cookie");t&&zr.splitCookiesString(t).forEach(n=>{r.append("Set-Cookie",n)})}je.getDocumentHeaders=Vr});var Fe=p(_e=>{d();"use strict";Object.defineProperty(_e,"__esModule",{value:!0});var $r=mr();function Jr(e,r){let t=$r.matchRoutes(e,r);return t?t.map(a=>({params:a.params,pathname:a.pathname,route:a.route})):null}_e.matchServerRoutes=Jr});var Ue=p(_=>{d();"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.ServerMode=void 0;(function(e){e.Development="development",e.Production="production",e.Test="test"})(_.ServerMode||(_.ServerMode={}));function Wr(e){return e===_.ServerMode.Development||e===_.ServerMode.Production||e===_.ServerMode.Test}_.isServerMode=Wr});var Ve=p(Ce=>{d();"use strict";Object.defineProperty(Ce,"__esModule",{value:!0});function ze(e,r){return Object.keys(e).filter(t=>e[t].parentId===r).map(t=>({...e[t],children:ze(e,t)}))}Ce.createRoutes=ze});var Je=p(ae=>{d();"use strict";Object.defineProperty(ae,"__esModule",{value:!0});var $e=Se();async function Xr(e,r){let t=await Promise.all(r.map($e.extractData));return e.reduce((a,n,o)=>(a[n.route.id]=t[o],a),{})}async function Yr(e){return $e.extractData(e)}ae.createActionData=Yr;ae.createRouteData=Xr});var Ke=p((Xt,Ye)=>{d();"use strict";var We={},Kr=We.hasOwnProperty,Xe=(e,r)=>{for(let t in e)Kr.call(e,t)&&r(t,e[t])},Gr=(e,r)=>(r&&Xe(r,(t,a)=>{e[t]=a}),e),Qr=(e,r)=>{let t=e.length,a=-1;for(;++a<t;)r(e[a])},ne=e=>"\\u"+("0000"+e).slice(-4),z=(e,r)=>{let t=e.toString(16);return r?t:t.toUpperCase()},V=We.toString,Zr=Array.isArray,et=e=>typeof Buffer=="function"&&Buffer.isBuffer(e),rt=e=>V.call(e)=="[object Object]",tt=e=>typeof e=="string"||V.call(e)=="[object String]",at=e=>typeof e=="number"||V.call(e)=="[object Number]",nt=e=>typeof e=="function",st=e=>V.call(e)=="[object Map]",ot=e=>V.call(e)=="[object Set]",it={"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},ut=/[\\\b\f\n\r\t]/,ct=/[0-9]/,lt=/[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,dt=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,ft=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,M=(e,r)=>{let t=()=>{c=u,++r.indentLevel,u=r.indent.repeat(r.indentLevel)},a={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"	",indentLevel:0,__inline1__:!1,__inline2__:!1},n=r&&r.json;n&&(a.quotes="double",a.wrap=!0),r=Gr(a,r),r.quotes!="single"&&r.quotes!="double"&&r.quotes!="backtick"&&(r.quotes="single");let o=r.quotes=="double"?'"':r.quotes=="backtick"?"`":"'",s=r.compact,i=r.lowercaseHex,u=r.indent.repeat(r.indentLevel),c="",l=r.__inline1__,y=r.__inline2__,m=s?"":`
`,w,k=!0,le=r.numbers=="binary",O=r.numbers=="octal",A=r.numbers=="decimal",L=r.numbers=="hexadecimal";if(n&&e&&nt(e.toJSON)&&(e=e.toJSON()),!tt(e)){if(st(e))return e.size==0?"new Map()":(s||(r.__inline1__=!0,r.__inline2__=!1),"new Map("+M(Array.from(e),r)+")");if(ot(e))return e.size==0?"new Set()":"new Set("+M(Array.from(e),r)+")";if(et(e))return e.length==0?"Buffer.from([])":"Buffer.from("+M(Array.from(e),r)+")";if(Zr(e))return w=[],r.wrap=!0,l&&(r.__inline1__=!1,r.__inline2__=!0),y||t(),Qr(e,S=>{k=!1,y&&(r.__inline2__=!1),w.push((s||y?"":u)+M(S,r))}),k?"[]":y?"["+w.join(", ")+"]":"["+m+w.join(","+m)+m+(s?"":c)+"]";if(at(e)){if(n)return JSON.stringify(e);if(A)return String(e);if(L){let S=e.toString(16);return i||(S=S.toUpperCase()),"0x"+S}if(le)return"0b"+e.toString(2);if(O)return"0o"+e.toString(8)}else return rt(e)?(w=[],r.wrap=!0,t(),Xe(e,(S,x)=>{k=!1,w.push((s?"":u)+M(S,r)+":"+(s?"":" ")+M(x,r))}),k?"{}":"{"+m+w.join(","+m)+m+(s?"":c)+"}"):n?JSON.stringify(e)||"null":String(e)}let Y=r.escapeEverything?dt:ft;return w=e.replace(Y,(S,x,H,D,de,fe)=>{if(x){if(r.minimal)return x;let K=x.charCodeAt(0),P=x.charCodeAt(1);if(r.es6){let N=(K-55296)*1024+P-56320+65536,B=z(N,i);return"\\u{"+B+"}"}return ne(z(K,i))+ne(z(P,i))}if(H)return ne(z(H.charCodeAt(0),i));if(S=="\0"&&!n&&!ct.test(fe.charAt(de+1)))return"\\0";if(D)return D==o||r.escapeEverything?"\\"+D:D;if(ut.test(S))return it[S];if(r.minimal&&!lt.test(S))return S;let I=z(S.charCodeAt(0),i);return n||I.length>2?ne(I):"\\x"+("00"+I).slice(-2)}),o=="`"&&(w=w.replace(/\$\{/g,"\\${")),r.isScriptContext&&(w=w.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,n?"\\u003C!--":"\\x3C!--")),r.wrap&&(w=o+w+o),w};M.version="3.0.2";Ye.exports=M});var Ge=p(ke=>{d();"use strict";Object.defineProperty(ke,"__esModule",{value:!0});var ht=Ke();function yt(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var pt=yt(ht);function vt(e){return pt.default(e,{isScriptContext:!0})}ke.createServerHandoffString=vt});var sr=p(be=>{d();"use strict";Object.defineProperty(be,"__esModule",{value:!0});var g=Se(),Qe=Ae(),se=Le(),wt=Ne(),Ze=Fe(),$=Ue(),St=Ve(),er=Je(),oe=re(),rr=Ge();function gt(e,r){return _t(e)?"data":r?r.slice(-1)[0].route.module.default?"document":"resource":"document"}function mt(e,r,t){let a=St.createRoutes(e.routes),n=$.isServerMode(t)?t:$.ServerMode.Production;return async(o,s={})=>{let i=new URL(o.url),u=Ze.matchServerRoutes(a,i.pathname),c=gt(o,u),l;switch(c){case"data":l=await xt(o,s,e,r,u);break;case"document":l=await jt(o,s,e,r,a,n);break;case"resource":l=await Rt(o,s,e,r,u);break}return ar(o)?new Response(null,{headers:l.headers,status:l.status,statusText:l.statusText}):l}}async function Rt(e,r,t,a,n){let o=new URL(e.url);if(!n)return J(`No route matches URL "${o.pathname}"`,404);let s=n.slice(-1)[0];try{return W(e)?await g.callRouteAction(t,s.route.id,e,r,s.params):await g.loadRouteData(t,s.route.id,e,r,s.params)}catch(u){var i;throw await((i=a.formatServerError)===null||i===void 0?void 0:i.call(a,u))||u}}async function xt(e,r,t,a,n){if(!tr(e))return J(`Invalid request method "${e.method}"`,405);let o=new URL(e.url);if(!n)return J(`No route matches URL "${o.pathname}"`,404);let s;if(W(e))s=n[n.length-1],!nr(o)&&n[n.length-1].route.id.endsWith("/index")&&(s=n[n.length-2]);else{let l=o.searchParams.get("_data");if(!l)return J("Missing route id in ?_data",403);let y=n.find(m=>m.route.id===l);if(!y)return J(`Route "${l}" does not match URL "${o.pathname}"`,403);s=y}let i=ie(ue(e)),u;try{u=W(e)?await g.callRouteAction(t,s.route.id,i,r,s.params):await g.loadRouteData(t,s.route.id,i,r,s.params)}catch(l){var c;let y=await((c=a.formatServerError)===null||c===void 0?void 0:c.call(a,l))||l;u=oe.json(await se.serializeError(y),{status:500,headers:{"X-Remix-Error":"unfortunately, yes"}})}if(g.isRedirectResponse(u)){let l=new Headers(u.headers);return l.set("X-Remix-Redirect",l.get("Location")),l.delete("Location"),new Response("",{status:204,headers:l})}return t.entry.module.handleDataRequest?(i=ie(ue(e)),t.entry.module.handleDataRequest(u,{request:i,context:r,params:s.params})):u}async function jt(e,r,t,a,n,o){let s=new URL(e.url),i=tr(e)?"ok":"invalid-request",u=i==="ok"?Ze.matchServerRoutes(n,s.pathname):null;u||(i==="ok"&&(i="no-match"),u=[{params:{},pathname:"",route:n[0]}]);let c={trackBoundaries:!0,trackCatchBoundaries:!0,catchBoundaryRouteId:null,renderBoundaryRouteId:null,loaderBoundaryRouteId:null,error:void 0,catch:void 0},l="ok",y,m;if(i!=="ok"){l="caught",c.trackCatchBoundaries=!1;let f=X(u,"CatchBoundary");c.catchBoundaryRouteId=f.length>0?f[f.length-1].route.id:null,c.catch={status:i==="no-match"?404:405,statusText:i==="no-match"?"Not Found":"Method Not Allowed",data:null}}else if(W(e)){let f=u[u.length-1];!nr(s)&&f.route.id.endsWith("/index")&&(f=u[u.length-2]),m=f.route.id;try{let h=ie(ue(e));if(y=await g.callRouteAction(t,f.route.id,h,r,f.params),g.isRedirectResponse(y))return y}catch(h){var w;let j=await((w=a.formatServerError)===null||w===void 0?void 0:w.call(a,h))||h;l="error";let b=X(u,"ErrorBoundary");c.loaderBoundaryRouteId=b[b.length-1].route.id,c.error=await se.serializeError(j)}}if(y&&g.isCatchResponse(y)){l="caught";let f=X(u,"CatchBoundary");c.trackCatchBoundaries=!1,c.catchBoundaryRouteId=f[f.length-1].route.id,c.catch={status:y.status,statusText:y.statusText,data:await g.extractData(y.clone())}}let k=i!=="ok"?[]:u;switch(l){case"caught":k=X(u.slice(0,-1),"CatchBoundary");break;case"error":k=X(u.slice(0,-1),"ErrorBoundary");break}let le=k.map(f=>g.loadRouteData(t,f.route.id,ie(ue(e.clone())),r,f.params).catch(h=>h)),O=await Promise.all(le);for(let[f,h]of O.entries()){let j=u[f].route,b=t.routes[j.id].module;if(l==="error"&&(h instanceof Error||g.isRedirectResponse(h))||l==="caught"&&g.isCatchResponse(h))break;if(!(c.catch||c.error))if(b.CatchBoundary&&(c.catchBoundaryRouteId=j.id),b.ErrorBoundary&&(c.loaderBoundaryRouteId=j.id),h instanceof Error){var A;o!==$.ServerMode.Test&&console.error(`There was an error running the data loader for route ${j.id}`);let Sr=await((A=a.formatServerError)===null||A===void 0?void 0:A.call(a,h))||h;c.error=await se.serializeError(Sr),O[f]=oe.json(null,{status:500})}else{if(g.isRedirectResponse(h))return h;g.isCatchResponse(h)&&(c.trackCatchBoundaries=!1,c.catch={status:h.status,statusText:h.statusText,data:await g.extractData(h.clone())},O[f]=oe.json(null,{status:h.status}))}}let L=O,Y=[y,...L].find(f=>f&&f.status!==200),S=i==="no-match"?404:i==="invalid-request"?405:l==="error"?500:Y?Y.status:200,x=Ct(u,c),H=t.entry.module,D=wt.getDocumentHeaders(t,x,L,y),de=Qe.createEntryMatches(x,t.assets.routes),fe=await er.createRouteData(x,L),I=y&&m?{[m]:await er.createActionData(y)}:void 0,K=Qe.createEntryRouteModules(t.routes),P={matches:de,componentDidCatchEmulator:c,routeData:fe,actionData:I},N={...P,manifest:t.assets,routeModules:K,serverHandoffString:rr.createServerHandoffString(P)},B;try{B=await H.default(e,S,D,N)}catch(f){var he;let h=await((he=a.formatServerError)===null||he===void 0?void 0:he.call(a,f))||f;o!==$.ServerMode.Test&&console.error(h),S=500,c.trackBoundaries=!1,c.error=await se.serializeError(h),N.serverHandoffString=rr.createServerHandoffString(P);try{B=await H.default(e,S,D,N)}catch(j){var ye;let b=await((ye=a.formatServerError)===null||ye===void 0?void 0:ye.call(a,j))||j;o!==$.ServerMode.Test&&console.error(b),B=new Response(`Unexpected Server Error

${b.message}`,{status:500,headers:{"Content-Type":"text/plain"}})}}return B}function J(e,r=403){return oe.json({error:e},{status:r})}function W(e){let r=e.method.toLowerCase();return r==="post"||r==="put"||r==="patch"||r==="delete"}function tr(e){return e.method.toLowerCase()==="get"||ar(e)||W(e)}function ar(e){return e.method.toLowerCase()==="head"}function _t(e){return new URL(e.url).searchParams.has("_data")}function nr(e){let r=!1;for(let t of e.searchParams.getAll("index"))t||(r=!0);return r}function ie(e){let r=new URL(e.url),t=r.searchParams.getAll("index");r.searchParams.delete("index");let a=[];for(let n of t)n&&a.push(n);for(let n of a)r.searchParams.append("index",n);return new Request(r.toString(),e)}function ue(e){let r=new URL(e.url);return r.searchParams.delete("_data"),new Request(r.toString(),e)}function X(e,r){let t=-1;return e.forEach((a,n)=>{a.route.module[r]&&(t=n)}),t===-1?[]:e.slice(0,t+1)}function Ct(e,r){if(!r.catch&&!r.error)return e;let t=-1;return e.forEach((a,n)=>{let o=a.route.id;(r.renderBoundaryRouteId===o||r.loaderBoundaryRouteId===o||r.catchBoundaryRouteId===o)&&(t=n)}),e.slice(0,t+1)}be.createRequestHandler=mt});var ir=p(Me=>{d();"use strict";Object.defineProperty(Me,"__esModule",{value:!0});var or={};function kt(e,r){!e&&!or[r]&&(or[r]=!0,console.warn(r))}Me.warnOnce=kt});var ce=p(T=>{d();"use strict";Object.defineProperty(T,"__esModule",{value:!0});var ur=Z(),bt=ir();function De(e){return`__flash_${e}__`}function cr(e={},r=""){let t=new Map(Object.entries(e));return{get id(){return r},get data(){return Object.fromEntries(t)},has(a){return t.has(a)||t.has(De(a))},get(a){if(t.has(a))return t.get(a);let n=De(a);if(t.has(n)){let o=t.get(n);return t.delete(n),o}},set(a,n){t.set(a,n)},flash(a,n){t.set(De(a),n)},unset(a){t.delete(a)}}}function Mt(e){return e!=null&&typeof e.id=="string"&&typeof e.data!="undefined"&&typeof e.has=="function"&&typeof e.get=="function"&&typeof e.set=="function"&&typeof e.flash=="function"&&typeof e.unset=="function"}function Dt({cookie:e,createData:r,readData:t,updateData:a,deleteData:n}){let o=ur.isCookie(e)?e:ur.createCookie(e&&e.name||"__session",e);return lr(o),{async getSession(s,i){let u=s&&await o.parse(s,i),c=u&&await t(u);return cr(c||{},u||"")},async commitSession(s,i){let{id:u,data:c}=s;return u?await a(u,c,o.expires):u=await r(c,o.expires),o.serialize(u,i)},async destroySession(s,i){return await n(s.id),o.serialize("",{...i,expires:new Date(0)})}}}function lr(e){bt.warnOnce(e.isSigned,`The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server.`)}T.createSession=cr;T.createSessionStorage=Dt;T.isSession=Mt;T.warnOnceAboutSigningSessionCookie=lr});var hr=p(Ee=>{d();"use strict";Object.defineProperty(Ee,"__esModule",{value:!0});var dr=Z(),fr=ce();function Et({cookie:e}={}){let r=dr.isCookie(e)?e:dr.createCookie(e&&e.name||"__session",e);return fr.warnOnceAboutSigningSessionCookie(r),{async getSession(t,a){return fr.createSession(t&&await r.parse(t,a)||{})},async commitSession(t,a){return r.serialize(t.data,a)},async destroySession(t,a){return r.serialize("",{...a,expires:new Date(0)})}}}Ee.createCookieSessionStorage=Et});var yr=p(Oe=>{d();"use strict";Object.defineProperty(Oe,"__esModule",{value:!0});var Ot=ce();function Pt({cookie:e}={}){let r=0,t=new Map;return Ot.createSessionStorage({cookie:e,async createData(a,n){let o=(++r).toString();return t.set(o,{data:a,expires:n}),o},async readData(a){if(t.has(a)){let{data:n,expires:o}=t.get(a);if(!o||o>new Date)return n;o&&t.delete(a)}return null},async updateData(a,n,o){t.set(a,{data:n,expires:o})},async deleteData(a){t.delete(a)}})}Oe.createMemorySessionStorage=Pt});var wr=p(R=>{d();"use strict";Object.defineProperty(R,"__esModule",{value:!0});var pr=Z(),vr=re(),Bt=sr(),Pe=ce(),qt=hr(),Tt=yr();R.createCookie=pr.createCookie;R.isCookie=pr.isCookie;R.json=vr.json;R.redirect=vr.redirect;R.createRequestHandler=Bt.createRequestHandler;R.createSession=Pe.createSession;R.createSessionStorage=Pe.createSessionStorage;R.isSession=Pe.isSession;R.createCookieSessionStorage=qt.createCookieSessionStorage;R.createMemorySessionStorage=Tt.createMemorySessionStorage});d();var C=gr(wr());export{C as a};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/**
 * @remix-run/server-runtime v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
