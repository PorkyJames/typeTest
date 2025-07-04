package migrations

import (
	"database/sql"
	"log"
	// "my-backend/data"
	"my-backend/models"
)

//! We need to grab the dummy data, the models, and then use a raw sql query to create the table and then insert the dummy data

func UserMigrations(DB *sql.DB) {

	if DB == nil {
		log.Fatal("Database connection is nil")
	}

	query := `
		CREATE TABLE IF NOT EXISTS users (
			user_id SERIAL PRIMARY KEY,
			username VARCHAR(255) NOT NULL,
			email VARCHAR(255) NOT NULL,
			password VARCHAR(255) NOT NULL,
			updated_at TIMESTAMP,
			created_at TIMESTAMP
		);`

	_, err := DB.Exec(query)

	if err != nil {
		log.Fatal(err, "<<<<<User Migration Error")
	}

}

func InsertUser(DB *sql.DB, user models.User) (int, error) {

	query := `
		INSERT INTO users (username, email, password)
		VALUES ($1, $2, $3)
		RETURNING user_id;
	`
	var pk int
	err := DB.QueryRow(query, user.Username, user.Email, user.Password).Scan(&pk)

	if err != nil {
		return 0, err
	}
	return pk, nil

}
