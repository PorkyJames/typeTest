package data

import (
	"my-backend/models"
	"time"
)

var DummySession = []models.Session{
	{Jwt_id: 1, User_id: 1, Issued_at: time.Now(), Expires_at: time.Now()},
	{Jwt_id: 2, User_id: 2, Issued_at: time.Now(), Expires_at: time.Now()},
	{Jwt_id: 3, User_id: 3, Issued_at: time.Now(), Expires_at: time.Now()},
	{Jwt_id: 4, User_id: 4, Issued_at: time.Now(), Expires_at: time.Now()},
}
