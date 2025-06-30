package main

// //! Package for formatting text, including print to console
// import "fmt"
import (
	"fmt"
	"my-backend/database"
	"my-backend/database/migrations"
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
	fmt.Printf("database.DB: %#v\n", database.DB)
	//! Create the table
	migrations.UserMigrations(database.DB)
	//! Insert Dummy Data

}
