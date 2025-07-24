package data

import (
	"fmt"
	"my-backend/models"
	"my-backend/lib/hashPass"
)

hash1, err := GenerateFromPassword("dummy1")
if err != nil {
	fmt.Println("Error hashing password for dummy1:", err)
}
hash2, _ := GenerateFromPassword("dummy2")
hash3, _ := GenerateFromPassword("dummy3")

var DummyUsers = []models.User{
	{Username: "dummyUser1", Email: "dummy1@gmail.com", HashedPassword: hash1},
	{Username: "dummyUser2", Email: "dummy2@gmail.com", HashedPassword: hash2},
	{Username: "dummyUser3", Email: "dummy3@gmail.com", HashedPassword: hash3}
}

