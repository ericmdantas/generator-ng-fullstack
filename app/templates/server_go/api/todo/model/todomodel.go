package todomodel

import (
	_ "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"time"
)

type Todo struct {
	Id          bson.ObjectId `json:"_id,omitempty" bson:"_id,omitempty"`
	TodoMessage string        `json:"todoMessage,omitempty" bson:"todoMessage"`
	CreatedAt   time.Time     `json:"createdAt,omitempty" bson:"createdAt"`
}

type Todos []Todo
