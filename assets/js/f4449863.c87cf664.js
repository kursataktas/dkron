"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2645],{56249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(85893),i=t(3905);const o={title:"Getting started",weight:30},s=void 0,a={id:"basics/getting-started",title:"Getting started",description:"Introduction",source:"@site/versioned_docs/version-v2/basics/getting-started.md",sourceDirName:"basics",slug:"/basics/getting-started",permalink:"/docs/v2/basics/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/basics/getting-started.md",tags:[],version:"v2",frontMatter:{title:"Getting started",weight:30},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/v2/basics/configuration"},next:{title:"installation",permalink:"/docs/v2/basics/installation"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"State storage",id:"state-storage",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Usage",id:"usage",level:2},{value:"Starting a single node",id:"starting-a-single-node",level:3},{value:"To start configuring an HA installation of Dkron follow the clustering guide",id:"to-start-configuring-an-ha-installation-of-dkron-follow-the-clustering-guide",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Dkron nodes can work in two modes, agents or servers."}),"\n",(0,r.jsx)(n.p,{children:"A Dkron agent is a cluster member that can handle job executions, run your scripts and return the resulting output to the server."}),"\n",(0,r.jsx)(n.p,{children:"A Dkron server is also a cluster member that send job execution queries to agents or other servers, so servers can execute jobs too."}),"\n",(0,r.jsx)(n.p,{children:"The main distinction is that servers order job executions, can be used to schedule jobs, handles data storage and participate on leader election."}),"\n",(0,r.jsx)(n.p,{children:"Dkron clusters have a leader, the leader is responsible of starting job execution queries in the cluster."}),"\n",(0,r.jsx)(n.p,{children:"Any Dkron agent or server acts as a cluster member and it's available to run scheduled jobs."}),"\n",(0,r.jsx)(n.p,{children:"You can choose whether a job is run on a node or nodes by specifying tags and a count of target nodes having this tag do you want a job to run. This gives an unprecedented level of flexibility in runnig jobs across a cluster of any size and with any combination of machines you need."}),"\n",(0,r.jsx)(n.p,{children:"All the execution responses will be gathered by the scheduler and stored in the database."}),"\n",(0,r.jsx)(n.h2,{id:"state-storage",children:"State storage"}),"\n",(0,r.jsx)(n.p,{children:"Dkron deployment is just a single binary, it stores the state in an internal BadgerDB instance and replicate all changes between all server nodes using the Raft protocol, it doesn't need any other storage system outside itself."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/docs/v2/basics/installation",children:"installation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"/docs/v2/basics/configuration",children:"configuration"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.p,{children:"By default Dkron uses the following ports:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"8946"})," for serf layer between agents"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"8080"})," for HTTP for the API and Dashboard"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"6868"})," for gRPC and raft layer comunication between agents."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Be sure you have opened this ports (or the ones that you configured) in your firewall or AWS security groups."})}),"\n",(0,r.jsx)(n.h3,{id:"starting-a-single-node",children:"Starting a single node"}),"\n",(0,r.jsx)(n.p,{children:"Works out of the box, good for non HA installations."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"System service: If no changes are done to the default config files, dkron will start as a service in single mode."}),"\n",(0,r.jsx)(n.li,{children:"Command line: Running a single node with default config can be done by running:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"dkron agent --server --bootstrap-expect=1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Check your server is working: ",(0,r.jsx)(n.code,{children:"curl localhost:8080/v1"})]}),"\n",(0,r.jsx)(n.p,{children:"Simple as that, now it is time to add a job:"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This job will only run in just one ",(0,r.jsx)(n.code,{children:"server"})," node due to the node count in the tag. Refer to the ",(0,r.jsx)(n.a,{href:"/docs/usage/target-nodes-spec",children:"target node spec"})," for details."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl localhost:8080/v1/jobs -XPOST -d \'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "timezone": "Europe/Berlin",\n  "owner": "Platform Team",\n  "owner_email": "platform@example.com",\n  "disabled": false,\n  "tags": {\n    "server": "true"\n  },\n  "metadata": {\n    "user": "12345"\n  }\n  "concurrency": "allow",\n  "executor": "shell",\n  "executor_config": {\n    "command": "date"\n  }\n}\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For full Job params description refer to the Job model in the ",(0,r.jsx)(n.a,{href:"/api",children:"API guide"})]}),"\n",(0,r.jsx)(n.p,{children:"That's it!"}),"\n",(0,r.jsxs)(n.h4,{id:"to-start-configuring-an-ha-installation-of-dkron-follow-the-clustering-guide",children:["To start configuring an HA installation of Dkron follow the ",(0,r.jsx)(n.a,{href:"/docs/usage/clustering",children:"clustering guide"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>c});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),h=c(t),g=i,f=h["".concat(l,".").concat(g)]||h[g]||d[g]||o;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));u.displayName="MDXCreateElement"}}]);