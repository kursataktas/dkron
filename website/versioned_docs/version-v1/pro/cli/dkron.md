---
date: 2019-01-21
title: "dkron"
slug: dkron
url: /v1.2/cli/dkron/
---
## dkron

Professional distributed job scheduling system

### Synopsis

Dkron is a system service that runs scheduled jobs at given intervals or times,
just like the cron unix service but distributed in several machines in a cluster.
If a machine fails (the leader), a follower will take over and keep running the scheduled jobs without human intervention.

### Options

```
      --config string   config file (default is /etc/dkron/dkron.yml)
  -h, --help            help for dkron
```

### SEE ALSO

* [dkron agent](/docs/v1/cli/dkron_agent/)	 - Start a dkron agent
* [dkron doc](/docs/v1/cli/dkron_doc/)	 - Generate Markdown documentation for the Dkron CLI.
* [dkron keygen](/docs/v1/cli/dkron_keygen/)	 - Generates a new encryption key
* [dkron version](/docs/v1/cli/dkron_version/)	 - Show version

###### Auto generated by spf13/cobra on 21-Jan-2019