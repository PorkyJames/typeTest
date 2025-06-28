package database

import (
	"database/sql"
	_ "github.com/lib/pq"
	"log"
)

func Connect() {
	connStr := "host=localhost port=5432 user=porkyjames password=porkyjames dbname=typedb sslmode=disable"

	db, err := sql.Open("postgres", connStr)

	if err != nil {
		log.Fatal(err)
	}

	//! closes db connection. Helps free up resources
	defer db.Close()

	if err = db.Ping(); err != nil {
		log.Fatal(err)
	}

	log.Println("Database connection successful!")
}
