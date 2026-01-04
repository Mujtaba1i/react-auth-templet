const jwt = require('jsonwebtoken')

function verifyToken (req,res,next) {
    try {
        console.log('Verifing Token')
        const token =req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decodedToken)
        req.user = decodedToken.payload
        next()
    } catch (err) {
        console.log('Verifing Token has failed')
        res.status(403).json({err:err.message})
    }
}

module.exports = verifyToken;