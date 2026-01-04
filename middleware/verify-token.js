function verifyToken (req,res,next) {
    console.log('Verify Token Middleware')
    next()
}

module.exports = verifyToken;