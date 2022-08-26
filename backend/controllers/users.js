//general imports
//bcrypt is used to crypt passwords
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//database configurations import
const db = require("../models/index");

//file system import to delete or modify users
//const fs = require('fs');

//Model import
const { User } = db.sequelize.models;

//signup function export to be used in routes file
exports.signup = (req, res, next) => {
   
    //hashing the password
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        User.create({
            email : req.body.email,
            password: hash,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            bio: req.body.bio,
            picture: req.body.picture

        })
        //saving the user in the DB
        .then(user =>{
            res.status(201).json({ 
                token: jwt.sign(
                    { userId: user.id, admin: user.admin },
                    `${process.env.SECRET_TOKEN}`,
                    { expiresIn: '24h' }
                    )
            })
        })
            .catch((error) => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

//login function export to be used in routes file
exports.login = (req, res, next) => {
  
    User.findOne({ email : req.body.email })
        .then((user) => {
            if(!user) {
                return res.status(401).json({message : "Utilisateur non trouvé!"});
            } 
            else {
                bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if(!valid) {
                        return res.status(401).json({message : "Mot de passe incorrect !"});
                    }
                    else {
                    res.status(200).json({
                        token: jwt.sign(
                        { userId: user.id, admin: user.admin },
                        `${process.env.SECRET_TOKEN}`,
                        { expiresIn: '24h' }
                    )
                    });
                    }
                })
                .catch(error => res.status(501).json({ error }));
            }
        })
        .catch(error => res.status(500).json({ error }));
};




