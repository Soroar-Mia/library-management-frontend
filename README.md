# 📚 Minimal Library Management System

A fully functional, clean, and responsive **Library Management System** built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript** for the frontend, and **Node.js**, **Express**, and **MongoDB** for the backend. This system enables public access to book listings and core borrowing functionalities — all without authentication.

---

## 🚀 Project Features

### 🛠️ Book Management
- **View All Books**: Tabular display with essential book details: Title, Author, Genre, ISBN, Copies, Availability.
- **Add New Book**: Form interface to add books with immediate UI update on creation.
- **Edit Book**: Modify existing book information. Business logic ensures if copies = 0, the book is marked unavailable.
- **Delete Book**: Confirmation-based book removal.
- **Borrow Book**: Form to borrow copies of a book, enforcing availability rules.

### 📖 Borrow Management
- **Borrow Form**: Accepts quantity and due date. Quantity cannot exceed available copies.
- **Availability Logic**: Marks books unavailable if copies reach zero.
- **Borrow Summary**: Aggregated data showing total books borrowed per title.

### 📄 Routes Overview
| Route | Description |
|-------|-------------|
| `/books` | List all books with edit/delete/borrow options |
| `/create-book` | Add a new book |
| `/books/:id` | View single book details |
| `/edit-book/:id` | Edit a book |
| `/borrow/:bookId` | Borrow a book |
| `/borrow-summary` | View borrow summary |

---

## 🧩 Technical Stack

### ⚛️ Frontend
- **React + TypeScript**
- **Redux Toolkit + RTK Query**
- **Tailwind CSS** (for responsive and minimalist UI)

### 🌐 Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **MVC Architecture**
- **RESTful API**

---
