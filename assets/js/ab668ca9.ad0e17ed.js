"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6022],{95286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(85893),i=r(3905);const o={title:"Use with AWS ECS"},s=void 0,c={id:"usage/ecs",title:"Use with AWS ECS",description:"Dkron Pro comes with a native ECS executor out of the box.",source:"@site/docs/usage/ecs.md",sourceDirName:"usage",slug:"/usage/ecs",permalink:"/docs/usage/ecs",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/ecs.md",tags:[],version:"current",frontMatter:{title:"Use with AWS ECS"},sidebar:"tutorialSidebar",previous:{title:"Cronitor Integration",permalink:"/docs/usage/cronitor"},next:{title:"Executors",permalink:"/docs/usage/executors/"}},a={},l=[{value:"Use with Amazon ECS",id:"use-with-amazon-ecs",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Example",id:"example",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/pro",children:"Dkron Pro"})," comes with a ",(0,n.jsx)(t.a,{href:"/docs/pro/executors/ecs/",children:"native ECS executor"})," out of the box."]})}),"\n",(0,n.jsx)(t.h2,{id:"use-with-amazon-ecs",children:"Use with Amazon ECS"}),"\n",(0,n.jsx)(t.p,{children:"To use Dkron to schedule jobs that run in containers, a wrapper ECS script is needed."}),"\n",(0,n.jsx)(t.p,{children:"Install the following snippet in the node that will run the call to ECS"}),"\n",(0,n.jsx)("script",{src:"https://gist.github.com/distribworks/3ac4aae9279d7c68c486fecccc2546cc.js"}),"\n",(0,n.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"The node that will run the call to ECS will need to have installed"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"AWS cli"}),"\n",(0,n.jsx)(t.li,{children:"jq"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'ecs-run --cluster cron --task-definition cron-taskdef --container-name cron --region us-east-1 --command "rake foo"'})})]})}function d(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>l});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,m=p["".concat(a,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));d.displayName="MDXCreateElement"}}]);