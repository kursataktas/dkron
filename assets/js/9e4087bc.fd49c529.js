"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7028],{2772:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});r(11504);var a=r(2480),n=r(78856),s=r(46352),i=r(2780),c=r(7988),l=r(94080),o=r(17624);function d(e){let{year:t,posts:r}=e;const n=(0,i.y)({day:"numeric",month:"long",timeZone:"UTC"});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.c,{as:"h3",id:t,children:t}),(0,o.jsx)("ul",{children:r.map((e=>{return(0,o.jsx)("li",{children:(0,o.jsxs)(a.c,{to:e.metadata.permalink,children:[(t=e.metadata.date,n.format(new Date(t)))," - ",e.metadata.title]})},e.metadata.date);var t}))})]})}function h(e){let{years:t}=e;return(0,o.jsx)("section",{className:"margin-vert--lg",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,o.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,o.jsx)(d,{...e})},t)))})})})}function m(e){let{archive:t}=e;const r=(0,n.G)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,n.G)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const t=e.reduce(((e,t)=>{const r=t.metadata.date.split("-")[0],a=e.get(r)??[];return e.set(r,[t,...a])}),new Map);return Array.from(t,(e=>{let[t,r]=e;return{year:t,posts:r}}))}(t.blogPosts);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.U7,{title:r,description:a}),(0,o.jsxs)(c.c,{children:[(0,o.jsx)("header",{className:"hero hero--primary",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(l.c,{as:"h1",className:"hero__title",children:r}),(0,o.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,o.jsx)("main",{children:i.length>0&&(0,o.jsx)(h,{years:i})})]})]})}},2780:(e,t,r)=>{r.d(t,{y:()=>n});var a=r(32504);function n(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,a.c)(),r=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,a.c)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:r,...e})}}}]);