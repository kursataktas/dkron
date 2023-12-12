"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4183],{9474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(85893),a=r(3905);const o={title:"Job metadata"},s=void 0,c={id:"usage/metatags",title:"Job metadata",description:"Job metadata",source:"@site/versioned_docs/version-v2/usage/metatags.md",sourceDirName:"usage",slug:"/usage/metatags",permalink:"/docs/v2/usage/metatags",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/usage/metatags.md",tags:[],version:"v2",frontMatter:{title:"Job metadata"},sidebar:"tutorialSidebar",previous:{title:"shell",permalink:"/docs/v2/usage/executors/shell"},next:{title:"Metrics",permalink:"/docs/v2/usage/metrics"}},i={},l=[{value:"Job metadata",id:"job-metadata",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"job-metadata",children:"Job metadata"}),"\n",(0,n.jsxs)(t.p,{children:["Jobs can have an optional extra property field called ",(0,n.jsx)(t.code,{children:"metadata"})," that allows to set arbitrary tags to jobs and query the jobs using the API:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "name": "job_name",\n    "command": "/bin/true",\n    "schedule": "@every 2m",\n    "metadata": {\n        "user_id": "12345"\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"And then query the API to get only the results needed:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'$ curl http://localhost:8080/v1/jobs --data-urlencode "metadata[user_id]=12345"`\n'})})]})}function u(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>l});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));u.displayName="MDXCreateElement"}}]);