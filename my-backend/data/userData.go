package data

import (
	"my-backend/lib"
	"my-backend/models"
)

func CreateUserData() []models.User {
	hash1, _ := auth.Hash("dummy1")
	hash2, _ := auth.Hash("dummy2")
	hash3, _ := auth.Hash("dummy3")

	return []models.User{
		{Username: "dummyUser1", Email: "dummy1@gmail.com", HashedPassword: hash1},
		{Username: "dummyUser2", Email: "dummy2@gmail.com", HashedPassword: hash2},
		{Username: "dummyUser3", Email: "dummy3@gmail.com", HashedPassword: hash3},
	}
}
