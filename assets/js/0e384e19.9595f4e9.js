"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{47876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(3905);const o={sidebar_position:1},s="Intro",a={id:"intro",title:"Intro",description:"Dkron - Distributed, fault tolerant job scheduling system",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/basics/installation"},next:{title:"Job chaining",permalink:"/docs/usage/chaining"}},l={},d=[{value:"Dkron - Distributed, fault tolerant job scheduling system",id:"dkron---distributed-fault-tolerant-job-scheduling-system",level:2},{value:"What is Dkron",id:"what-is-dkron",level:2},{value:"Web UI",id:"web-ui",level:2},{value:"Dkron design",id:"dkron-design",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"intro",children:"Intro"}),"\n",(0,r.jsx)(t.h2,{id:"dkron---distributed-fault-tolerant-job-scheduling-system",children:"Dkron - Distributed, fault tolerant job scheduling system"}),"\n",(0,r.jsxs)(t.p,{children:["Welcome to the Dkron documentation! This is the reference guide on how to use Dkron. If you want a getting started guide refer to the ",(0,r.jsx)(t.a,{href:"/docs/basics/getting-started",children:"getting started guide"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"what-is-dkron",children:"What is Dkron"}),"\n",(0,r.jsx)(t.p,{children:"Dkron is a distributed system to run scheduled jobs against a server or a group of servers of any size. One of the machines is the leader and the others will be followers. If the leader fails or becomes unreachable, any other one will take over and reschedule all jobs to keep the system healthy."}),"\n",(0,r.jsx)(t.p,{children:"In case the old leader becomes alive again, it'll become a follower."}),"\n",(0,r.jsx)(t.p,{children:"Dkron is a distributed cron drop-in replacement, easy to setup and fault tolerant with focus in:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Easy: Easy to use with a great UI"}),"\n",(0,r.jsx)(t.li,{children:"Reliable: Completely fault tolerant"}),"\n",(0,r.jsx)(t.li,{children:"Highly scalable: Able to handle high volumes of scheduled jobs and thousands of nodes"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Dkron is written in Go and leverages the power of distributed key value stores and ",(0,r.jsx)(t.a,{href:"https://www.serfdom.io/",children:"Serf"})," for providing fault tolerance, reliability and scalability while remaining simple and easily installable."]}),"\n",(0,r.jsxs)(t.p,{children:["Dkron is inspired by the google whitepaper ",(0,r.jsx)(t.a,{href:"https://queue.acm.org/detail.cfm?id=2745840",children:"Reliable Cron across the Planet"})]}),"\n",(0,r.jsx)(t.p,{children:"Dkron runs on Linux, OSX and Windows. It can be used to run scheduled commands on a server cluster using any combination of servers for each job. It has no single points of failure due to the use of the fault tolerant distributed databases and can work at large scale thanks to the efficient and lightweight gossip protocol."}),"\n",(0,r.jsxs)(t.p,{children:["Dkron uses the efficient and lightweight ",(0,r.jsx)(t.a,{href:"https://www.serfdom.io/docs/internals/gossip.html",children:"gossip protocol"})," underneath to communicate with nodes. Failure notification and task handling are run efficiently across an entire cluster of any size."]}),"\n",(0,r.jsx)(t.h2,{id:"web-ui",children:"Web UI"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(41272).Z+"",width:"2478",height:"1634"})}),"\n",(0,r.jsx)(t.h2,{id:"dkron-design",children:"Dkron design"}),"\n",(0,r.jsx)(t.p,{children:"Dkron is designed to solve one problem well, executing commands in given intervals. Following the unix philosophy of doing one thing and doing it well (like the battle-tested cron) but with the given addition of being designed for the cloud era, removing single points of failure in environments where scheduled jobs are needed to be run in multiple servers."})]})}function h(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=d(n),f=i,p=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return n?r.createElement(p,s(s({ref:t},h),{},{components:n})):r.createElement(p,s({ref:t},h))}));h.displayName="MDXCreateElement"},41272:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/job-list-new-5785900614f36d3b1500704226ca707c.png"}}]);