# Backend - Password Manager

This is the backend server for the Password Manager project, built with Node.js, Express, and MongoDB.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)

## Technologies Used
- **Express.js**: Web framework for Node.js
- **Mongoose**: ODM for MongoDB
- **dotenv**: For managing environment variables
- **cors**: Middleware for Cross-Origin Resource Sharing
- **body-parser**: Middleware for parsing request bodies

### Installation:
1. Navigate to the backend directory:
```
cd backend
```

2. Install dependencies:
```
npm install
```

### Environment Variables
Create a `.env` file in the backend directory and add the following variables:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Running the Server

To start the backend server, run:
```
npm start
```

This will start the server on `http://localhost:5000`.