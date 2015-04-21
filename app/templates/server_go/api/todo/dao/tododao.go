package tododao

import (
	"encoding/json"
	todo "github.com/ericmdantas/stuff/go_pro/server/api/todo/model"
	"github.com/ericmdantas/stuff/go_pro/server/config"
	"gopkg.in/mgo.v2/bson"
	"time"
)

const col string = "todos"

func All() (todo.Todos, error) {

	db := dbconfig.DB{}
	ts := todo.Todos{}

	s, err := db.DoDial()

	if err != nil {
		return err
	}

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.Find(bson.M{}).All(&ts)

	if err != nil {
		return err
	}

	return ts, err
}

func NewTodo(tf []byte) (todo.Todo, error) {

	db := dbconfig.DB{}
	t := todo.Todo{}
	t.Id = bson.NewObjectId()
	t.CreatedAt = time.Now()

	err := json.Unmarshal(tf, &t)

	if err != nil {
		return err
	}

	s, err := db.DoDial()

	if err != nil {
		return err
	}

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.Insert(t)

	if err != nil {
		return err
	}

	return t, err
}

func DeleteTodo(id string) error {
	db := dbconfig.DB{}

	s, err := db.DoDial()

	if err != nil {
		return err
	}

	idoi := bson.ObjectIdHex(id)

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.RemoveId(idoi)

	return err
}
