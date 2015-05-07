package <%= nameLowerCase %>model

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type <%= name %> struct {
	Id          bson.ObjectId `json:"_id,omitempty" bson:"_id,omitempty"`
	CreatedAt   time.Time     `json:"createdAt,omitempty" bson:"createdAt"`
}

func (t <%= name %>) IsValid() bool {
	return false
}
