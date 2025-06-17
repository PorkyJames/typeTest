This file is for database diagram documentation only and is not valid Go code.

Table user {
    user_id int [pk]
    username varchar
    email varchar
    password varchar
    updated_at datetime
    created_at datetime
}

Table auth {
    user_id int
    username varchar
    user_email varchar
    hashed_pass varchar
    updated_at datetime
    created_at datetime
}

Table session {
    jwt_id int [pk]
    user_id int
    issued_at datetime
    expires_at datetime
}

Ref: "user"."user_id" < "session"."user_id"
Ref: "user"."user_id" < "auth"."user_id"
