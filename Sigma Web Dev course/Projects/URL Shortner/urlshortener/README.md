# 🔗 URL Shortener

![URL Shortener](https://img.shields.io/badge/URL_Shortener-Project-blue?style=for-the-badge)

A full-stack web application that transforms long URLs into short, easily shareable links. Built as part of the **Sigma Web Development Course**, this project demonstrates my ability to build real-world services with React, Node.js, Express, and MongoDB.

---

## 🚀 Project Overview

The URL Shortener helps users:  
- Paste a long URL and generate a short link.  
- Store the mapping in a backend database for future retrieval.  
- Redirect users from the short link to the original URL seamlessly.  

This project gives a practical look into how link-shortening services work — covering full stack architecture, API creation, database integration, and UI logic.

---

## ✨ Features

- ➕ Create a new short link by submitting a long URL  
- 🔍 View list of generated short links and their corresponding long links  
- 🔁 Redirect functionality — short link navigates to the original URL  
- ✅ Validation for URL format before processing  
- 📱 Responsive user interface built with Tailwind CSS  
- 🌐 Backend built using Express.js, with MongoDB for storing URL records  
- 🔐 Environment variable support for database & API keys (if used)  

---

## 🧰 Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | React.js, Tailwind CSS        |
| Backend    | Node.js, Express.js           |
| Database   | MongoDB                       |
| Utilities  | `axios` / `fetch()`           |
| Deployment | (Optional) Vercel / Render    |

---

## 🛠️ Setup & Installation

### 1. Clone the repository  
```bash
git clone https://github.com/Namit-07/Web-Dev.git
cd "Sigma Web Dev course/Projects/URL Shortner/urlshortener"
```


2. Install dependencies
```bash
npm install
```

3. Setup environment variables
Create a .env file in the backend directory and add:
```bash
DATABASE_URL=<your_mongodb_uri>
```


4. Run the backend server
```bash
cd backend
node index.js
```


6. Run the frontend app
```bash
cd frontend
npm start
```
Visit http://localhost:3000 and test the URL Shortener functionality.

## 📸 Preview
<span align="center"> ![Shortener UI](https://github.com/Namit-07/Web-Dev/blob/main/Sigma%20Web%20Dev%20course/Projects/URL%20Shortner/urlshortener/public/Screenshot%202025-10-21%20164059.png) *Enter a long URL → get a short link → copy/share it!* </span>

## 🧠 What I Learned
- Connecting frontend forms with backend APIs for CRUD operations
- Handling URL redirection logic and backend routing in Express
- Persisting data with MongoDB and using environment variables securely
- Building responsive UI using React + Tailwind CSS
- Structuring project folders and deployment-ready codebase

## 🔮 Future Enhancements
- 🔍 Link analytics (click counts, referrers, etc.)
- 🎨 User authentication + personalized link dashboard
- ☁️ Short link custom alias creation
- ⚡ Cache short links for faster redirection (Redis)
- 🔐 Expiry feature for short links and link management
- 🚀 Deploy full app (frontend + backend) publicly

## 📬 Connect With Me
```bash
“Great services start with small, smart features — this URL Shortener is one step closer to building full-scale web products.”
```

<p align="center"> <a href="https://github.com/Namit-07"><img src="https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github"></a> <a href="https://www.linkedin.com/in/namit-tickoo-69b2a9367/"><img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin"></a> </p>
<p align="center">
  ✨ Built by <b>Namit Tickoo</b> — as part of the Sigma Web Development journey. ✨</p>
<p align="center">
⭐ If you found this project inspiring or useful, feel free to give it a star! </p>
