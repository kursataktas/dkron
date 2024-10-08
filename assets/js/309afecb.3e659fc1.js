"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9928],{1724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(17624),r=n(4552);const o={date:new Date("2022-06-05T00:00:00.000Z"),title:"dkron agent",slug:"dkron_agent",url:"/cli/dkron_agent/"},s=void 0,a={id:"cli/dkron_agent",title:"dkron agent",description:"dkron agent",source:"@site/versioned_docs/version-v3/cli/dkron_agent.md",sourceDirName:"cli",slug:"/cli/dkron_agent",permalink:"/docs/v3/cli/dkron_agent",draft:!1,unlisted:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v3/cli/dkron_agent.md",tags:[],version:"v3",frontMatter:{date:"2022-06-05T00:00:00.000Z",title:"dkron agent",slug:"dkron_agent",url:"/cli/dkron_agent/"},sidebar:"tutorialSidebar",previous:{title:"dkron",permalink:"/docs/v3/cli/dkron"},next:{title:"dkron completion",permalink:"/docs/v3/cli/dkron_completion"}},d={},l=[{value:"dkron agent",id:"dkron-agent",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 5-Jun-2022",id:"auto-generated-by-spf13cobra-on-5-jun-2022",level:6}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"dkron-agent",children:"dkron agent"}),"\n",(0,i.jsx)(t.p,{children:"Start a dkron agent"}),"\n",(0,i.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Start a dkron agent that schedules jobs, listens for executions and runs executors.\nIt also runs a web UI."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"dkron agent [flags]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --advertise-addr string           Address used to advertise to other nodes in the cluster. By default,\n                                        the bind address is advertised. The value supports \n                                        go-sockaddr/template format.\n      --advertise-rpc-port int          Use the value of rpc-port by default\n      --bind-addr string                Specifies which address the agent should bind to for network services, \n                                        including the internal gossip protocol and RPC mechanism. This should be \n                                        specified in IP format, and can be used to easily bind all network services \n                                        to the same address. The value supports go-sockaddr/template format.\n                                         (default "{{ GetPrivateIP }}:8946")\n      --bootstrap-expect int            Provides the number of expected servers in the datacenter. Either this value \n                                        should not be provided or the value must agree with other servers in the \n                                        cluster. When provided, Dkron waits until the specified number of servers are \n                                        available and then bootstraps the cluster. This allows an initial leader to be \n                                        elected automatically. This flag requires server mode.\n      --cronitor-endpoint string        Cronitor endpoint to call for notifications\n      --data-dir string                 Specifies the directory to use for server-specific data, including the \n                                        replicated log. By default, this is the top-level data-dir, \n                                        like [/var/lib/dkron] (default "dkron.data")\n      --datacenter string               Specifies the data center of the local agent. All members of a datacenter \n                                        should share a local LAN connection. (default "dc1")\n      --disable-usage-stats             Disable sending anonymous usage stats\n      --dog-statsd-addr string          DataDog Agent address\n      --dog-statsd-tags strings         Datadog tags, specified as key:value\n      --enable-prometheus               Enable serving prometheus metrics\n      --encrypt string                  Key for encrypting network traffic. Must be a base64-encoded 16-byte key\n  -h, --help                            help for agent\n      --http-addr string                Address to bind the UI web server to. Only used when server. The value \n                                        supports go-sockaddr/template format. (default ":8080")\n      --join strings                    An initial agent to join with. This flag can be specified multiple times\n      --log-level string                Log level (debug|info|warn|error|fatal|panic) (default "info")\n      --mail-from string                From email address to use\n      --mail-host string                Mail server host address to use for notifications\n      --mail-password string            Mail server password to use\n      --mail-payload string             Notification mail payload\n      --mail-port uint16                Mail server port\n      --mail-subject-prefix string      Notification mail subject prefix (default "[Dkron]")\n      --mail-username string            Mail server username used for authentication\n      --node-name string                Name of this node. Must be unique in the cluster (default "mariette.local")\n      --pre-webhook-endpoint string     Pre-webhook endpoint to call for notifications\n      --pre-webhook-headers strings     Headers to use when calling the pre-webhook. Can be specified multiple times\n      --pre-webhook-payload string      Body of the POST request to send on pre-webhook call\n      --profile string                  Profile is used to control the timing profiles used (default "lan")\n      --raft-multiplier int             An integer multiplier used by servers to scale key Raft timing parameters.\n                                        Omitting this value or setting it to 0 uses default timing described below. \n                                        Lower values are used to tighten timing and increase sensitivity while higher \n                                        values relax timings and reduce sensitivity. Tuning this affects the time it \n                                        takes to detect leader failures and to perform leader elections, at the expense \n                                        of requiring more network and CPU resources for better performance. By default, \n                                        Dkron will use a lower-performance timing that\'s suitable for minimal Dkron \n                                        servers, currently equivalent to setting this to a value of 5 (this default \n                                        may be changed in future versions of Dkron, depending if the target minimum \n                                        server profile changes). Setting this to a value of 1 will configure Raft to \n                                        its highest-performance mode is recommended for production Dkron servers. \n                                        The maximum allowed value is 10. (default 1)\n      --region string                   Specifies the region the Dkron agent is a member of. A region typically maps \n                                        to a geographic region, for example us, with potentially multiple zones, which \n                                        map to datacenters such as us-west and us-east (default "global")\n      --retry-interval string           Time to wait between join attempts. (default "30s")\n      --retry-join strings              Address of an agent to join at start time with retries enabled. \n                                        Can be specified multiple times.\n      --retry-max int                   Maximum number of join attempts. Defaults to 0, which will retry indefinitely.\n      --rpc-port int                    RPC Port used to communicate with clients. Only used when server. \n                                        The RPC IP Address will be the same as the bind address. (default 6868)\n      --serf-reconnect-timeout string   This is the amount of time to attempt to reconnect to a failed node before \n                                        giving up and considering it completely gone. In Kubernetes, you might need \n                                        this to about 5s, because there is no reason to try reconnects for default \n                                        24h value. Also Raft behaves oddly if node is not reaped and returned with \n                                        same ID, but different IP.\n                                        Format there: https://golang.org/pkg/time/#ParseDuration (default "24h")\n      --server                          This node is running in server mode\n      --statsd-addr string              Statsd address\n      --tag strings                     Tag can be specified multiple times to attach multiple key/value tag pairs \n                                        to the given node, specified as key=value\n      --ui                              Enable the web UI on this node. The node must be server. (default true)\n      --webhook-endpoint string         Webhook endpoint to call for notifications\n      --webhook-headers strings         Headers to use when calling the webhook URL. Can be specified multiple times\n      --webhook-payload string          Body of the POST request to send on webhook call\n      --webhook-url string              Webhook url to call for notifications. Deprecated, use webhook-endpoint instead\n'})}),"\n",(0,i.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"      --config string   config file path\n"})}),"\n",(0,i.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/docs/cli/dkron/",children:"dkron"}),"\t - Open source distributed job scheduling system"]}),"\n"]}),"\n",(0,i.jsx)(t.h6,{id:"auto-generated-by-spf13cobra-on-5-jun-2022",children:"Auto generated by spf13/cobra on 5-Jun-2022"})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var i=n(11504);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);