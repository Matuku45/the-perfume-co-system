Below is a VERY DETAILED, FINAL, FULL README.md suitable for:

✅ University submission

✅ Portfolio project

✅ Real startup / production repo

✅ GitHub public repository

You can copy–paste this exactly as README.md.

🌸 The Perfume Co System

The Perfume Co System is a modern, full-stack e-commerce web application designed for selling perfumes online.
It provides a seamless shopping experience for customers and a powerful administrative dashboard for managing products, users, orders, and payments.

The system is built using React (Frontend) and Node.js with Express (Backend) and integrates the Ozow Payment Gateway for secure online payments.

📌 Table of Contents

Project Overview

Features

System Architecture

Technology Stack

Frontend Pages

Backend Structure

Database Design

Payment Integration

API Endpoints

Environment Variables

Installation & Setup

Deployment

Security

Future Enhancements

Author

License

🧾 Project Overview

The Perfume Co System was developed to address the growing demand for online fragrance shopping by providing:

A clean and responsive user interface

Secure authentication and authorization

Product and order management

Online payment processing

Scalable backend architecture

✨ Features
👤 Customer Features

Browse perfumes by category and brand

View product details

Add products to cart

Secure checkout process

Online payment via Ozow

View order history

User authentication (Login / Register)

🧑‍💼 Admin Features

Admin authentication

Dashboard overview

Add, update, and delete products

Manage customer orders

Manage users

Track payment status

🏗️ System Architecture

The system follows a Client–Server Architecture with a RESTful API.

Client (React)
     |
     |  HTTP / JSON
     |
Backend (Node.js + Express)
     |
     |
Database (MongoDB)

Architecture Pattern

MVC (Model–View–Controller)

REST API

🧑‍💻 Technology Stack
Frontend

React.js

Vite

JavaScript (ES6+)

HTML5

CSS3

Tailwind CSS

Axios

React Router DOM

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Tokens)

bcrypt.js

Multer

Cloudinary

Ozow Payment Gateway

dotenv

CORS

Tools & Platforms

Git & GitHub

Postman

MongoDB Atlas

Render / Railway

Netlify / Vercel

📄 Frontend Pages
Customer Pages

Home Page

Products Page

Product Details Page

Cart Page

Checkout Page

Payment Redirect Page

Payment Success Page

Payment Failed Page

Login Page

Register Page

User Dashboard (Orders & Profile)

Admin Pages

Admin Login Page

Admin Dashboard

Manage Products Page

Manage Orders Page

Manage Users Page

⚙️ Backend Structure
server/
│── config/
│   ├── db.js
│   ├── ozow.js
│
│── controllers/
│   ├── auth.controller.js
│   ├── product.controller.js
│   ├── order.controller.js
│   ├── payment.controller.js
│
│── models/
│   ├── User.js
│   ├── Product.js
│   ├── Order.js
│   ├── Payment.js
│
│── routes/
│   ├── auth.routes.js
│   ├── product.routes.js
│   ├── order.routes.js
│   ├── payment.routes.js
│
│── middleware/
│   ├── auth.middleware.js
│   ├── admin.middleware.js
│
│── utils/
│   ├── hash.js
│
│── app.js
│── server.js
│── .env

🗄️ Database Design
User Collection

name

email

password

role (admin / customer)

createdAt

Product Collection

name

brand

price

stock

description

imageUrl

createdAt

Order Collection

userId

products

totalAmount

orderStatus

createdAt

Payment Collection

orderId

transactionReference

amount

paymentStatus

paymentDate

💳 Payment Integration (Ozow)
Payment Flow

Customer places order

Backend generates Ozow hash

Customer is redirected to Ozow

Payment processed by Ozow

Ozow sends callback to backend

Order status updated automatically

🌐 API Endpoints
Authentication
POST /api/auth/register
POST /api/auth/login

Products
GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id

Orders
POST /api/orders
GET  /api/orders/user
GET  /api/orders/all

Payments
POST /api/payments/ozow
POST /api/payments/notify

🔐 Environment Variables

Create a .env file in the server directory:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

OZOW_SITE_CODE=your_site_code
OZOW_PRIVATE_KEY=your_private_key
OZOW_URL=https://stagingapi.ozow.com

🚀 Installation & Setup
Clone Repository
git clone https://github.com/yourusername/the-perfume-co-system.git

Backend Setup
cd server
npm install
npm run dev

Frontend Setup
cd client
npm install
npm run dev

☁️ Deployment

Frontend: Netlify / Vercel

Backend: Render / Railway

Database: MongoDB Atlas

🔒 Security Measures

Password hashing (bcrypt)

JWT authentication

Role-based authorization

Secure payment handling

Environment variable protection

📈 Future Enhancements

Product reviews and ratings

Promo codes and discounts

Delivery tracking

Email notifications

Mobile application

Advanced analytics dashboard

👨‍💻 Author

Thabiso Mapoulo
Computer Science Graduate
Full Stack Developer

📜 License

This project is licensed under the MIT License.