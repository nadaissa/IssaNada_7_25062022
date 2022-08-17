const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // recuperer le token dans le header authorization
        const token = req.headers.authorization.split(' ')[1];
        // décodage du token
        req.token = jwt.verify(token, `${process.env.JWT_KEY}`);
        // renvoi erreur si pas de correspondance entre userId
        if (req.body.userId && req.body.userId !== req.token.userId) {
            throw "userId non valable (auth)!";
        // s'il y a correspondance, authentification effectuée
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error || "Requête non authentifiée !" });
    }
};