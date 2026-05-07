# HealthTech Prescription Management System

## Description
A backend-based HealthTech Prescription Management System developed using Node.js, Express.js, and SQLite3 following MVC architecture.

The system supports:
- Doctor login
- Patient registration and login
- Prescription management
- Role-based authorization

---

## Technologies Used
- Node.js
- Express.js
- SQLite3
- JWT
- bcryptjs

---

## Features

### Doctor
- Login
- Create prescriptions
- Update prescriptions
- View own prescriptions

### Patient
- Register
- Login
- View assigned prescriptions

---

## Installation

```bash
npm install
npm run dev
````

---

## API Routes

### Auth Routes

* POST /api/auth/register
* POST /api/auth/login

### Prescription Routes

* POST /api/prescriptions
* PUT /api/prescriptions/:id
* GET /api/prescriptions/doctor
* GET /api/prescriptions/patient

---

## Security

* JWT Authentication
* Password Hashing
* Role-Based Access Control

---

## Output

* Source Code
* schema.sql
* queries.sql
* Screenshots in the doc file of healthtech-prescription-system

