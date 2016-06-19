package tododao

import (
	todo "github.com/<%= username %>/<%= appName %>/server/api/todo/model"
	"github.com/stretchr/testify/assert"
	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
	"testing"
	"time"
)

const testDBUrl string = "localhost"
const testDBName string = "<%= appName %>"
const collName string = "todos"

var id bson.ObjectId = bson.NewObjectId()

func clearDB() {
	s, err := mgo.Dial(testDBUrl)

	if err != nil {
		panic(err)
	}

	defer s.Close()

	c := s.DB(testDBName).C(collName)

	_, err = c.RemoveAll(bson.M{})

	if err != nil {
		panic(err)
	}
}

func createTodo(t *todo.Todo) {
	s, _ := mgo.Dial(testDBUrl)

	c := s.DB(testDBName).C(collName)

	err := c.Insert(t)

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

	c := s.DB(testDBName).C(collName)

	err = c.Find(bson.M{"_id": id}).One(&t)

	if err != nil {
		panic(err)
	}

	return t
}

func TestNewTodo(t *testing.T) {

	td := todo.Todo{id, "1234556", time.Now()}

	createTodo(&td)

	assert.Equal(t, td.TodoMessage, findTodoJustCreated().TodoMessage)
	assert.Equal(t, td.Id, findTodoJustCreated().Id)

	clearDB()
}

func TestAll(t *testing.T) {

	ts := todo.Todos{}

	td0 := todo.Todo{bson.NewObjectId(), "12345560", time.Now()}
	td1 := todo.Todo{bson.NewObjectId(), "12345561", time.Now()}
	td2 := todo.Todo{bson.NewObjectId(), "12345562", time.Now()}
	td3 := todo.Todo{bson.NewObjectId(), "12345563", time.Now()}
	td4 := todo.Todo{bson.NewObjectId(), "12345564", time.Now()}

	createTodo(&td0)
	createTodo(&td1)
	createTodo(&td2)
	createTodo(&td3)
	createTodo(&td4)

	ts, _ = All()

	assert.Equal(t, td0.TodoMessage, ts[0].TodoMessage)
	assert.Equal(t, td1.TodoMessage, ts[1].TodoMessage)
	assert.Equal(t, td2.TodoMessage, ts[2].TodoMessage)
	assert.Equal(t, td3.TodoMessage, ts[3].TodoMessage)
	assert.Equal(t, td4.TodoMessage, ts[4].TodoMessage)

	clearDB()
}

func TestDeleteTodo(t *testing.T) {

	td := todo.Todo{bson.NewObjectId(), "some text here", time.Now()}
	ftd := todo.Todo{}

	createTodo(&td)

	err := DeleteTodo(td.Id.Hex())

	if err != nil {
		panic(err)
	}

	s, _ := mgo.Dial(testDBUrl)

	c := s.DB(testDBName).C(collName)

	err = c.Find(bson.M{"_id": td.Id}).One(&ftd)

	if err != nil {
		assert.NotEqual(t, td, ftd)
	}

	clearDB()
}

func BenchmarkNewTodo(b *testing.B) {

	td := todo.Todo{id, "something here", time.Now()}

	for i := 0; i < b.N; i++ {
		NewTodo(td)
	}

	clearDB()
}

func BenchmarkAll(b *testing.B) {

	td0 := todo.Todo{bson.NewObjectId(), "12345560", time.Now()}
	td1 := todo.Todo{bson.NewObjectId(), "12345561", time.Now()}
	td2 := todo.Todo{bson.NewObjectId(), "12345562", time.Now()}
	td3 := todo.Todo{bson.NewObjectId(), "12345563", time.Now()}
	td4 := todo.Todo{bson.NewObjectId(), "12345564", time.Now()}

	createTodo(&td0)
	createTodo(&td1)
	createTodo(&td2)
	createTodo(&td3)
	createTodo(&td4)

	for i := 0; i < b.N; i++ {
		_, _ = All()
	}

	clearDB()
}
