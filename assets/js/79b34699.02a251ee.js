"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2982],{64480:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(85893),n=t(3905);const s={title:"Elasticsearch processor"},a=void 0,c={id:"pro/processors/elasticsearch",title:"Elasticsearch processor",description:"The Elasticsearch processor can fordward execution logs to an ES cluster. It need an already available Elasticsearch installation that is visible in the same network of the target node.",source:"@site/versioned_docs/version-v1/pro/processors/elasticsearch.md",sourceDirName:"pro/processors",slug:"/pro/processors/elasticsearch",permalink:"/docs/v1/pro/processors/elasticsearch",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/pro/processors/elasticsearch.md",tags:[],version:"v1",frontMatter:{title:"Elasticsearch processor"},sidebar:"tutorialSidebar",previous:{title:"AWS ECS Executor",permalink:"/docs/v1/pro/executors/ecs"},next:{title:"Email processor",permalink:"/docs/v1/pro/processors/email"}},i={},l=[{value:"Configuration",id:"configuration",level:2}];function p(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"The Elasticsearch processor can fordward execution logs to an ES cluster. It need an already available Elasticsearch installation that is visible in the same network of the target node."}),"\n",(0,o.jsx)(r.p,{children:"The output logs of the job execution will be stored in the indicated ES instace."}),"\n",(0,o.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-json",children:'{\n  "processors": {\n    "elasticsearch": {\n      "url": "http://localhost:9200", //comma separated list of Elasticsearch hosts urls (default: http://localhost:9200)\n      "index": "dkron_logs", //desired index name (default: dkron_logs)\n      "forward": "false" //forward logs to the next processor (default: false)\n    }\n  }\n}\n'})})]})}function d(e={}){const{wrapper:r}={...(0,n.ah)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3905:(e,r,t)=>{t.d(r,{ah:()=>l});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),l=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=n,h=u["".concat(i,".").concat(f)]||u[f]||p[f]||s;return t?o.createElement(h,a(a({ref:r},d),{},{components:t})):o.createElement(h,a({ref:r},d))}));d.displayName="MDXCreateElement"}}]);