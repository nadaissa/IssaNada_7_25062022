import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="main-content-wrapper" aria-label="contenu principal">
            <div className="login-area" aria-label="formulaire de connexion">    
            <h1 className="login-area__h1" aria-label="titre formulaire connexion">Accédez à la plateforme</h1>
            <form className="login-area__form" action="#" method="POST" encType="multipart/form-data">
                    <div className="login-area__mail login-area__group">
                        <label className="login-area__label" htmlFor="email">Email:</label>
                        <input className="login-area__input" id="email" name="email" type="text" size="30" />
                    </div>
                    <div className="login-area__pass login-area__group">
                        <label className="login-area__label" htmlFor="password">Mot de passe:</label>
                        <input className="login-area__input" id="password" name="password" type="password" size="30" />
                    </div>
                    <div className="login-area__btns login-area__group">
                        <button className="login-area__btn connection-btn" type="submit">Connexion</button>
                        <button className="login-area__btn signup-btn" type="submit">Inscription</button>
                        <button className="login-area__btn">
                            <Link className="home-btn" to="/" aria-label="retour à l'accueil">Retournez à l'accueil</Link>    
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;