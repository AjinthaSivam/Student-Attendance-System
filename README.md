# Student Attendance System

## Overview

This project is a Student Attendance System built with FastAPI for the server(backend) and React for the client(frontend). The system allows students to log in and view a welcome message. This project demonstrates the use of JWT authentication, password hashing, and handling CORS in FastAPI.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Python 3.8+
- Node.js
- npm or yarn

### Installation

Clone the repository:

```
git clone https://github.com/your-username/student-attendance-system.git
cd student-attendance-system
cd attendance-system
```

## Running the Project

### Server

Navigate to the server directory:
```
cd backend
```

Create a virtual environment and activate it:
```
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

Install the dependencies:
```
pip install -r requirements.txt
```

Run the FastAPI server:
```
uvicorn login:app --reload
```

### Client

Navigate to the client directory:
```
cd client
```

Install the dependencies:
```
npm install
```
```
npm install axios react-router-dom
```

Run the React development server:
```
npm start
```

The client should now be running on http://localhost:3000 and the server on http://127.0.0.1:8000.

## Login Credentials
### Use the following credentials for testing purposes:

- { Username: harry, Password: harry123 }

- { Username: john, Password: john123 }

- { Username: maria, Password: maria123 }

## API Endpoints

### Authentication
- POST /api/token: Obtain a JWT token.
- Request body: username, password

### Student
- GET /api/student: Retrieve the logged-in student's information.
- Headers: Authorization: Bearer <token>
