# WTWR (What to Wear?): Back End

This project is the backend server for the WTWR (What to Wear?) application. The server handles API requests, stores data in MongoDB, and manages users and clothing items. The backend was built using Node.js, Express, and Mongoose.

## Features

- Express server configured with hot reload using Nodemon
- MongoDB database connection using Mongoose
- User and clothing item schemas/models
- REST API routes for users and clothing items
- Create, retrieve, and delete clothing items
- Create and retrieve users
- Like and unlike clothing items
- Temporary authorization middleware using a test user ID
- Error handling for invalid requests, missing resources, and server errors
- Validation for user avatars and clothing item image URLs
- ESLint + Prettier configuration for code consistency
- API testing using Postman collections

## API Routes

### Users

- `GET /users` → Returns all users
- `GET /users/:userId` → Returns a user by ID
- `POST /users` → Creates a new user

### Clothing Items

- `GET /items` → Returns all clothing items
- `POST /items` → Creates a new clothing item
- `DELETE /items/:itemId` → Deletes a clothing item
- `PUT /items/:itemId/likes` → Likes a clothing item
- `DELETE /items/:itemId/likes` → Removes a like from a clothing item

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- ESLint
- Prettier
- Nodemon
- Postman
