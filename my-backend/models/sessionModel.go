package models

import "time"

// Table session {
//     jwt_id int [pk]
//     user_id int
//     issued_at datetime
//     expires_at datetime
// }

type Session struct {
	Jwt_id     uint
	User_id    int
	Issued_at  time.Time
	Expires_at time.Time
}
