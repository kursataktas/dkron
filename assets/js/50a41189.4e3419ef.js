"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8632],{8292:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var o=t(17624),n=t(95788);const c={title:"Docker executor"},i=void 0,a={id:"pro/executors/docker",title:"Docker executor",description:"Docker executor can launch docker based cron jobs using the docker command of the target node.",source:"@site/versioned_docs/version-v2/pro/executors/docker.md",sourceDirName:"pro/executors",slug:"/pro/executors/docker",permalink:"/docs/v2/pro/executors/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/pro/executors/docker.md",tags:[],version:"v2",frontMatter:{title:"Docker executor"},sidebar:"tutorialSidebar",previous:{title:"Encryption",permalink:"/docs/v2/pro/encryption"},next:{title:"AWS ECS Executor",permalink:"/docs/v2/pro/executors/ecs"}},s={},u=[{value:"Configuration",id:"configuration",level:2}];function d(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.MN)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Docker executor can launch docker based cron jobs using the docker command of the target node."}),"\n",(0,o.jsx)(r.p,{children:"This executor needs a recent version of docker to be available and configured in the target node."}),"\n",(0,o.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(r.p,{children:"To run a docker job create a job config with the docker executor as in this example:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'{\n  "executor": "docker",\n  "executor_config": {\n    "image": "alpine", //docker image to use\n    "volumes": "/logs:/var/log/", //comma separated list of volume mappings\n    "command": "echo \\"Hello from dkron\\"", //command to pass to run on container\n    "env": "ENVIRONMENT=variable" //environment variables to pass to the container\n  }\n}\n'})})]})}function l(e={}){const{wrapper:r}={...(0,n.MN)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},95788:(e,r,t)=>{t.d(r,{MN:()=>u});var o=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),u=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},l=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||c;return t?o.createElement(m,i(i({ref:r},l),{},{components:t})):o.createElement(m,i({ref:r},l))}));l.displayName="MDXCreateElement"}}]);