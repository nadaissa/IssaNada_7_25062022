//general imports
//bcrypt is used to crypt passwords
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//database configurations import
const db = require("../models/index");

//file system import to delete or modify users
const fs = require('fs');

//Model import
const { User } = db.sequelize.models;

//signup function export to be used in routes file
exports.signup = (req, res, next) => {
    User.findOne({ where: { email : req.body.email } })
    .then((user) => {
        if(user) {
            return res.status(401).json({
                message : "Cet utilisateur existe déjà"
            }); 
        } else {
            //hashing the password
            bcrypt.hash(req.body.password, 10)
            .then(hash => {
                User.create({
                    email : req.body.email,
                    password: hash,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    bio: req.body.bio,
                    admin: req.body.admin

                })
            //saving the user in the DB
            .then(user =>{
                res.status(201).json({ 
                    message: "Utilisateur créé!",
                    token: jwt.sign(
                        { userId: user.id },
                        process.env.SECRET_TOKEN,
                        { expiresIn: '24h' }
                        )                    
                })
            })
            .catch((error) => res.status(400).json({ error }));
            })
            .catch(error => res.status(500).json({ error }));
        }
    })
};

//login function export to be used in routes file
exports.login = (req, res, next) => {
  
    User.findOne({ where: { email : req.body.email } })
        .then((user) => {
            if(!user) {
                return res.status(401).json({
                    loggedIn: false,
                    message : "Utilisateur non trouvé!"
                });
            } 
            else {
                bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if(!valid) {
                        return res.status(401).json({
                            loggedIn: false,
                            message : "Mot de passe incorrect !"
                        });
                    }
                    else {
                    res.status(200).json({
                        loggedIn: true,
                        message: "Vous êtes connecté(e)!",
                        firstName: user.firstName,
                        userId: user.id,
                        token: jwt.sign(
                        { userId: user.id, admin: user.admin },
                        process.env.SECRET_TOKEN,
                        { expiresIn: '24h' }
                    ),
                    admin: user.admin
                    });
                    }
                })
                .catch(error => res.status(501).json({ error }));
            }
        })
        .catch(error => res.status(500).json({ error }));
};

exports.logout = (req, res, next) => {
   
                res.status(200).json({
                    token: null
                })
    }


//display all users export
exports.getAllUsers = (req, res, next) => {
    User.findAll({
        //defining the order of display (according to last name from A to Z)
        order: [['lastName', 'ASC']],
        attributes: {
            exclude: [
                'password',
                'email'
            ]
        },
        })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
};

//display specific user export - find by primary key and display only non-sensitive infos 
exports.getOneUser = (req, res, next) => {
    User.findByPk(
        req.params.id,
        {
            attributes: {
                exclude: [
                    'password',
                    'email'
                ]
            }
        }
    )
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};





      

