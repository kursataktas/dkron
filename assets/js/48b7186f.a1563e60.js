"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6432],{72116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=t(17624),r=t(4552);const i={},a=void 0,s={id:"basics/installation",title:"installation",description:"---",source:"@site/versioned_docs/version-v2/basics/installation.md",sourceDirName:"basics",slug:"/basics/installation",permalink:"/docs/v2/basics/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v2/basics/installation.md",tags:[],version:"v2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/v2/basics/getting-started"},next:{title:"dkron",permalink:"/docs/v2/cli/dkron"}},l={},d=[{value:"title: Installation\nweight: 10",id:"title-installationweight-10",level:2},{value:"Running the binary",id:"running-the-binary",level:2},{value:"Installing the package",id:"installing-the-package",level:2},{value:"Debian repo",id:"debian-repo",level:3},{value:"YUM repo",id:"yum-repo",level:3},{value:"Running in Docker",id:"running-in-docker",level:2},{value:"Launching Dkron on a new container",id:"launching-dkron-on-a-new-container",level:3},{value:"Mounting a mapped file storage volume",id:"mounting-a-mapped-file-storage-volume",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"title-installationweight-10",children:"title: Installation\nweight: 10"}),"\n",(0,o.jsx)(n.h2,{id:"running-the-binary",children:"Running the binary"}),"\n",(0,o.jsxs)(n.p,{children:["Download the packaged archive for your platform from the ",(0,o.jsx)(n.a,{href:"https://github.com/distribworks/dkron/releases",children:"downloads page"})," and extract the package to a shared location in your drive, like /opt/local/bin."]}),"\n",(0,o.jsxs)(n.p,{children:["Run Dkron with default setting: ",(0,o.jsx)(n.code,{children:"dkron agent --server --bootstrap-expect=1"})]}),"\n",(0,o.jsxs)(n.p,{children:["Navigate to ",(0,o.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"})]}),"\n",(0,o.jsx)(n.h2,{id:"installing-the-package",children:"Installing the package"}),"\n",(0,o.jsx)(n.h3,{id:"debian-repo",children:"Debian repo"}),"\n",(0,o.jsx)(n.p,{children:"APT repository:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"deb [trusted=yes] https://apt.fury.io/distribworks/ /\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then install: ",(0,o.jsx)(n.code,{children:"sudo apt-get install dkron"})]}),"\n",(0,o.jsx)(n.h3,{id:"yum-repo",children:"YUM repo"}),"\n",(0,o.jsx)(n.p,{children:"YUM repository:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"[dkron]\nname=Dkron Pro Private Repo\nbaseurl=https://yum.fury.io/distribworks/\nenabled=1\ngpgcheck=0\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then install: ",(0,o.jsx)(n.code,{children:"sudo yum install dkron"})]}),"\n",(0,o.jsxs)(n.p,{children:["This will start Dkron as a system service and the place example configuration file under ",(0,o.jsx)(n.code,{children:"/etc/dkron/dkron.yml"})]}),"\n",(0,o.jsx)(n.h2,{id:"running-in-docker",children:"Running in Docker"}),"\n",(0,o.jsx)(n.p,{children:"Dkron provides an official Docker image vi Dockerhub that can be used for deployment on any system running Docker."}),"\n",(0,o.jsx)(n.h3,{id:"launching-dkron-on-a-new-container",children:"Launching Dkron on a new container"}),"\n",(0,o.jsx)(n.p,{children:"Here\u2019s a quick one-liner to get you off the ground (please note, we recommend further configuration for production deployments below):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker run -d -p 8080:8080 --name dkron dkron/dkron agent --server --bootstrap-expect=1\n"})}),"\n",(0,o.jsx)(n.p,{children:"This will launch a Dkron server on port 8080 by default. You can use docker logs -f dkron to follow the rest of the initialization progress. Once the Dkron startup completes you can access the app at localhost:8080"}),"\n",(0,o.jsx)(n.p,{children:"Since Docker containers have their own ports and we just map them to the system ports as needed it\u2019s easy to move Dkron onto a different system port if you wish. For example running Dkron on port 12345:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker run -d -p 12345:8080 --name dkron dkron/dkron\n"})}),"\n",(0,o.jsx)(n.h3,{id:"mounting-a-mapped-file-storage-volume",children:"Mounting a mapped file storage volume"}),"\n",(0,o.jsx)(n.p,{children:"Dkron uses the local filesystem for storing the embedded database to store its own application data and the Raft protocol log. The end result is that your Dkron data will be on disk inside your container and lost if you ever remove the container."}),"\n",(0,o.jsx)(n.p,{children:"To persist your data outside of the container and make it available for use between container launches we can mount a local path inside our container."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker run -d -p 8080:8080 -v ~/dkron.data:/dkron.data --name dkron dkron/dkron agent --server --bootstrap-expect=1\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now when you launch your container we are mounting that folder from our local filesystem into the container."})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>a});var o=t(11504);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);