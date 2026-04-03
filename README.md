#  Vendor Management System (Backend)

A scalable backend system to manage vendors, employees, and invoices with secure authentication and role-based access control.

---

##  Project Overview

This project is a backend system built using Node.js and MongoDB. It allows admins and employees to manage vendors and their invoices, while vendors can securely access their own data.

This system simulates a real-world business workflow where internal users manage external vendors.

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (Password Hashing)
* Multer (File Upload - upcoming)

---

##  Features

###  Admin

* Login securely
* Create employees
* Create vendors
* View all vendors
* Upload invoices

###  Employee

* Login securely
* Create vendors
* View vendors
* Upload invoices

###  Vendor

* Login using credentials
* View own profile
* Access own invoices

---

##  Core Concepts Implemented

* Role-Based Access Control (RBAC)
* JWT Authentication (Access + Refresh Tokens)
* Secure password hashing using bcrypt
* REST API design
* MVC architecture
* Middleware-based authorization
* Clean and scalable folder structure

---

##  Authentication Flow

1. User logs in using email & password
2. Server verifies credentials using bcrypt
3. Access Token (short-lived) is generated
4. Refresh Token (long-lived) is stored in HTTP-only cookies
5. Protected routes are accessed using JWT

---

##  API Endpoints (Sample)

### Auth

* POST /api/auth/login

### Users

* POST /api/users/create-employee (Admin only)

### Vendors

* POST /api/vendors/create (Admin & Employee)
* GET /api/vendors
* GET /api/vendors/:id

### Invoices (Upcoming)

* POST /api/invoices/upload
* GET /api/invoices/vendor/:id

---

##  Security Practices

* Passwords are hashed using bcrypt
* Sensitive data is stored in .env file
* HTTP-only cookies for refresh tokens
* Role-based route protection
* Input validation

---

##  Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm run dev
```

---

## 📈 Future Improvements

* Vendor self-registration with OTP
* Email integration
* Invoice PDF preview & download
* Cloud storage (AWS S3 / Cloudinary)
* Admin dashboard analytics
* Role permission customization
* Audit logs & activity tracking

---

##  Contribution

Feel free to fork this repository and contribute. Suggestions and improvements are welcome.

---

##  Contact

For any queries or collaboration:

* Email: vimaljass8@gmail.com
* GitHub: https://github.com/vimal-jass

---

##  Final Note

This project is built for learning and real-world backend practice. It demonstrates how scalable systems are designed with proper architecture and security in mind.

---
