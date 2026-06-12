# Task Management Application

## Overview

The Task Management Application is a full-stack web application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). It allows users to securely manage their daily tasks through authentication and complete CRUD (Create, Read, Update, Delete) operations.

The application provides a simple and user-friendly interface for creating, viewing, updating, and deleting tasks while ensuring secure access through JWT-based authentication.

---

## Features

### User Authentication & Authorization

* User Registration
* User Login
* JWT (JSON Web Token) Authentication
* Protected Routes

### Task Management

* Create Tasks
* View Tasks
* Update/Edit Tasks
* Delete Tasks
* Persistent Data Storage

### Database Integration

* MongoDB Atlas Cloud Database
* Secure Data Storage
* User-specific Task Management

### User Interface

* Responsive Design
* Clean and Simple Dashboard
* Real-time Task Updates on User Actions

---

## Technology Stack

### Frontend

* React.js
* Axios
* React Router DOM
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcryptjs

---

## Project Structure

TaskManager/

├── backend/

│ ├── controllers/

│ ├── middleware/

│ ├── models/

│ ├── routes/

│ ├── server.js

│ └── .env

│

├── frontend/

│ ├── src/

│ ├── public/

│ └── package.json

│

└── README.md

---

## Installation and Setup

### Clone the Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Tasks

* GET /api/tasks
* POST /api/tasks
* PUT /api/tasks/:id
* DELETE /api/tasks/:id

---

## Learning Outcomes

Through this project, I gained practical experience in:

* Full-Stack MERN Development
* REST API Design and Integration
* MongoDB Database Operations
* JWT Authentication and Authorization
* Frontend and Backend Integration
* CRUD Operations Implementation
* State Management in React
* Secure User Authentication

---

## Future Enhancements

* Task Status Tracking
* Task Categories and Priorities
* Due Date Management
* Search and Filter Functionality
* Real-Time Updates using WebSockets
* Email Notifications

---

## Author

Developed as part of an Internship Project Assignment using the MERN Stack.
