package todomodel

import (
	"github.com/stretchr/testify/assert"
	"gopkg.in/mgo.v2/bson"
	"testing"
	"time"
)

var testsModel = []struct {
	in  Todo
	out bool
}{
	{
		in:  Todo{bson.NewObjectId(), "", time.Now()},
		out: false,
	},
	{
		in:  Todo{bson.NewObjectId(), "sml", time.Now()},
		out: false,
	},
	{
		in:  Todo{bson.NewObjectId(), "biggggg", time.Now()},
		out: true,
	},
	{
		in:  Todo{bson.NewObjectId(), "juste", time.Now()},
		out: true,
	},
	{
		in:  Todo{bson.NewObjectId(), "1231231321", time.Now()},
		out: true,
	},
	{
		in:  Todo{bson.NewObjectId(), "1231231321123123132112312313211231231321123123132112312313211231231321123123132112312313211231231321", time.Now()},
		out: true,
	},
}

func TestIsValid(t *testing.T) {
	for _, _test := range testsModel {
		assert.Equal(t, _test.out, _test.in.IsValid())
	}
}

func BenchmarkIsValid(b *testing.B) {

	t := Todo{bson.NewObjectId(), "", time.Now()}

	for i := 0; i < b.N; i++ {
		t.IsValid()
	}
}
