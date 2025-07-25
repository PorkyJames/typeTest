package main

// //! Package for formatting text, including print to console
import (
	"fmt"
	"log"
	data "my-backend/data"
	"my-backend/database"
	"my-backend/database/migrations"
	"my-backend/routes"
	"net/http"
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
	dummyUsers := data.CreateUserData()
	for _, user := range dummyUsers {
		_, err := migrations.InsertUser(database.DB, user)
		if err != nil {
			log.Fatal("Failed to insert dummy user:", err)
		}
	}
	fmt.Println("Inserted Users")

	// user := models.User{"Dummy1", "dummy1@gmail.com", auth.Hash("dummy1pass")}
	// pk, _ := migrations.InsertUser(database.DB, user)
	// user2 := models.User{"Dummy2", "dummy2@gmail.com", auth.Hash("dummy2pass")}
	// pk2, _ := migrations.InsertUser(database.DB, user2)
	// user3 := models.User{"Dummy3", "dummy3@gmail.com", auth.Hash("dummy3pass")}
	// pk3, _ := migrations.InsertUser(database.DB, user3)
	// if err != nil {
	// 	log.Fatal(err, "<<<<< Insert User Error")
	// }
	// if err2 != nil {
	// 	log.Fatal(err2, "<<<<< Insert User Error")
	// }
	// if err3 != nil {
	// 	log.Fatal(err3, "<<<<< Insert User Error")
	// }

	//! Get User Route
	http.HandleFunc("/user", routes.GetUser)

	log.Println("Server is running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
