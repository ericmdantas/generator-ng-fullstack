package <%= nameLowerCase %>dao

import (
	_ <%= nameLowerCase %> "<%= repohosturl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/model"
	_ "github.com/stretchr/testify/assert"
	_ "gopkg.in/mgo.v2"
	_ "gopkg.in/mgo.v2/bson"
	_ "testing"
	_ "time"
)
