"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6361],{16586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(85893),o=t(3905);const i={title:"Job chaining"},c=void 0,a={id:"usage/chaining",title:"Job chaining",description:"Job chaining",source:"@site/versioned_docs/version-v2/usage/chaining.md",sourceDirName:"usage",slug:"/usage/chaining",permalink:"/docs/v2/usage/chaining",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/usage/chaining.md",tags:[],version:"v2",frontMatter:{title:"Job chaining"},sidebar:"tutorialSidebar",previous:{title:"Upgrade from v1 to v2",permalink:"/docs/v2/upgrading/from_v1_to_v2"},next:{title:"Cloud Auto-join",permalink:"/docs/v2/usage/cloud-auto-join"}},s={},l=[{value:"Job chaining",id:"job-chaining",level:2}];function u(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"job-chaining",children:"Job chaining"}),"\n",(0,r.jsxs)(n.p,{children:["You can set some jobs to run after other job is executed. To setup a job that will be executed after any other given job, just set the ",(0,r.jsx)(n.code,{children:"parent_job"})," property when saving the new job."]}),"\n",(0,r.jsx)(n.p,{children:"The dependent job will be executed after the main job finished a successful execution."}),"\n",(0,r.jsx)(n.p,{children:"Child jobs schedule property will be ignored if it's present."}),"\n",(0,r.jsx)(n.p,{children:"Take into account that parent jobs must be created before any child job."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from parent\\""\n  }\n}\n\n{\n  "name": "child_job",\n  "parent_job": "job1",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from child\\""\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=l(t),b=o,h=p["".concat(s,".").concat(b)]||p[b]||u[b]||i;return t?r.createElement(h,c(c({ref:n},d),{},{components:t})):r.createElement(h,c({ref:n},d))}));d.displayName="MDXCreateElement"}}]);