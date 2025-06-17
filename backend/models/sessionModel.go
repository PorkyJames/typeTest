package models

import "time"

// Table session {
//     jwt_id int [pk]
//     user_id int
//     issued_at datetime
//     expires_at datetime
// }

type Session struct {
	jwt_id     int
	user_id    int
	issued_at  time.Time
	expires_at time.Time
}
