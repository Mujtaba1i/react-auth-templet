const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 4000
const verifyToken = require('./middleware/verify-token')


// Controllers ===================================================================================================

const authCtrl = require('./controllers/auth')

// DB connection =================================================================================================
try {
    mongoose.connect(process.env.MONGODB_URI);
    mongoose.connection.on('connected', () => console.log(`Connected to MongoDB ${mongoose.connection.name}`));    
} catch (err) {
    console.log('Ran into an error: '+err)
}

// Middleware ====================================================================================================

app.use(cors());
app.use(express.json())
app.use(logger('dev'))

// Public Routes
app.use('/auth', authCtrl)



// Protected Routes
app.use(verifyToken)

app.get('/test', (req,res)=>{
    console.log(req.user.username)
    res.status(200).json({msg: 'Loggedin'})
})

app.listen(port, () => console.log('Listining on port 3000'))