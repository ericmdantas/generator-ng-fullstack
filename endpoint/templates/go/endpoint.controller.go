package <%= nameLowerCase %>controller

import (
	_ "encoding/json"
	_ "github.com/<%= username %>/<%= appName %>/server/api/<%= feature %>/dao"
	_ <%= nameLowerCase %> "github.com/<%= username %>/<%= appName %>/server/api/<%= feature %>/model"
	"github.com/julienschmidt/httprouter"
	_ "io/ioutil"
	_ "net/http"
)

func GetAll(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
}

func GetById(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
}

func New(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
}

func Update(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
}

func Remove(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {

}
