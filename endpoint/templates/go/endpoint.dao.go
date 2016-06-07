package <%= nameLowerCase %>dao

import (
	_ "errors"
	_ "<%= repohosturl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/model"
	_ "<%= repohosturl %>/<%= userNameSpace %>/<%= appName %>/server/config"
	_ "gopkg.in/mgo.v2/bson"
)

func All() {

}

func New() {

}

func Update() {

}

func Delete() {

}
