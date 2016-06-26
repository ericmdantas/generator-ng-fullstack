package dbconfig

import (
	"os"
	"testing"

	"github.com/stretchr/testify/assert"
)

var db DB = DB{}

func cleanEnv() {
	os.Setenv("MONGOHQ_URL", "")
}

func TestGetDbUrl(t *testing.T) {

	assert.Equal(t, "localhost", DBUrl())

	os.Setenv("MONGOHQ_URL", "abc")

	assert.Equal(t, "abc", DBUrl())

	cleanEnv()
}

func TestDBName(t *testing.T) {
	assert.Equal(t, "<%= appName %>", db.Name())
}

func BenchmarkDoDial(b *testing.B) {
	for i := 0; i < b.N; i++ {
		db.DoDial()
	}
}
