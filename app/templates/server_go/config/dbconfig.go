package dbconfig

import (
	"gopkg.in/mgo.v2"
	"os"
)

type DB struct {
	Session *mgo.Session
}

func (db *DB) DoDial() (s *mgo.Session, err error) {
	return mgo.Dial(DBUrl())
}

func (db *DB) Name() string {
	return "go_pro"
}

func DBUrl() string {
	dburl := os.Getenv("MONGOHQ_URL")

	if dburl == "" {
		dburl = "localhost"
	}

	return dburl
}
