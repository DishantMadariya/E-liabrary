# E-Library Management API

This is the backend API for the **E-Library Management Application**, developed using **Node.js**, **Express**, and **MongoDB**, following the **MVC architecture**. The API supports user authentication (JWT-based), book management (CRUD operations), and borrow/return functionality for library books.

## Features

- **User Authentication**: Users can register and log in using JWT-based authentication.
- **Book Management (CRUD)**: Create, read, update, and delete books from the library.
- **Borrow/Return Books**: Users can borrow or return books in the library.
- **Robust Error Handling**: API handles errors for invalid requests and operations.
- **Nodemon**: Development environment uses nodemon for automatic server restarts on file changes.

---

## Project Structure

```bash
E-liabrary/
│
├── controllers/     # Business logic for handling requests and responses
├── models/          # MongoDB schemas for User and Book collections
├── routes/          # API routes (authentication, book management)
├── middlewares/     # JWT authentication middleware
├── config/          # Database connection configuration
├── app.js           # Entry point of the application
├── package.json     # Project dependencies and scripts
└── .env             # Environment variables (e.g., MongoDB URI, JWT secret)
```

---

## Requirements

- **Node.js** v14.x or higher
- **MongoDB** (local or cloud instance, such as MongoDB Atlas)
- **npm** v6.x or higher

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/e-library-api.git
   cd e-library-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```bash
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key-for-jwt>
   PORT=5000
   ```

4. **Run the server**:
   You can start the server using nodemon for automatic restarts during development:
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:5000`.

---

## API Endpoints

### Authentication

- **Register** a new user:
  - `POST /api/auth/register`
  - Request body:
    ```json
    {
      "username": "john_doe",
      "password": "password123"
    }
    ```

- **Login** to get a JWT token:
  - `POST /api/auth/login`
  - Request body:
    ```json
    {
      "username": "john_doe",
      "password": "password123"
    }
    ```

### Books Management

- **Create** a new book:
  - `POST /api/books/`
  - Request body:
    ```json
    {
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian"
    }
    ```

- **Get** all books:
  - `GET /api/books/`

- **Update** a book:
  - `PUT /api/books/:id`
  - Request body:
    ```json
    {
      "title": "New Title"
    }
    ```

- **Delete** a book:
  - `DELETE /api/books/:id`

### Borrow/Return Books

- **Borrow** a book:
  - `POST /api/books/borrow/:id`
  - Request body:
    ```json
    {
      "userId": "userObjectId"
    }
    ```

- **Return** a book:
  - `POST /api/books/return/:id`

---

## Middleware

- **JWT Authentication**: Protects book management routes, ensuring only authenticated users can access or modify book data. Add your token in the `Authorization` header when accessing protected routes:
  ```bash
  Authorization: Bearer <your-token>
  ```

---

## Error Handling

The API returns appropriate error messages and status codes for the following cases:
- Invalid credentials for login
- Trying to borrow an already borrowed book
- Book not found for update/delete
- Invalid/missing token in protected routes

---

## Testing

You can use **Postman** or **cURL** to test the endpoints.

- To test book routes, first log in to get a token and include it in the `Authorization` header of your requests:
  ```
  Authorization: Bearer <your-jwt-token>
  ```

