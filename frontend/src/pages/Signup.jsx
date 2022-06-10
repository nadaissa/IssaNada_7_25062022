import React from "react";
import {Link} from "react-router-dom";

function Signup() {
    return (
        <div className="main-content-wrapper" aria-label="contenu principal">
            <div className="signup-area" aria-label="formulaire d'inscription">    
            <h1 className="signup-area__h1" aria-label="titre formulaire inscription">Inscrivez-vous!</h1>
            <form className="signup-area__form" action="#" method="POST" encType="multipart/form-data">
                    <div className="signup-area__mail signup-area__group">
                        <label className="signup-area__label" htmlFor="email">Email:</label>
                        <input className="signup-area__input" id="email" name="email" type="text" size="30" />
                    </div>
                    <div className="signup-area__pass signup-area__group">
                        <label className="signup-area__label" htmlFor="password">Mot de passe:</label>
                        <input className="signup-area__input" id="password" name="password" type="password" size="30" />
                    </div>
                    <div className="signup-area__btns signup-area__group">
                        <button className="signup-area__btn submit-btn" type="submit">Inscription</button>
                        <button className="signup-area__btn">
                            <Link className="home-btn" to="/" aria-label="retour à l'accueil">Retournez à l'accueil</Link>    
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;