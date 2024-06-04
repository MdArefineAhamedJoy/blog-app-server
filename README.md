# My Blog App - Back-End

This repository contains the back-end code for the My Blog App project, which is a blog platform with user authentication and profile management features.

## Project Overview

- The back-end is built using Node.js, Express.js, and PostgreSQL.
- It provides the API endpoints required for user authentication, profile management, and blog post management.
- The application uses JWT (JSON Web Tokens) for user authentication and authorization.

## Features

- **User Authentication:** Register, login, and authenticate users using JWT.
- **User Profile Management:** Fetch, update user profile information, and list user's blog posts.
- **Blog Management:** Allow authenticated users to create, edit, and delete their own blog posts.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-blog-app-backend.git
   cd my-blog-app-backend
   npm install
   nodemon app.js
   ```

## API Endpoints

### Authentication

- `POST /register`: Register a new user.
- `POST /login`: Log in an existing user.

### Users

- `GET /users`: Get all users.

### Blogs

- `POST /blogs`: Create a new blog post.
- `POST /user/blogs`: Get blogs created by the logged-in user.
- `GET /blogs`: Get all blog posts.
- `GET /blogs/:id`: Get a blog post by ID.
- `PUT /blogs/:id`: Update a blog post.
- `DELETE /blogs/:id`: Delete a blog post.

### Profile

- `GET /profile`: Get the logged-in user's profile information.
- `PUT /profile/:email`: Update the logged-in user's profile information.
