"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9024],{52092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var n=r(17624),o=r(95788);const i={title:"Clustering"},c=void 0,s={id:"pro/clustering",title:"Clustering",description:"Configure a cluster",source:"@site/versioned_docs/version-v1/pro/clustering.md",sourceDirName:"pro",slug:"/pro/clustering",permalink:"/docs/v1/pro/clustering",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/pro/clustering.md",tags:[],version:"v1",frontMatter:{title:"Clustering"},sidebar:"tutorialSidebar",previous:{title:"dkron version",permalink:"/docs/v1/pro/cli/dkron_version"},next:{title:"Commercial FAQ",permalink:"/docs/v1/pro/commercial-faq"}},l={},a=[{value:"Configure a cluster",id:"configure-a-cluster",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.MN)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"configure-a-cluster",children:"Configure a cluster"}),"\n",(0,n.jsxs)(t.p,{children:["First follow the Dkron ",(0,n.jsx)(t.a,{href:"/docs/usage/clustering",children:"clustering guide"})," then you can continue with this guide."]}),"\n",(0,n.jsx)(t.p,{children:"The embedded store also needs to know its peers, it needs its own configuration as in the following example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"# etcd.conf.yaml\n# Initial cluster configuration for bootstrapping.\ninitial-cluster: dkron1=https://10.19.3.9:2380,dkron2=https://10.19.4.64:2380,dkron3=https://10.19.7.215:2380\n"})}),"\n",(0,n.jsx)(t.p,{children:"With this configuration Dkron Pro should start in cluster mode with embedded storage."}),"\n",(0,n.jsxs)(t.p,{children:["For a more in detail guide of clustering with etcd follow this guide: ",(0,n.jsx)(t.a,{href:"https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/clustering.md",children:"https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/clustering.md"})]})]})}function d(e={}){const{wrapper:t}={...(0,o.MN)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},95788:(e,t,r)=>{r.d(t,{MN:()=>a});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=a(r),f=o,g=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(g,c(c({ref:t},d),{},{components:r})):n.createElement(g,c({ref:t},d))}));d.displayName="MDXCreateElement"}}]);