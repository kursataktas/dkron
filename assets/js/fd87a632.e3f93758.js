"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[804],{96271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(85893),o=t(3905);const s={title:"Access Control"},r="Access Control (Preview)",a={id:"pro/acls",title:"Access Control",description:"This feature is in preview and is subject to big changes",source:"@site/versioned_docs/version-v2/pro/acls.md",sourceDirName:"pro",slug:"/pro/acls",permalink:"/docs/v2/pro/acls",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/pro/acls.md",tags:[],version:"v2",frontMatter:{title:"Access Control"},sidebar:"tutorialSidebar",previous:{title:"License",permalink:"/docs/v2/intro/license"},next:{title:"Authentication",permalink:"/docs/v2/pro/auth"}},l={},c=[{value:"ACL System Overview",id:"acl-system-overview",level:2},{value:"Configuring ACLs",id:"configuring-acls",level:2},{value:"Disable ACLs",id:"disable-acls",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"access-control-preview",children:"Access Control (Preview)"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This feature is in preview and is subject to big changes"})}),"\n",(0,i.jsx)(n.p,{children:"Dkron provides an optional Access Control List (ACL) system which can be used to control access to data and APIs. The ACL is Capability-based, relying on policies to determine which fine grained rules can be applied. Dkron's capability based ACL system is very similar to common ACL systems you are used to."}),"\n",(0,i.jsx)(n.h2,{id:"acl-system-overview",children:"ACL System Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Dkron's ACL system is implemented with the CNCF ",(0,i.jsx)(n.a,{href:"https://www.openpolicyagent.org/",children:"Open Policy Agent"})," bringing a powerful system to suit your needs."]}),"\n",(0,i.jsx)(n.p,{children:"The ACL system is designed to be easy to use and fast to enforce while providing administrative insight. At the highest level, there are two major components to the ACL system:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OPA policy engine."})," OPA provices policy decission making ",(0,i.jsx)(n.a,{href:"https://www.openpolicyagent.org/docs/latest/philosophy/#policy-decoupling",children:"decoupling"})," Dkron integrates OPA as a library and provides a default policy rules written in the OPA Policy language that implements a set of enforcing rules on request params to the API that are ready to use for most use cases. You don not need to learn the OPA Policy language to start using Dkron's ACL system, but you can modify the default policy rules to adapt to your use case if you need to. Read more in ",(0,i.jsx)(n.a,{href:"https://www.openpolicyagent.org/docs/latest/",children:"OPA Docs"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ACL Policies."})," Dkron's ACL policies are simple JSON documents that define patterns to allow access to resources. You can find below an example ACL policy that works with the default OPA policy. The ACL JSON structure is not rigid you can adapt it to add new features in combination with the OPA Policy rules."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This guide is based on the usage of the default OPA Rego Policy"})}),"\n",(0,i.jsx)(n.h2,{id:"configuring-acls",children:"Configuring ACLs"}),"\n",(0,i.jsx)(n.p,{children:"ACLs are not enabled by default and must be enabled. To enable ACLs simply create an ACL policy using the API. Below you can find the most basic example of an ACL policy:"}),"\n",(0,i.jsx)(n.p,{children:"Basic example policy:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl localhost:8080/v1/acl/policies -d \'{\n    "path": {\n        "/v1": {\n            "capabilities": [\n                "read",\n            ]\n        },\n        "/v1/**": {\n            "capabilities": [\n                "create",\n                "read",\n                "update",\n                "delete",\n                "list"\n            ]\n        }\n    }\n}\'\n'})}),"\n",(0,i.jsx)(n.p,{children:"This policy allows any request to the API. As you can see paths uses glob patterns, and capabilities allow operations on resources."}),"\n",(0,i.jsx)(n.p,{children:"ACLs also allows templating, providing the ability to allow or deny operations to certain resource by patterns without having to hardcode values in policies."}),"\n",(0,i.jsxs)(n.p,{children:["For example, we can for limit job actions on certain resources based on the provided token via the accepted header ",(0,i.jsx)(n.code,{children:"X-Dkron-Token"})," on the request:"]}),"\n",(0,i.jsx)(n.p,{children:"Example policy:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl localhost:8080/v1/acl/policies -d \'{\n    "path": {\n        "/v1/members": {\n            "capabilities": ["read"]\n        },\n        "/v1/jobs": {\n            "capabilities": [\n                "list",\n                "read"\n            ]\n        },\n        "/v1/jobs/{{.Token}}-*": {\n            "capabilities": [\n                "create",\n                "read",\n                "update",\n                "delete"\n            ]\n        }\n    }\n}\'\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This policy will allow all operations on jobs starting with ",(0,i.jsx)(n.code,{children:"[Token]-job_name"}),", but will deny manipulation of jobs that doesn't match the pattern."]}),"\n",(0,i.jsx)(n.h2,{id:"disable-acls",children:"Disable ACLs"}),"\n",(0,i.jsxs)(n.p,{children:["As an administrator you will need to edit policies. Currently to be able to edit ACLs if you get locked out, you need to edit the default Rego file and disable enforcement completely. Edit the file located in ",(0,i.jsx)(n.code,{children:"policies/main.rego"})," and change the ",(0,i.jsx)(n.code,{children:"default allow"})," directive to ",(0,i.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"default allow = false -> true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This way the policy engine always evaluates to true, allowing any operation again. To restore ACL enforcemen, edit again the ",(0,i.jsx)(n.code,{children:"default allow"})," line and set it back to ",(0,i.jsx)(n.code,{children:"false"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>c});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=c(t),u=o,y=h["".concat(l,".").concat(u)]||h[u]||d[u]||s;return t?i.createElement(y,r(r({ref:n},p),{},{components:t})):i.createElement(y,r({ref:n},p))}));p.displayName="MDXCreateElement"}}]);