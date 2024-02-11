"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8336],{23832:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=t(17624),o=t(95788);const i={title:"Job retries"},c=void 0,s={id:"usage/retries",title:"Job retries",description:"Jobs can be configured to retry in case of failure.",source:"@site/versioned_docs/version-v2/usage/retries.md",sourceDirName:"usage",slug:"/usage/retries",permalink:"/docs/v2/usage/retries",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/usage/retries.md",tags:[],version:"v2",frontMatter:{title:"Job retries"},sidebar:"tutorialSidebar",previous:{title:"Outage recovery",permalink:"/docs/v2/usage/recovery"},next:{title:"Embedded storage",permalink:"/docs/v2/usage/storage"}},a={},u=[{value:"Configuration",id:"configuration",level:2}];function l(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.MN)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Jobs can be configured to retry in case of failure."}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from parent\\""\n  },\n  "retries": 5\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"In case of failure to run the job in one node, it will try to run the job again in that node until the retries count reaches the limit."})]})}function d(e={}){const{wrapper:r}={...(0,o.MN)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},95788:(e,r,t)=>{t.d(r,{MN:()=>u});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),u=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,b=p["".concat(a,".").concat(f)]||p[f]||l[f]||i;return t?n.createElement(b,c(c({ref:r},d),{},{components:t})):n.createElement(b,c({ref:r},d))}));d.displayName="MDXCreateElement"}}]);