"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2308],{82212:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=n(17624),o=n(95788);const s={},c="Slack processor",i={id:"pro/processors/slack",title:"Slack processor",description:"The Slack processor provides slack notifications with multiple configurations and rich format.",source:"@site/docs/pro/processors/slack.md",sourceDirName:"pro/processors",slug:"/pro/processors/slack",permalink:"/docs/pro/processors/slack",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/processors/slack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Email processor",permalink:"/docs/pro/processors/email"},next:{title:"Upgrade from v1 to v2",permalink:"/docs/upgrading/from_v1_to_v2"}},a={},l=[];function p(e){const r={code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.MN)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"slack-processor",children:"Slack processor"}),"\n",(0,t.jsx)(r.p,{children:"The Slack processor provides slack notifications with multiple configurations and rich format."}),"\n",(0,t.jsxs)(r.p,{children:["Configuration of the slack processor is stored in a file named ",(0,t.jsx)(r.code,{children:"dkron-processor-slack.yml"})," in the same locations as ",(0,t.jsx)(r.code,{children:"dkron.yml"}),", and should include a list of teams, it can include any number of teams."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:n(16596).c+"",width:"643",height:"229"})}),"\n",(0,t.jsx)(r.p,{children:"Example:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"team1:\n  webhook_url: https://hooks.slack.com/services/XXXXXXXXXXXXXXXXXXX\n  bot_name: Dkron Production\n"})}),"\n",(0,t.jsx)(r.p,{children:"Then configure each job with the following options:"}),"\n",(0,t.jsx)(r.p,{children:"Example:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\n  "processors": {\n    "slack": {\n      "team": "team1",\n      "channel": "#cron-production",\n      "onSuccess": "true"\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["By default the slack procesor doesn't send notifications on job success, the ",(0,t.jsx)(r.code,{children:"onSuccess"})," parameter, enables it, like in the previous example."]})]})}function d(e={}){const{wrapper:r}={...(0,o.MN)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},95788:(e,r,n)=>{n.d(r,{MN:()=>l});var t=n(11504);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),l=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(a,".").concat(m)]||u[m]||p[m]||s;return n?t.createElement(f,c(c({ref:r},d),{},{components:n})):t.createElement(f,c({ref:r},d))}));d.displayName="MDXCreateElement"},16596:(e,r,n)=>{n.d(r,{c:()=>t});const t=n.p+"assets/images/slack-c682ec1651a106f521d514f05ac8c26c.png"}}]);