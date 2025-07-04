package models

import "time"

// Table user {
//     user_id int [pk]
//     username varchar
//     email varchar
//     password varchar
//     updated_at datetime
//     created_at datetime
// }

type User struct {
	Username string
	Email    string
	Password string
}
