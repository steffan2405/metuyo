# Metuyo

Make any event simple

## MongoDB

MongoDB ATLAS

## Database API-Schema

### Auth

Method | endpoint       | Description
------ | -------------- | --------------------------
POST   | `/auth/signup` | Sign-up with new user data
POST   | `/auth/signin` | sign-in with user data
POST   | `/auth/chek`   | check token

### Users

Method | endpoint     | Description
------ | ------------ | -----------
GET    | `/users`     | Get All
GET    | `/users/:id` | get by:id
PUT    | `/users/:id` | update one

### Event

Method | endpoint     | Description
------ | ------------ | ----------------
GET    | `/event`     | Get All
GET    | `/event/:id` | get by:id
POST   | `/event`     | post by: user id
DELETE | `/event/:id` | delete by:id
PUT    | `/event/:id` | update one

Method | endpoint                   | Description
------ | -------------------------- | ------------
GET    | `/event/:id/join`          | Get All
GET    | `/event/:id/join/:user_i`d | get by:id
DELETE | `/event/:id`               | delete by:id

Method | endpoint                       | Description
------ | ------------------------------ | ------------
Put    | `/event/:id/not-join/:user_id` | Update by id
