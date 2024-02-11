"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9424],{51708:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var t=r(17624),c=r(95788);const o={title:"Concurrency",toc:!0},i=void 0,s={id:"usage/concurrency",title:"Concurrency",description:"Concurrency",source:"@site/versioned_docs/version-v1/usage/concurrency.md",sourceDirName:"usage",slug:"/usage/concurrency",permalink:"/docs/v1/usage/concurrency",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/usage/concurrency.md",tags:[],version:"v1",frontMatter:{title:"Concurrency",toc:!0},sidebar:"tutorialSidebar",previous:{title:"Clustering",permalink:"/docs/v1/usage/clustering"},next:{title:"Cron spec",permalink:"/docs/v1/usage/cron-spec"}},l={},u=[{value:"Concurrency",id:"concurrency",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.MN)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"concurrency",children:"Concurrency"}),"\n",(0,t.jsx)(n.p,{children:"Jobs can be configured to allow overlapping executions or forbid them."}),"\n",(0,t.jsx)(n.p,{children:"Concurrency property accepts two option:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"allow"})," (default): Allow concurrent job executions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"forbid"}),": If the job is already running don't send the execution, it will skip the executions until the next schedule."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from parent\\""\n  },\n  "concurrency": "forbid"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,c.MN)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},95788:(e,n,r)=>{r.d(n,{MN:()=>u});var t=r(11504);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},a={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=c,y=d["".concat(l,".").concat(f)]||d[f]||a[f]||o;return r?t.createElement(y,i(i({ref:n},p),{},{components:r})):t.createElement(y,i({ref:n},p))}));p.displayName="MDXCreateElement"}}]);