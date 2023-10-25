const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

require('dotenv/config')

const app = express()

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // Enable credentials for cookies
}));
app.use(cookieParser());

// Import your route files
// const authMiddleware = require('./routes/authMiddleware');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const commentRoute = require('./routes/comments');
const categoryRoute = require('./routes/categories');

// Use your route files
// app.use(authMiddleware);
app.use(authRoute);
app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);
app.use(categoryRoute);

// db connection
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SoleHaven', //Collection Name
}).then(() => console.log("Connected to SoleHaven DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Server started at port: ${PORT}`) })
