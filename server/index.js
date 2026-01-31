// server/index.js
require('dotenv').config(); // load env early
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// CORS - set allowed origin via CLIENT_URL env var
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

// JSON body parsing
app.use(express.json());

// connect to database
connectDB();

// Basic health-check route
app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// TODO: require and use your existing routes here
// Example:
// const usersRouter = require('./routes/users');
// app.use('/api/users', usersRouter);

// Global error handler (ensure defined in middleware folder)
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
