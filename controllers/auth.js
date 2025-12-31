const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/sign-out', async (req, res) => {
  try {

  } catch (err) {
    console.error(err)
    res.status(500).json({err:err.message})
  }
})

router.post('/sign-up', async (req, res) => {
  try {
    const { username, password } = req.body
    const userInDatabase = await User.findOne({ username })

    if (userInDatabase) return res.status(409).json({err:'Username or Password is invalid'})
    const hashPassword = bcrypt.hashSync(password, 12)
    req.body.password = hashPassword
    const user = await User.create(req.body)
    
    res.status(201).json({user})

  } catch (err) {
    console.error(err)
    res.status(500).json({err:err.message});
  }
})

router.post('/sign-in', async (req, res) => {
  try {
    const { username, password } = req.body
    const userInDatabase = await User.findOne({ username });
    const isValidPassword = bcrypt.compareSync(password, userInDatabase.password)
    
    if (!userInDatabase) return res.status(500).json({err:'Username or Password is invalid'})
    if (!isValidPassword) return res.status(500).json({err:'Username or Password is invalid'})
    

  } catch (err) {
    console.error(err)
    res.status(500).json({err:err.message})
  }
})

module.exports = router