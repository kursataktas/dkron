"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7556],{94908:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>a,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=s(17624),n=s(4552);const i={title:"Email processor"},t=void 0,c={id:"pro/processors/email",title:"Email processor",description:"The Email processor provides flexibility to job email notifications.",source:"@site/versioned_docs/version-v2/pro/processors/email.md",sourceDirName:"pro/processors",slug:"/pro/processors/email",permalink:"/docs/v2/pro/processors/email",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/pro/processors/email.md",tags:[],version:"v2",frontMatter:{title:"Email processor"},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch processor",permalink:"/docs/v2/pro/processors/elasticsearch"},next:{title:"Slack processor",permalink:"/docs/v2/pro/processors/slack"}},a={},l=[];function p(e){const o={code:"code",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"The Email processor provides flexibility to job email notifications."}),"\n",(0,r.jsxs)(o.p,{children:["Configuration of the email processor is stored in a file named ",(0,r.jsx)(o.code,{children:"dkron-processor-email.yml"})," in the same locations as ",(0,r.jsx)(o.code,{children:"dkron.yml"}),", and should include a list of providers, it can include any number of providers."]}),"\n",(0,r.jsx)(o.p,{children:"Example:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"provider1:\n  host: smtp.myprovider.com\n  port: 25\n  username: myusername\n  password: mypassword\n  from: cron@mycompany.com\n  subjectPrefix: '[Staging] '\n"})}),"\n",(0,r.jsx)(o.p,{children:"Then configure each job with the following options:"}),"\n",(0,r.jsx)(o.p,{children:"Example:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'{\n  "processors": {\n    "email": {\n      "provider": "provider1",\n      "emails": "team@mycompany.com, owner@mycompany.com",\n      "onSuccess": "true"\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(o.p,{children:["By default the email procesor doesn't send emails on job success, the ",(0,r.jsx)(o.code,{children:"onSuccess"})," parameter, enables it, like in the previous example."]})]})}function d(e={}){const{wrapper:o}={...(0,n.M)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},4552:(e,o,s)=>{s.d(o,{I:()=>c,M:()=>t});var r=s(11504);const n={},i=r.createContext(n);function t(e){const o=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(i.Provider,{value:o},e.children)}}}]);