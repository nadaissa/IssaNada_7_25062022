//the token verificator
const jwt = require('jsonwebtoken');

//authorization protection routes based on the identification of the secret token
//and on the coparasion of the token of users to prevent modification of a post
//by other users than the post creator
module.exports = (req,res, next) => {
    try {
        //requesting and decoding the token from headers
        const token = req.headers.authorization.split(' ')[1];
        req.token = jwt.verify(token, `${process.env.SECRET_TOKEN}`);
        if (req.body.userId && req.query.userId !== req.token.userId) {
            throw 'User ID non valable !'
        } else {
            next();
        }
    } catch (error){
        res.status(401).json({ error: error | 'Requête non authentifiée!' })
    }
};

