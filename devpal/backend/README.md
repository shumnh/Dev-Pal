<div align="center">
  <h1>🚀 DevPal Backend API</h1>
  <p><strong>Enterprise-grade backend for the DevPal mentorship platform</strong></p>
  
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green.svg)](https://mongodb.com/)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  
</div>

## 🎯 Overview

DevPal Backend is a robust, scalable RESTful API that powers the DevPal platform - connecting beginner developers with experienced mentors through an asynchronous Q&A system. Built with enterprise-grade architecture and modern best practices.

### ✨ Key Features

- 🔐 **Secure Authentication** - JWT-based auth with refresh tokens
- 👥 **User Management** - Role-based access control (Beginner/Mentor)
- 💬 **Query System** - Advanced Q&A with tagging and search
- 🔔 **Real-time Notifications** - Async notification system
- 📊 **Analytics Ready** - Comprehensive logging and metrics
- 🛡️ **Production Security** - Rate limiting, CORS, data validation
- 🧪 **Test Coverage** - Unit, integration, and E2E testing
- 📖 **API Documentation** - OpenAPI/Swagger specs

## 🏗️ Architecture

### Clean Architecture Principles

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. Navigate to backend directory:
```bash
cd devpal/backend
```

2. Set up environment variables:
```bash
cp env.example .env
# Edit .env with your configuration
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```

## 📋 Features (MVP)

- ✅ User Authentication (JWT)
- ✅ User Profiles (Beginner/Mentor)
- ✅ Post Code Queries
- ✅ Mentor Replies
- ✅ Notifications
- ✅ Search & Filter Queries
- ✅ CRUD Operations

## 🛠️ Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Zod
- **Testing:** Jest


## 🤝 Contributing

1. Follow the folder structure
2. Use meaningful commit messages
3. Write tests for new features
4. Follow the coding standards

## 📄 License

MIT License

## 📁 Project Structure 