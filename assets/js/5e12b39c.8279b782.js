"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8845],{11165:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(85893),o=n(3905);const i={date:new Date("2023-09-02T00:00:00.000Z"),title:"dkron",slug:"dkron",url:"/docs/pro/cli/dkron/"},s=void 0,c={id:"pro/cli/dkron",title:"dkron",description:"dkron",source:"@site/docs/pro/cli/dkron.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron",permalink:"/docs/pro/cli/dkron",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/cli/dkron.md",tags:[],version:"current",frontMatter:{date:"2023-09-02T00:00:00.000Z",title:"dkron",slug:"dkron",url:"/docs/pro/cli/dkron/"},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/pro/auth"},next:{title:"dkron agent",permalink:"/docs/pro/cli/dkron_agent"}},l={},d=[{value:"dkron",id:"dkron",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 2-Sep-2023",id:"auto-generated-by-spf13cobra-on-2-sep-2023",level:6}];function a(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"dkron",children:"dkron"}),"\n",(0,t.jsx)(r.p,{children:"Professional distributed job scheduling system"}),"\n",(0,t.jsx)(r.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(r.p,{children:"Dkron is a system service that runs scheduled jobs at given intervals or times,\njust like the cron unix service but distributed in several machines in a cluster.\nIf a machine fails (the leader), a follower will take over and keep running the scheduled jobs without human intervention."}),"\n",(0,t.jsx)(r.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"      --config string   config file (default is /etc/dkron/dkron.yml)\n  -h, --help            help for dkron\n"})}),"\n",(0,t.jsx)(r.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/pro/cli/dkron_agent/",children:"dkron agent"}),"\t - Start a dkron agent"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/pro/cli/dkron_completion/",children:"dkron completion"}),"\t - Generate the autocompletion script for the specified shell"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/pro/cli/dkron_doc/",children:"dkron doc"}),"\t - Generate Markdown documentation for the Dkron CLI."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/pro/cli/dkron_keygen/",children:"dkron keygen"}),"\t - Generates a new encryption key"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/pro/cli/dkron_leave/",children:"dkron leave"}),"\t - Force an agent to leave the cluster"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/pro/cli/dkron_raft/",children:"dkron raft"}),"\t - Command to perform some raft operations"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/pro/cli/dkron_version/",children:"dkron version"}),"\t - Show version"]}),"\n"]}),"\n",(0,t.jsx)(r.h6,{id:"auto-generated-by-spf13cobra-on-2-sep-2023",children:"Auto generated by spf13/cobra on 2-Sep-2023"})]})}function p(e={}){const{wrapper:r}={...(0,o.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3905:(e,r,n)=>{n.d(r,{ah:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},a={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||a[h]||i;return n?t.createElement(f,s(s({ref:r},p),{},{components:n})):t.createElement(f,s({ref:r},p))}));p.displayName="MDXCreateElement"}}]);