const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const { authMiddleware } = require('./middlewares/authMiddleware');
const { connectDB } = require('./config/mongodb');
connectDB();
dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/books', authMiddleware, bookRoutes); // Protect book routes
app.use('/api/auth', authRoutes); // Public authentication routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
