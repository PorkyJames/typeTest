package routes

import (
	"encoding/json"
	// "fmt"
	"log"
	"my-backend/database"
	"my-backend/models"
	"net/http"
)

// func Router(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Hello from GET Users Route")
// }

func GetUser(w http.ResponseWriter, r *http.Request) {

	//! Grab our user model
	var user models.User

	//! Query into our users table
	query := "SELECT username, email FROM users WHERE user_id = $1"
	err := database.DB.QueryRow(query, 1).Scan(&user.Username, &user.Email)

	if err != nil {
		log.Fatal(err)
	}

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}
