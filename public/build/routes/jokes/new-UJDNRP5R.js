import{a as w}from"/build/_shared/chunk-YPVNNCI5.js";import{a as x}from"/build/_shared/chunk-NZCB3PMS.js";import"/build/_shared/chunk-ATCWGBU5.js";import{a as j}from"/build/_shared/chunk-EYYFEV5H.js";import{a as g,b,f as v,h as y,i as h}from"/build/_shared/chunk-BE4YDBKA.js";import"/build/_shared/chunk-GUACUXYP.js";import{b as c,e as r,f as o}from"/build/_shared/chunk-AKSB5QXU.js";o();o();var A=c(x()),E=c(j());function B(e){if(e.length<10)return"The post is too short"}function F(e){if(e.length<1)return"Is it your name ?"}function k(){var s,d,l,u,m,a,f,p;let e=y(),t=h();if(t.submission){let n=t.submission.formData.get("name"),i=t.submission.formData.get("content");if(typeof n=="string"&&typeof i=="string"&&!B(i)&&!F(n))return r.createElement(w,{joke:{name:n,content:i},isOwner:!0,canDelete:!1})}return r.createElement("div",null,r.createElement("p",null,"Create your own post"),r.createElement(v,{method:"post"},r.createElement("div",null,r.createElement("label",null,"Name:"," ",r.createElement("input",{type:"text",defaultValue:(s=e==null?void 0:e.fields)==null?void 0:s.name,name:"name","aria-invalid":Boolean((d=e==null?void 0:e.fieldErrors)==null?void 0:d.name),"aria-describedby":((l=e==null?void 0:e.fieldErrors)==null?void 0:l.name)?"name-error":void 0})),((u=e==null?void 0:e.fieldErrors)==null?void 0:u.name)?r.createElement("p",{className:"form-validation-error",role:"alert",id:"name-error"},e.fieldErrors.name):null),r.createElement("div",null,r.createElement("label",null,"Content:"," ",r.createElement("textarea",{defaultValue:(m=e==null?void 0:e.fields)==null?void 0:m.content,name:"content","aria-invalid":Boolean((a=e==null?void 0:e.fieldErrors)==null?void 0:a.content),"aria-describedby":((f=e==null?void 0:e.fieldErrors)==null?void 0:f.content)?"content-error":void 0})),((p=e==null?void 0:e.fieldErrors)==null?void 0:p.content)?r.createElement("p",{className:"form-validation-error",role:"alert",id:"content-error"},e.fieldErrors.content):null),r.createElement("div",null,r.createElement("button",{type:"submit",className:"button"},"Add"))))}function I(){let e=g();if(e.status===401)return r.createElement("div",{className:"error-container"},r.createElement("p",null,"Please login to create post."),r.createElement(b,{to:"/login?redirectTo=/jokes/new"},"Login"));throw new Error(`Unexpected caught response with status: ${e.status}`)}function N({error:e}){return console.error(e),r.createElement("div",null,"Something unexpected went wrong. Sorry about that.")}export{I as CatchBoundary,N as ErrorBoundary,k as default};
