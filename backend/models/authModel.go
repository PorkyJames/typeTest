package models

// Table auth {
//     user_id int
//     username varchar
//     user_email varchar
//     hashed_pass varchar
//     updated_at datetime
//     created_at datetime
// }

import "time"

type Auth struct {
	user_id     int
	username    string
	UserEmail   string
	hashed_pass string
	updated_at  time.Time
	created_at  time.Time
}
