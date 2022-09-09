import React from "react";

function Signup() {
    return (
        <div className="main-content-wrapper" aria-label="contenu principal">
            
            <div className="login-area" aria-label="formulaire de connexion">
            <h1 className="login-area__h1" aria-label="titre formulaire connexion">Inscrivez-vous</h1>    
                <form className="login-area__form" action="#" method="POST" encType="multipart/form-data">
                    <div className="login-area__firstName login-area__group">
                        <label className="login-area__label" htmlFor="firstName">Prénom:</label>
                        <input className="login-area__input" id="firstName" name="fistName" type="text" size="30" />
                    </div>
                    <div className="login-area__lastName login-area__group">
                        <label className="login-area__label" htmlFor="lastName">Nom:</label>
                        <input className="login-area__input" id="lastName" name="lastName" type="text" size="30" />
                    </div>
                    <div className="login-area__mail login-area__group">
                        <label className="login-area__label" htmlFor="email">Email:</label>
                        <input className="login-area__input" id="email" name="email" type="text" size="30" />
                    </div>
                    <div className="login-area__pass login-area__group">
                        <label className="login-area__label" htmlFor="password">Mot de passe:</label>
                        <input className="login-area__input" id="password" name="password" type="password" size="30" />
                    </div>
                    <button className="login-area__btn signup-btn" type="submit">Inscription</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;