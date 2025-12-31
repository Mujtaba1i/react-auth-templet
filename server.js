const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const app = express();

try {
    mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on('connected', () => console.log(`Connected to MongoDB ${mongoose.connection.name}`));    
} catch (err) {
    console.log('Ran into an error: '+err)
}

app.use(cors());
app.use(express.json())
app.use(logger('dev'))

// Routes go here





app.listen(3000, () => console.log('Listining on port 3000'))