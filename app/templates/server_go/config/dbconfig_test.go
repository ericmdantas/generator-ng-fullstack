package dbconfig

import (
	"github.com/stretchr/testify/assert"
	"os"
	"testing"
)

var db DB = DB{}

func TestGetDbUrl(t *testing.T) {

	assert.Equal(t, "localhost", DBUrl())

	os.Setenv("MONGOHQ_URL", "abc")

	assert.Equal(t, "abc", DBUrl())
}

func TestDBName(t *testing.T) {
	assert.Equal(t, "myAwesomeApp", db.Name())
}

func BenchmarkDoDial(b *testing.B) {
	for i := 0; i < b.N; i++ {
		db.DoDial()
	}
}
