# AP22110010455 - Backend

## Project Overview

This repository contains the backend for the project **AP22110010455**. The backend is built using **Node.js** and **Express.js**, offering RESTful APIs for handling user authentication, post management, and other essential services.

## Installation

To set up the backend:

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd AP22110010455/Backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Setup environment variables**:
    Create a `.env` file in the root directory and configure the necessary environment variables (e.g., database connection, JWT secret). Example:
    ```bash
    DB_URI=mongodb://localhost:27017/database_name
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

The backend server will start running on the default port (typically `3000`), or the port specified in your `.env` file.

## API Endpoints

### User Endpoints
- **GET** `/api/users`: Fetch all users.
- **POST** `/api/users`: Create a new user.
- **GET** `/api/users/:id`: Fetch a specific user by ID.

### Post Endpoints
- **GET** `/api/posts`: Fetch all posts.
- **POST** `/api/posts`: Create a new post.
- **GET** `/api/posts/:id`: Fetch a specific post by ID.

## API Testing

Use Postman to test the following API endpoints:

### 1️⃣ Test Get Users API
**Request:**
- Method: GET
- URL: `http://20.244.56.144/test/users`
- Headers:
  - Authorization: `Bearer <YOUR_API_KEY>`

**Expected Response:**
```json
{
   "users": {
     "1": "John Doe",
     "2": "Jane Doe",
     "3": "Alice Smith"
   }
}


![1](https://github.com/user-attachments/assets/e247ef61-a11b-462d-8ed3-45e34361f19d)
![2](https://github.com/user-attachments/assets/0dac2e00-e120-4611-ae96-69b2a5802f04)
![3](https://github.com/user-attachments/assets/8349bfd3-090c-4150-9cb1-20fe3bec5441)
![4](https://github.com/user-attachments/assets/f9cedb26-0b4c-4f6c-b94f-ed20d389daf7)
![5](https://github.com/user-attachments/assets/3f4d9b27-0ad1-455e-baee-cc1621813a83)
![6](https://github.com/user-attachments/assets/b7c2ce4f-07aa-4dfa-b1a2-bc6ade750d4b)




