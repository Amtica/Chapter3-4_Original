// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI not set in environment');
    }

    // optional: configure mongoose general options
    mongoose.set('strictQuery', false);

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    // for production you might not want to exit immediately,
    // but for most apps failing to connect should exit.
    process.exit(1);
  }
};

module.exports = connectDB;
