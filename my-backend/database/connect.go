package database

import (
	"database/sql"
	_ "github.com/lib/pq"
	"log"
)

// ! Creates a variable that connects to sql.DB object
var DB *sql.DB

func Connect() {
	connStr := "host=localhost port=5432 user=postgres password=postgres dbname=postgres sslmode=disable"

	var err error
	DB, err = sql.Open("postgres", connStr)

	if err != nil {
		log.Fatal(err, "<<<Connection Error")
	}

	if err = DB.Ping(); err != nil {
		log.Fatal(err, "DB Ping error")
	}

	log.Println("Database connection successful!")
}
