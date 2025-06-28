package data

import (
	"my-backend/models"
	"time"
)

var DummyUsers = []models.User{
	{User_id: 1, Username: "dummyUser1", Email: "dummy1@gmail.com", Password: "dummy1", Updated_at: time.Now(), Created_at: time.Now()},
	{User_id: 2, Username: "dummyUser2", Email: "dummy2@gmail.com", Password: "dummy2", Updated_at: time.Now(), Created_at: time.Now()},
	{User_id: 3, Username: "dummyUser3", Email: "dummy3@gmail.com", Password: "dummy3", Updated_at: time.Now(), Created_at: time.Now()},
}
