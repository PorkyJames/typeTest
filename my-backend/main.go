package main

// //! Package for formatting text, including print to console
// import "fmt"
import (
	// "fmt"
	"fmt"
	"log"
	"my-backend/database"
	"my-backend/database/migrations"
	"my-backend/models"
	// "net/http"
)

// func handler(w http.ResponseWriter, r *http.Request) {
// 	//! Manually write the header, better practice
// 	w.WriteHeader(http.StatusOK)
// 	fmt.Println(w, "This is success in the terminal!")
// 	fmt.Println("This is without w in the terminal")

// 	//! Writes a formatted String
// 	fmt.Fprintln(w, "This is success in the Body")
// 	//! Sends to io.Writer in byte format.
// 	w.Write([]byte("This is success in the Body as well"))

// 	//! Essentially it does the same thing with some differences.
// }

func main() {
	//! Connect to Postgres
	database.Connect()
	// fmt.Printf("database.DB: %#v\n", database.DB)
	//! Create the table
	migrations.UserMigrations(database.DB)
	//! Insert Dummy Data
	user := models.User{"Dummy1", "dummy1@gmail.com", "dummy1pass"}
	user2 := models.User{"Dummy2", "dummy2@gmail.com", "dummy2pass"}
	user3 := models.User{"Dummy3", "dummy3@gmail.com", "dummy3pass"}
	pk, err := migrations.InsertUser(database.DB, user)
	pk2, err2 := migrations.InsertUser(database.DB, user2)
	pk3, err3 := migrations.InsertUser(database.DB, user3)
	if err != nil {
		log.Fatal(err, "<<<<< Insert User Error")
	}
	if err2 != nil {
		log.Fatal(err2, "<<<<< Insert User Error")
	}
	if err3 != nil {
		log.Fatal(err3, "<<<<< Insert User Error")
	}
	fmt.Println("Inserted user with ID:", pk)
	fmt.Println("Inserted user with ID:", pk2)
	fmt.Println("Inserted user with ID:", pk3)
}
