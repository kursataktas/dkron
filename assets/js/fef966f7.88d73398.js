"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7601],{75880:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=r(85893),o=r(3905);const i={date:new Date("2019-10-10T00:00:00.000Z"),title:"dkron",slug:"dkron",url:"/v2.0/cli/dkron/"},s=void 0,c={id:"cli/dkron",title:"dkron",description:"dkron",source:"@site/versioned_docs/version-v2/cli/dkron.md",sourceDirName:"cli",slug:"/cli/dkron",permalink:"/docs/v2/cli/dkron",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/cli/dkron.md",tags:[],version:"v2",frontMatter:{date:"2019-10-10T00:00:00.000Z",title:"dkron",slug:"dkron",url:"/v2.0/cli/dkron/"},sidebar:"tutorialSidebar",previous:{title:"installation",permalink:"/docs/v2/basics/installation"},next:{title:"dkron agent",permalink:"/docs/v2/cli/dkron_agent"}},l={},a=[{value:"dkron",id:"dkron",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 10-Oct-2019",id:"auto-generated-by-spf13cobra-on-10-oct-2019",level:6}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"dkron",children:"dkron"}),"\n",(0,t.jsx)(n.p,{children:"Open source distributed job scheduling system"}),"\n",(0,t.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.p,{children:"Dkron is a system service that runs scheduled jobs at given intervals or times,\njust like the cron unix service but distributed in several machines in a cluster.\nIf a machine fails (the leader), a follower will take over and keep running the scheduled jobs without human intervention."}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"      --config string   config file path\n  -h, --help            help for dkron\n"})}),"\n",(0,t.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/v2/cli/dkron_agent/",children:"dkron agent"}),"\t - Start a dkron agent"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/v2/cli/dkron_doc/",children:"dkron doc"}),"\t - Generate Markdown documentation for the Dkron CLI."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/v2/cli/dkron_keygen/",children:"dkron keygen"}),"\t - Generates a new encryption key"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/v2/cli/dkron_leave/",children:"dkron leave"}),"\t - Force an agent to leave the cluster"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/v2/cli/dkron_raft/",children:"dkron raft"}),"\t - Command to perform some raft operations"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/v2/cli/dkron_version/",children:"dkron version"}),"\t - Show version"]}),"\n"]}),"\n",(0,t.jsx)(n.h6,{id:"auto-generated-by-spf13cobra-on-10-oct-2019",children:"Auto generated by spf13/cobra on 10-Oct-2019"})]})}function u(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>a});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),a=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=a(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));u.displayName="MDXCreateElement"}}]);