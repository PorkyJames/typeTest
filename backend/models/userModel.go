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
	user_id    int
	username   string
	email      string
	password   string
	updated_at time.Time
	created_at time.Time
}
