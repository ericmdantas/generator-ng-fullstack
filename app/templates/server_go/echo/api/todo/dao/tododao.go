package tododao

import (
	"errors"
	todo "github.com/<%= username %>/<%= appName %>/server/api/todo/model"
	"github.com/<%= username %>/<%= appName %>/server/config"
	"gopkg.in/mgo.v2/bson"
	"time"
)

const col string = "todos"

func All() (todo.Todos, error) {
	db := dbconfig.DB{}
	ts := todo.Todos{}

	s, err := db.DoDial()

	if err != nil {
		return ts, errors.New("There was an error trying to connect with the DB.")
	}

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.Find(bson.M{}).All(&ts)

	if err != nil {
		return ts, errors.New("There was an error trying to find the todos.")
	}

	return ts, err
}

func NewTodo(t todo.Todo) (todo.Todo, error) {
	db := dbconfig.DB{}
	t.Id = bson.NewObjectId()
	t.CreatedAt = time.Now()

	s, err := db.DoDial()

	if err != nil {
		return t, errors.New("There was an error trying to connect to the DB.")
	}

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.Insert(t)

	if err != nil {
		return t, errors.New("There was an error trying to insert the doc to the DB.")
	}

	return t, err
}

func DeleteTodo(id string) error {
	db := dbconfig.DB{}

	s, err := db.DoDial()

	if err != nil {
		return errors.New("There was an error trying to connect with the DB.")
	}

	idoi := bson.ObjectIdHex(id)

	defer s.Close()

	c := s.DB(db.Name()).C(col)

	err = c.RemoveId(idoi)

	if err != nil {
		return errors.New("There was an error trying to remove the todo.")
	}

	return err
}
