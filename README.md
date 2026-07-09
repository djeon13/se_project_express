## WTWR (What to Wear?) Backend

This project is the backend server for the WTWR (What to Wear?) application. Built with Node.js, Express, and MongoDB, it provides a RESTful API for managing users and clothing items, including creating, retrieving, deleting, and liking items.

## Technologies Used

Node.js
Express.js
MongoDB
Mongoose

## API Routes

-Users
GET /users
GET /users/:userId
POST /users

-Clothing Items
GET /items
POST /items
DELETE /items/:itemId
PUT /items/:itemId/likes
DELETE /items/:itemId/likes

## Demo Video

This video shows the WTWR backend API, including creating users, managing clothing items, and liking or unliking items through the available endpoints. It also showcases the application's database interactions, request validation, and error handling using Postman.

[Watch the Demo Video](https://www.loom.com/share/3b743e42dbcc4821954cc32dd2cc6b92)
