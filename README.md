# 📘 Kraftshala Meeting Booking System – Backend Assignment
## 🚀 Overview
* This project is a backend service for managing users and scheduling meetings while preventing overlapping time slots.
* It is built as part of the Kraftshala Backend Developer Internship assignment and follows clean architecture principles with modular design.
---
### The system ensures:

* Reliable meeting scheduling

* No overlapping time slots

* Proper validation and error handling

* Scalable project structure
---
# 🛠 Tech Stack

* Node.js
* JavaScript
* Express.js
* Sequelize ORM
* SQLite (SQL Database)
* Nodemon
* dotenv
---  
## 📁 Project Structure
The project follows a feature-based modular structure:
```text
├── src/
│   ├── modules/
│   │   ├── user/         # User Management (DTOs, Models, Routes, Services)
│   │   └── meeting/      # Meeting Scheduling Logic
│   ├── middlewares/      # Global Error Handling & Validation
│   ├── config/           # Database Connection
│   ├── utils/            # Standardized API Responses
│   ├── app.js            # Express App Configuration
│   └── server.js         # Entry Point
├── .env                  # Environment Variables
└── database.sqlite       # Local Database File

```
---
### ⚙️ Installation & Setup
* Clone the Repository
```
git clone <your-repo-url>
cd kraftshala-booking-system
```
* Install Dependencies
```
npm install
```
* Configure Environment
```
Create .env file in root:

PORT=3000
DB_STORAGE=database.sqlite
```
* Run Server (Development)
```
npm run dev
```

** Server will start at:
http://localhost:3000

* API Endpoints
```
http://localhost:3000/api/v1
```

### User APIs
* Create User
```
POST /users

{
  "name": "Rohit Rai",
  "email": "rohit@gmail.com"
}
```
* Get User By ID
```
GET /users/:id/users/1
```
* Delete User
```
DELETE /users/:id/users/1
```
### Meeting APIs
* Create Meeting
```
POST /meetings
{
  "userId": 1,
  "title": "Project Meeting",
  "startTime": "2026-02-15T10:00:00.000Z",
  "endTime": "2026-02-15T11:00:00.000Z"
}
```

* List Meetings
```
GET /meetings
```

### Optional Filters:
```
/meetings?userId=1
/meetings?startDate=2026-02-15&endDate=2026-02-20
```

* Get Meeting By ID
```
GET /meetings/:id/meetings/2
```
* Update Meeting
```
PUT /meetings/:id
{
  "title": "Updated Meeting",
  "startTime": "2026-02-15T12:00:00.000Z",
  "endTime": "2026-02-15T13:00:00.000Z"
}
```
* Delete Meeting
```
DELETE /meetings/:id/meetings/2
```
---
### ✔ Validation Rules

* All required fields validated
* startTime < endTime enforced
* User existence checked
* Meaningful error response
* Proper HTTP status codes
---
###  Testing
#### APIs tested using:
* Thunder Client (VS Code)
* Postman (Optional)
---
#### Test cases include:
* Valid meeting creation
* Overlapping time validation
* Invalid user handling
* CRUD operations
---
### 📦 Submission
This repository is submitted as part of Kraftshala Internship Hiring Process.
Includes:

* Public GitHub Repository
* README Documentation
* Working API Demo
* Clean Architecture
* Database Design
---
### 👨‍💻 Author

* Rohit Kumar Rai
* Backend Developer Intern Applicant


