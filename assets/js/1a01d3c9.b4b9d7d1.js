"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1791],{31986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(85893),o=n(3905);const i={title:"Encryption"},s=void 0,c={id:"pro/encryption",title:"Encryption",description:"SSL encryption is used for communicating dkron pro and the embedded store, and between storage nodes itself. Also if client auth is enabled, only dkron pro clients can talk to the embedded store. This means that no other software running on your local network will be able to talk to dkron's etcd server.",source:"@site/versioned_docs/version-v1/pro/encryption.md",sourceDirName:"pro",slug:"/pro/encryption",permalink:"/docs/v1/pro/encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/pro/encryption.md",tags:[],version:"v1",frontMatter:{title:"Encryption"},sidebar:"tutorialSidebar",previous:{title:"configuration",permalink:"/docs/v1/pro/configuration"},next:{title:"Docker executor",permalink:"/docs/v1/pro/executors/docker"}},a={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"SSL encryption is used for communicating dkron pro and the embedded store, and between storage nodes itself. Also if client auth is enabled, only dkron pro clients can talk to the embedded store. This means that no other software running on your local network will be able to talk to dkron's etcd server."}),"\n",(0,r.jsx)(t.p,{children:"This ensures that no unexpected usage of the Dkron's store will happen, unless it is another Dkron pro instance."}),"\n",(0,r.jsx)(t.p,{children:"SSL encryption is enabled by default in Dkron Pro and can not be disabled, you don't need to do nothing to use it."}),"\n",(0,r.jsx)(t.p,{children:"By default Dkron Pro runs with automatically generated SSL certificates, this is enough for using it in a trusted environment but to have a better grade of confidence, it is recommended to run Dkron Pro with custom SSL certificates."}),"\n",(0,r.jsxs)(t.p,{children:["Follow ",(0,r.jsx)(t.a,{href:"https://coreos.com/os/docs/latest/generate-self-signed-certificates.html",children:"this tutorial"})," to generate autosigned SSL certificates for your instances."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:'You don\'t need a client certificate for Dkron server, just add "client auth" usage to your server cert.'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"# dkron.yaml\nauto-tls: false # Set to false to use custom certs\nkey-file: server-key.pem\ncert-file: server.pem\ntrusted-ca-file: ca.pem\nclient-cert-auth: true # Enable it to only allow certs signed by the same CA\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>l});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));u.displayName="MDXCreateElement"}}]);