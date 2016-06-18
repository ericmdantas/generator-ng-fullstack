package <%= nameLowerCase %>dao

import (
	_ "errors"
	_ "<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/api/<%= feature %>/model"
	_ "<%= repoHostUrl %>/<%= userNameSpace %>/<%= appName %>/server/config"
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
