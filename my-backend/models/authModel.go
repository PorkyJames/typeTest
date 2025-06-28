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
	User_id     uint
	Username    string
	UserEmail   string
	Hashed_pass string
	Updated_at  time.Time
	Created_at  time.Time
}
