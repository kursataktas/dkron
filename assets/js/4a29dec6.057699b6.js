"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9192],{7688:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var r=s(17624),t=s(4552);const n={title:"Log Processor"},c=void 0,i={id:"usage/processors/log",title:"Log Processor",description:"Log processor writes the execution output to stdout/stderr",source:"@site/versioned_docs/version-v2/usage/processors/log.md",sourceDirName:"usage/processors",slug:"/usage/processors/log",permalink:"/docs/v2/usage/processors/log",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/usage/processors/log.md",tags:[],version:"v2",frontMatter:{title:"Log Processor"},sidebar:"tutorialSidebar",previous:{title:"File Processor",permalink:"/docs/v2/usage/processors/file"},next:{title:"Syslog Processor",permalink:"/docs/v2/usage/processors/syslog"}},a={},u=[{value:"Configuration",id:"configuration",level:2}];function d(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"Log processor writes the execution output to stdout/stderr"}),"\n",(0,r.jsx)(o.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(o.p,{children:"Parameters"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.code,{children:"forward: Forward the output to the next processor"})}),"\n",(0,r.jsx)(o.p,{children:"Example"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n    "name": "job_name",\n    "command": "echo \'Hello log\'",\n    "schedule": "@every 2m",\n    "tags": {\n        "role": "web"\n    },\n    "processors": {\n        "log": {\n            "forward": true\n        }\n    }\n}\n'})})]})}function l(e={}){const{wrapper:o}={...(0,t.M)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,o,s)=>{s.d(o,{I:()=>i,M:()=>c});var r=s(11504);const t={},n=r.createContext(t);function c(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);