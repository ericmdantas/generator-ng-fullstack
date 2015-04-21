package todomodel

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type Todo struct {
	Id          bson.ObjectId `json:"_id,omitempty" bson:"_id,omitempty"`
	TodoMessage string        `json:"todoMessage,omitempty" bson:"todoMessage"`
	CreatedAt   time.Time     `json:"createdAt,omitempty" bson:"createdAt"`
}

func (t Todo) IsValid() bool {

	if l := len(t.TodoMessage); l > 4 {
		return true
	}

	return false
}

type Todos []Todo
