import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

function Signup() {
    const Navigate = useNavigate('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setError] = useState('');
       const userSignup = async (e) =>
       {
        e.preventDefault();
        await Axios.post(
            'http://localhost:3001/api/auth/signup', 
            {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
                
            })
            .then((response) => {
                console.log(response.data.message);
                console.log(response);
                alert(response.data.message);
                Navigate('/login');
            })
            .catch((error) => {
                setError(error.response.data.message);
            })
    }

    return (
        <div className="main-content-wrapper" aria-label="contenu principal">
            
            <div className="login-area" aria-label="formulaire de connexion">
            <h1 className="login-area__h1" aria-label="titre formulaire connexion">Inscrivez-vous</h1>    
                <form className="login-area__form" action="#" method="POST" encType="multipart/form-data">
                    <div className="login-area__firstName login-area__group">
                        <label className="login-area__label" htmlFor="firstName">Prénom:</label>
                        <input 
                            className="login-area__input" 
                            id="firstName" 
                            name="fistName" 
                            type="text" 
                            size="30" 
                            onChange={(event) => 
                                {setFirstName(event.target.value)}
                                }
                        />
                    </div>
                    <div className="login-area__lastName login-area__group">
                        <label className="login-area__label" htmlFor="lastName">Nom:</label>
                        <input 
                            className="login-area__input" 
                            id="lastName" 
                            name="lastName" 
                            type="text" 
                            size="30"
                            onChange={(event) => 
                                {setLastName(event.target.value)}
                                }
                        />
                    </div>
                    <div className="login-area__mail login-area__group">
                        <label className="login-area__label" htmlFor="email">Email:</label>
                        <input 
                            className="login-area__input" 
                            id="email" 
                            name="email" 
                            type="text" 
                            size="30"
                            onChange={(event) => 
                                {setEmail(event.target.value)}
                                } 
                        />
                    </div>
                    <div className="login-area__pass login-area__group">
                        <label className="login-area__label" htmlFor="password">Mot de passe:</label>
                        <input 
                            className="login-area__input" 
                            id="password" 
                            name="password" 
                            type="password" 
                            size="30"
                            onChange={(event) => 
                                {setPassword(event.target.value)}
                                } 
                        />
                    </div>
                    <button 
                        className="login-area__btn signup-btn" 
                        type="submit"
                        onClick={userSignup}
                    >
                    Inscription
                    </button>
                </form>
            </div>
            <h2>{errorMessage}</h2>
        </div>
    )
}

export default Signup;