package main

import (
	"testing"

	"github.com/distribworks/dkron/v4/plugin"
	"github.com/distribworks/dkron/v4/types"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/ptypes"
)

func TestProcess(t *testing.T) {
	now := ptypes.TimestampNow()

	pa := &plugin.ProcessorArgs{
		Execution: types.Execution{
			StartedAt: now,
			NodeName:  "testNode",
			Output:    []byte("test"),
		},
		Config: plugin.Config{
			"forward": "true",
		},
	}

	fo := &SyslogOutput{}
	ex := fo.Process(pa)

	assert.Equal(t, "test", string(ex.Output))
}
