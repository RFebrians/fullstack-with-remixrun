import{a as T}from"/build/_shared/chunk-NZCB3PMS.js";import{a as L}from"/build/_shared/chunk-EYYFEV5H.js";import{b as n,f as b,h as v}from"/build/_shared/chunk-IZABKGHB.js";import{b as F}from"/build/_shared/chunk-GUACUXYP.js";import{b as s,e as r,f as i}from"/build/_shared/chunk-AKSB5QXU.js";i();i();var x=s(F()),o=s(L()),j=s(T());var c="/build/_assets/login-TB27ASMI.css";var N=()=>({title:"Remix Jokes | Login",description:"Login to submit your own jokes to Remix Jokes!"}),P=()=>[{rel:"stylesheet",href:c}];function k(){var t,l,d,m,u,a,p,f,g,y,w,h;let e=v(),[E]=(0,x.useSearchParams)();return r.createElement("div",{className:"container"},r.createElement("div",{className:"content","data-light":""},r.createElement("h1",null,"Login"),r.createElement(b,{method:"post","aria-describedby":(e==null?void 0:e.formError)?"form-error-message":void 0},r.createElement("input",{type:"hidden",name:"redirectTo",value:(t=E.get("redirectTo"))!=null?t:void 0}),r.createElement("fieldset",null,r.createElement("legend",{className:"sr-only"},"Login or Register?"),r.createElement("label",null,r.createElement("input",{type:"radio",name:"loginType",value:"login",defaultChecked:!((l=e==null?void 0:e.fields)==null?void 0:l.loginType)||((d=e==null?void 0:e.fields)==null?void 0:d.loginType)==="login"})," ","Login"),r.createElement("label",null,r.createElement("input",{type:"radio",name:"loginType",value:"register",defaultChecked:((m=e==null?void 0:e.fields)==null?void 0:m.loginType)==="register"})," ","Register")),r.createElement("div",null,r.createElement("label",{htmlFor:"username-input"},"Username"),r.createElement("input",{type:"text",id:"username-input",name:"username",defaultValue:(u=e==null?void 0:e.fields)==null?void 0:u.username,"aria-invalid":Boolean((a=e==null?void 0:e.fieldErrors)==null?void 0:a.username),"aria-describedby":((p=e==null?void 0:e.fieldErrors)==null?void 0:p.username)?"username-error":void 0}),((f=e==null?void 0:e.fieldErrors)==null?void 0:f.username)?r.createElement("p",{className:"form-validation-error",role:"alert",id:"username-error"},e.fieldErrors.username):null),r.createElement("div",null,r.createElement("label",{htmlFor:"password-input"},"Password"),r.createElement("input",{id:"password-input",name:"password",defaultValue:(g=e==null?void 0:e.fields)==null?void 0:g.password,type:"password","aria-invalid":Boolean((y=e==null?void 0:e.fieldErrors)==null?void 0:y.password),"aria-describedby":((w=e==null?void 0:e.fieldErrors)==null?void 0:w.password)?"password-error":void 0}),((h=e==null?void 0:e.fieldErrors)==null?void 0:h.password)?r.createElement("p",{className:"form-validation-error",role:"alert",id:"password-error"},e.fieldErrors.password):null),r.createElement("div",{id:"form-error-message"},(e==null?void 0:e.formError)?r.createElement("p",{className:"form-validation-error",role:"alert"},e.formError):null),r.createElement("button",{type:"submit",className:"button"},"Submit"))),r.createElement("div",{className:"links"},r.createElement("ul",null,r.createElement("li",null,r.createElement(n,{to:"/"},"Title")),r.createElement("li",null,r.createElement(n,{to:"/jokes"},"Forum")))))}export{k as default,P as links,N as meta};
