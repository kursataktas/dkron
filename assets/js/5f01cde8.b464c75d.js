"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5115],{85260:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(85893),o=t(3905);const s={title:"AWS ECS Executor"},i=void 0,c={id:"pro/executors/ecs",title:"AWS ECS Executor",description:"The ECS exeutor is capable of launching tasks in ECS clusters, then listen to a stream of CloudWatch Logs and return the output.",source:"@site/versioned_docs/version-v2/pro/executors/ecs.md",sourceDirName:"pro/executors",slug:"/pro/executors/ecs",permalink:"/docs/v2/pro/executors/ecs",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/pro/executors/ecs.md",tags:[],version:"v2",frontMatter:{title:"AWS ECS Executor"},sidebar:"tutorialSidebar",previous:{title:"Docker executor",permalink:"/docs/v2/pro/executors/docker"},next:{title:"Cross region failover",permalink:"/docs/v2/pro/failover"}},a={},l=[];function u(e){const n={code:"code",p:"p",pre:"pre",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The ECS exeutor is capable of launching tasks in ECS clusters, then listen to a stream of CloudWatch Logs and return the output."}),"\n",(0,r.jsx)(n.p,{children:"To configure a job to be run in ECS, the executor needs a JSON Task definition template or an already defined task in ECS."}),"\n",(0,r.jsx)(n.p,{children:"To allow the ECS Task runner to run tasks, the machine running Dkron needs to have the appropriate permissions configured in AWS IAM:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "Stmt1460720941000",\n            "Effect": "Allow",\n            "Action": [\n                "ecs:RunTask",\n                "ecs:DescribeTasks",\n                "ecs:DescribeTaskDefinition",\n                "logs:FilterLogEvents",\n                "logs:DescribeLogStreams",\n                "logs:PutLogEvents"\n            ],\n            "Resource": [\n                "*"\n            ]\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"To configure a job to be run with the ECS executor:"}),"\n",(0,r.jsx)(n.p,{children:"Example using an existing taskdef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "executor": "ecs",\n  "executor_config": {\n    "taskdefName": "mytaskdef-family",\n    "region": "eu-west-1",\n    "cluster": "default",\n    "env": "ENVIRONMENT=variable",\n    "service": "mycontainer",\n    "overrides": "echo,\\"Hello from dkron\\""\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Example using a provided taskdef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "executor": "ecs",\n  "executor_config": {\n    "taskdefBody": "{\\"containerDefinitions\\": [{\\"essential\\": true,\\"image\\": \\"hello-world\\",\\"memory\\": 100,\\"name\\": \\"hello-world\\"}],\\"family\\": \\"helloworld\\"}",\n    "region": "eu-west-1",\n    "cluster": "default",\n    "fargate": "yes",\n    "env": "ENVIRONMENT=variable",\n    "maxAttempts": "5000"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"This is the complete list of configuration parameters of the plugin:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"taskdefBody\ntaskdefName\nregion\ncluster\nlogGroup\nfargate\nsecurityGroup\nsubnet\nenv\nservice\noverrides\nmaxAttempts // Defaults to 2000, will perform a check every 6s * 2000 times waiting a total of 12000s or 3.3h\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),l=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,m=p["".concat(a,".").concat(f)]||p[f]||u[f]||s;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));d.displayName="MDXCreateElement"}}]);