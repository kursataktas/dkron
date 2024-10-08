"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6040],{65004:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var t=r(17624),o=r(4552);const i={date:new Date("2023-09-02T00:00:00.000Z"),title:"dkron leave",slug:"dkron_leave",url:"/docs/pro/cli/dkron_leave/"},s=void 0,l={id:"pro/cli/dkron_leave",title:"dkron leave",description:"dkron leave",source:"@site/versioned_docs/version-v3/pro/cli/dkron_leave.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron_leave",permalink:"/docs/v3/pro/cli/dkron_leave",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v3/pro/cli/dkron_leave.md",tags:[],version:"v3",frontMatter:{date:"2023-09-02T00:00:00.000Z",title:"dkron leave",slug:"dkron_leave",url:"/docs/pro/cli/dkron_leave/"},sidebar:"tutorialSidebar",previous:{title:"dkron keygen",permalink:"/docs/v3/pro/cli/dkron_keygen"},next:{title:"dkron raft",permalink:"/docs/v3/pro/cli/dkron_raft"}},d={},a=[{value:"dkron leave",id:"dkron-leave",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 2-Sep-2023",id:"auto-generated-by-spf13cobra-on-2-sep-2023",level:6}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"dkron-leave",children:"dkron leave"}),"\n",(0,t.jsx)(n.p,{children:"Force an agent to leave the cluster"}),"\n",(0,t.jsx)(n.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(n.p,{children:"Stop stops an agent, if the agent is a server and is running for election\nstop running for election, if this server was the leader\nthis will force the cluster to elect a new leader and start a new scheduler.\nIf this is a server and has the scheduler started stop it, ignoring if this server\nwas participating in leader election or not (local storage).\nThen actually leave the cluster."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"dkron leave [flags]\n"})}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'      --cert-file string         Path to the client server TLS cert file\n  -h, --help                     help for leave\n      --key-file string          Path to the client server TLS key file\n      --rpc-addr string          gRPC address of the agent (default "127.0.0.1:6868")\n      --trusted-ca-file string   Path to the client server TLS trusted CA cert file\n'})}),"\n",(0,t.jsx)(n.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"      --config string   config file (default is /etc/dkron/dkron.yml)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/pro/cli/dkron/",children:"dkron"}),"\t - Professional distributed job scheduling system"]}),"\n"]}),"\n",(0,t.jsx)(n.h6,{id:"auto-generated-by-spf13cobra-on-2-sep-2023",children:"Auto generated by spf13/cobra on 2-Sep-2023"})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>l,M:()=>s});var t=r(11504);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);