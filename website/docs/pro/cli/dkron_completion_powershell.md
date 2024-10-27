---
date: 2024-10-06
title: "dkron completion powershell"
slug: dkron_completion_powershell
url: /docs/pro/cli/dkron_completion_powershell/
---
## dkron completion powershell

Generate the autocompletion script for powershell

### Synopsis

Generate the autocompletion script for powershell.

To load completions in your current shell session:

	dkron completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your powershell profile.


```
dkron completion powershell [flags]
```

### Options

```
  -h, --help              help for powershell
      --no-descriptions   disable completion descriptions
```

### Options inherited from parent commands

```
      --config string   config file (default is /etc/dkron/dkron.yml)
```

### SEE ALSO

* [dkron completion](/docs/pro/cli/dkron_completion/)	 - Generate the autocompletion script for the specified shell

###### Auto generated by spf13/cobra on 6-Oct-2024