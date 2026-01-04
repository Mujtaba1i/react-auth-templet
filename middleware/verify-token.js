function verifyToken (req,res,next) {
    console.log('Verify Token Middleware')
    console.log(req.headers.authorization);
    next()
}

module.exports = verifyToken;