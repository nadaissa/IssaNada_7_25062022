//password-validaton method to prevent non-secure passwords
const passwordValidation = require('password-validator');

//Creating and defining password model and conditions
const passwordSchema = new passwordValidation();

passwordSchema
.is().min(10)   // Minimum length 10                                 
.is().max(64)     // Maximum length 64                             
.has().uppercase()    // Must have uppercase letters                          
.has().lowercase()      // Must have lowercase letters                        
.has().digits()      // Must have digits                       
.has().not().spaces()     // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123', 'Password']); // Blacklist these values               

//password validation function
module.exports = (req, res, next) =>{
    if (!passwordSchema.validate(req.body.password)){
       res.status(400).json({ message: "Votre mot de pass n'est pas valide!"});
    } else {
        next();
    };
};
