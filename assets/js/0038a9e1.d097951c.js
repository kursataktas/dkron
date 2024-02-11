"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1880],{50356:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=t(17624),o=t(95788);const s={title:"File Processor"},i=void 0,c={id:"usage/processors/file",title:"File Processor",description:"File processor saves the execution output to a single log file in the specified directory",source:"@site/versioned_docs/version-v1/usage/processors/file.md",sourceDirName:"usage/processors",slug:"/usage/processors/file",permalink:"/docs/v1/usage/processors/file",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/usage/processors/file.md",tags:[],version:"v1",frontMatter:{title:"File Processor"},sidebar:"tutorialSidebar",previous:{title:"Developing plugins",permalink:"/docs/v1/usage/plugins/develop"},next:{title:"Log Processor",permalink:"/docs/v1/usage/processors/log"}},l={},a=[{value:"Configuration",id:"configuration",level:2}];function p(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.MN)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"File processor saves the execution output to a single log file in the specified directory"}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(r.p,{children:"Parameters"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"log_dir: Path to the location where the log files will be saved\nforward: Forward log output to the next processor\n"})}),"\n",(0,n.jsx)(r.p,{children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "name": "job_name",\n    "command": "echo \'Hello files\'",\n    "schedule": "@every 2m",\n    "tags": {\n        "role": "web"\n    },\n    "processors": {\n        "files": {\n            "log_dir": "/var/log/mydir",\n            "forward": true\n        }\n    }\n}\n'})})]})}function u(e={}){const{wrapper:r}={...(0,o.MN)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},95788:(e,r,t)=>{t.d(r,{MN:()=>a});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),a=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=a(t),f=o,g=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));u.displayName="MDXCreateElement"}}]);