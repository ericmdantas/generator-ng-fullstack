package todocontroller

import (
	"encoding/json"
	"fmt"
	"github.com/ericmdantas/stuff/go_pro/server/api/todo/dao"
	"github.com/julienschmidt/httprouter"
	"io/ioutil"
	"net/http"
)

func GetAll(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	fmt.Println("todos")

	ts := tododao.All()

	tsm, err := json.Marshal(ts)

	if err != nil {
		panic(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	w.Write(tsm)
}

func NewTodo(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	tf, err := ioutil.ReadAll(r.Body)

	if err != nil {
		panic(err)
	}

	defer r.Body.Close()

	nt := tododao.NewTodo(tf)

	ntm, err := json.Marshal(nt)

	if err != nil {
		panic(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)

	w.Write(ntm)
}

func RemoveTodo(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	id := ps.ByName("id")

	tododao.DeleteTodo(id)

	w.WriteHeader(http.StatusOK)
}
