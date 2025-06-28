package data

import (
	"my-backend/models"
	"time"
)

var DummyAuth = []models.Auth{
	{User_id: 1, Username: "dummy1", UserEmail: "dummy1@gmail.com", Hashed_pass: "hashed1", Updated_at: time.Now(), Created_at: time.Now()},
	{User_id: 2, Username: "dummy2", UserEmail: "dummy2@gmail.com", Hashed_pass: "hashed2", Updated_at: time.Now(), Created_at: time.Now()},
	{User_id: 3, Username: "dummy3", UserEmail: "dummy3@gmail.com", Hashed_pass: "hashed3", Updated_at: time.Now(), Created_at: time.Now()},
}
