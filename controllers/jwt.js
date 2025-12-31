const express = require('express');
const router = express.Router()

router.get('/sign-token', (req,res)=>{
    res.json({msg: 'Welcome in'})
})

module.exports = router