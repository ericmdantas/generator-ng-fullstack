package tododao

import (
	todo "github.com/ericmdantas/stuff/go_pro/server/api/todo/model"
	"github.com/stretchr/testify/assert"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"testing"
	"time"
)

const testDBUrl string = "localhost"
const testDBName string = "myAwesomeApp_test"

var id bson.ObjectId = bson.NewObjectId()

func createTodo() {
	t := todo.Todo{id, "ancdefefef", time.Now()}

	s, err := mgo.Dial(testDBUrl)

	if err != nil {
		panic(err)
	}

	defer s.Close()

	c := s.DB(testDBName).C("todos")

	err = c.Insert(t)

	if err != nil {
		panic(err)
	}
}

func findTodoJustCreated() todo.Todo {
	t := todo.Todo{}

	s, err := mgo.Dial(testDBUrl)

	if err != nil {
		panic(err)
	}

	defer s.Close()

	c := s.DB(testDBName).C("todos")

	err = c.Find(bson.M{"_id": id}).One(&t)

	if err != nil {
		panic(err)
	}

	return t
}

func TestNewTodo(t *testing.T) {
	createTodo()

	assert.NotEmpty(t, findTodoJustCreated())
}
