"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/dkron-3-2","metadata":{"permalink":"/blog/dkron-3-2","editUrl":"https://github.com/distribworks/dkron/tree/main/website/blog/blog/dkron-3-2.md","source":"@site/blog/dkron-3-2.md","title":"Dkron 3.2","description":"New website","date":"2021-06-01T00:00:00.000Z","formattedDate":"June 1, 2021","tags":[],"readingTime":2.045,"hasTruncateMarker":false,"authors":[],"frontMatter":{"Description":"Dkron release 3.2 public release","Keywords":["Development","OpenSource","Distributed systems","cron"],"Tags":["Development","OpenSource","Distributed systems","cron"],"date":"2021-06-01","Topics":["Development","OpenSource","Distributed Systems"],"Slug":"dkron-3-2"},"unlisted":false,"nextItem":{"title":"Dkron 3.0 Release","permalink":"/blog/dkron-3-0"}},"content":"## New website\\n\\nOur brand new web site designed and implemented by https://github.com/Macxim, comes with a brand new look, better content structure, better documentation a new blog section and the new API navigator.\\n\\nThis marks the start of a new and better product design, more focused on the UX, easy of use and more documentation for Dkron.\\n\\nWe hope you like it as much as we do. \u2764\ufe0f\\n\\n## New features\\n\\n### Cronitor integration\\n\\nOur goal is to provide a very reliable way of running your cron jobs, we share that vision with the people behind [Cronitor](https://cronitor.io/). Dkron is very reliable but sometimes a very bad event can bring your cluster down to its knees. To provide multiple options to monitor Dkron, I\'m happy to introduce a new way to monitor your job executions using Cronitor service.\\n\\nCronitor is tightly integrated with Dkron, it will notify the details of every execution and Cronitor can offer multiple channels for alerting you in case something goes wrong.\\n\\nCheck the service https://cronitor.io/ and follow the integration guide in the docs to set up your [Dkron-Cronitor integration](/docs/usage/cronitor).\\n\\n### OpenAPI\\n\\nWe have migrated API docs from Swagger 2 spec to OpenAPI 3 format. Check the new and better [API docs](/api) and you can download the new [OpenAPI spec](/openapi/openapi.yaml) too.\\n## Upcoming features\\n\\nThe new look of Dkron will pave the road for the upcoming v4 release. We have really interesting features almost ready for the new version, some of them are:\\n\\n* Bump React Admin to v4.0\\n* Shell plugin will be included in the main binary\\n* New light image including only the main binary\\n* Optionally use fast-store instead of boltdb for Raft log, this will improve performance tenfold\\n* Farewell to the old UI\\n\\nWe think this will open Dkron to be used for new use cases that where not possible before.\\n\\n## Wrap-up\\n\\nWe are very happy of giving Dkron a well deserved new face to the world and also to keep integrating with new services we love to be able to offer the best product we can for this specific -and niche- market.\\n\\nWe think there\'s a gap in Job schedulers for the rest-of-us that is currently improving, but still very needed of cost-effective and easy to operate solutions like Dkron for small-mid start-ups and for specific needs in bigger companies.\\n\\nWe\'re always open to our users feedback so feel free to contact us if you have any suggestion."},{"id":"/dkron-3-0","metadata":{"permalink":"/blog/dkron-3-0","editUrl":"https://github.com/distribworks/dkron/tree/main/website/blog/blog/dkron-3-0.md","source":"@site/blog/dkron-3-0.md","title":"Dkron 3.0 Release","description":"I\'m thrilled to announce that Dkron/Pro v3.0 is here!","date":"2020-05-12T00:00:00.000Z","formattedDate":"May 12, 2020","tags":[],"readingTime":0.87,"hasTruncateMarker":false,"authors":[],"frontMatter":{"Description":"Dkron release 3.0 public release","Keywords":["Development","OpenSource","Distributed systems","cron"],"Tags":["Development","OpenSource","Distributed systems","cron"],"date":"2020-05-12","Topics":["Development","OpenSource","Distributed Systems"],"Slug":"dkron-3-0"},"unlisted":false,"prevItem":{"title":"Dkron 3.2","permalink":"/blog/dkron-3-2"}},"content":"I\'m thrilled to announce that Dkron/Pro v3.0 is here!\\n\\nThis release brings a big internal refactor in the job execution engine, incorporating breaking changes but ensuring no more missing executions.\\n\\n## What\'s new\\n\\n### Job execution engine\\n\\nRefactored the job execution engine for proper synchronization of executions, no more missing executions under normal conditions, and if there is one, Dkron will report the issue clearly in the logs.\\n\\nNew node targeting algorithm, transparent for the user.\\n\\n### UI Improvements\\n\\nChange the notification JS code to a pop-up like system that provides better comfort in using the UI, previously causing some weird effects on certain job operations like Run, Toggle, and Delete.\\n\\n## Wrap-up\\n\\nThis update brings no public API changes, and no changes in storage format so your upgrade path should be easy if you follow the [rolling upgrade notes](/docs/usage/upgrade/#rolling-upgrade).\\n\\nDownload and install from [here](/docs/basics/installation/)\\n\\n*Thank you to all my Dkron Pro customers for ensuring the long-term support and maintenance of Dkron. Support OSS software and your infrastructure vendors so we can support you!*"}]}')}}]);