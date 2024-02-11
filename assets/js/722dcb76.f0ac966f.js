"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[856],{92316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(17624),o=r(95788);const i={},c="Authentication",a={id:"pro/auth",title:"Authentication",description:"Dkron Pro has the ability to be configured to use HTTP basic auth.",source:"@site/docs/pro/auth.md",sourceDirName:"pro",slug:"/pro/auth",permalink:"/docs/pro/auth",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/auth.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Access Control (Preview)",permalink:"/docs/pro/acls"},next:{title:"dkron",permalink:"/docs/pro/cli/dkron"}},s={},u=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.MN)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"authentication",children:"Authentication"}),"\n",(0,n.jsx)(t.p,{children:"Dkron Pro has the ability to be configured to use HTTP basic auth."}),"\n",(0,n.jsx)(t.p,{children:"Authentication can be set using these parameters in the dkron config file:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# dkron.yml\nusername: dkron_admin\npassword: adminpassword\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will enable auth on the WebUI and for the API."})]})}function p(e={}){const{wrapper:t}={...(0,o.MN)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},95788:(e,t,r)=>{r.d(t,{MN:()=>u});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,h=d["".concat(s,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(h,c(c({ref:t},p),{},{components:r})):n.createElement(h,c({ref:t},p))}));p.displayName="MDXCreateElement"}}]);