package tododao

import (
	"encoding/json"
	todo "github.com/ericmdantas/stuff/go_pro/server/api/todo/model"
	"github.com/ericmdantas/stuff/go_pro/server/config"
	"gopkg.in/mgo.v2/bson"
	"time"
)

const col string = "todos"

func All() todo.Todos {

	db := dbconfig.DB{}
	ts := todo.Todos{}

	s, err := db.DoDial()

	if err != nil {
		panic(err)
	}

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.Find(bson.M{}).All(&ts)

	if err != nil {
		panic(err)
	}

	if err != nil {
		panic(err)
	}

	return ts
}

func NewTodo(tf []byte) todo.Todo {

	db := dbconfig.DB{}
	t := todo.Todo{}
	t.Id = bson.NewObjectId()
	t.CreatedAt = time.Now()

	err := json.Unmarshal(tf, &t)

	if err != nil {
		panic(err)
	}

	s, err := db.DoDial()

	if err != nil {
		panic(err)
	}

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.Insert(t)

	if err != nil {
		panic(err)
	}

	return t
}

func DeleteTodo(id string) {
	db := dbconfig.DB{}

	s, err := db.DoDial()

	if err != nil {
		panic(err)
	}

	idoi := bson.ObjectIdHex(id)

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.RemoveId(idoi)

	if err != nil {
		panic(err)
	}
}
