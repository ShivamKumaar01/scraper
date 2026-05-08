# Hacker News Scraper MERN Application

This is a full-stack MERN application that scrapes top stories from Hacker News and allows users to authenticate, bookmark stories, and manage bookmarks.

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Pagination](#pagination)
- [Running the Project](#running-the-project)
- [Important Notes](#important-notes)

---

# Tech Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- Cheerio

## Frontend

- React.js
- React Router DOM
- Axios
- Material UI (MUI)
- Yup Validation
- React Context API

---

# Features

## Web Scraper

- Scrapes top 10 stories from Hacker News
- Extracts:
  - Title
  - URL
  - Points
  - Author
  - Posted Time
- Stores stories in MongoDB
- Automatically runs on server start
- Can also be triggered manually using API

## Authentication

- User Registration
- User Login
- JWT Authentication
- HTTP-only Cookies

## Stories

- Fetch all stories
- Fetch single story
- Pagination support
- Stories sorted by points in descending order

## Bookmarks

- Toggle bookmark
- Protected bookmark route
- Bookmark persistence using backend API

## Frontend

- Login & Signup Pages
- Form Validation using Yup
- Material UI Components
- Toast Notifications
- Protected Routes
- Responsive Story Cards
- Fixed Navbar

---

# Getting Started

These instructions will help you set up and run the project on your local machine.

---

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB

---

# Backend Setup



1. Clone the repository:

   ```bash
   git clone https://github.com/ShivamKumaar01/scraper.git
   ```

2. Navigate into the project directory:

   ```bash
   cd backend
   ```

3. Create a `.env` file in the root of the project by copying the example file and update it with your configuration settings:

   ```sh
   cp .env.example .env
   ```

4. start the server
  ```sh
   npm start
   ```


# Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ShivamKumaar01/scraper.git
   ```

2. Navigate into the project directory:

   ```bash
   cd frontend
   ```

3. Create a `.env` file in the root of the project by copying the example file and update it with your configuration settings:

   ```sh
   cp .env.example .env
   ```

4. start the frontend
  ```sh
   npm run dev
   ```

