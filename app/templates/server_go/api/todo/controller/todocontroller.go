package todocontroller

import (
	"encoding/json"
	"github.com/<%= username %>/<%= appName %>/server/api/todo/dao"
	todo "github.com/<%= username %>/<%= appName %>/server/api/todo/model"
	"github.com/julienschmidt/httprouter"
	"io/ioutil"
	"net/http"
)

func GetAll(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	ts, err := tododao.All()

	w.Header().Set("Content-Type", "application/json")

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	tsm, err := json.Marshal(ts)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)

	w.Write(tsm)
}

func NewTodo(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	w.Header().Set("Content-Type", "application/json")

	t := todo.Todo{}

	tf, err := ioutil.ReadAll(r.Body)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	defer r.Body.Close()

	err = json.Unmarshal(tf, &t)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	nt, err := tododao.NewTodo(t)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	ntm, err := json.Marshal(nt)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)

	w.Write(ntm)
}

func RemoveTodo(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

	id := ps.ByName("id")

	err := tododao.DeleteTodo(id)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
}
