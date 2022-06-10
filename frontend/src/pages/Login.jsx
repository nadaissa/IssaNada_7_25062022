import React from "react";


function Login() {
    return (
        <div className="main-content-wrapper" aria-label="contenu principal">
            <h1 className="login__h1" aria-label="titre formulaire contact">Accédez à la plateforme</h1>
            <form className="login-form" name="loginForm" aria-label="formulaire de connexion">
                  <label for="login-form__email" className="login-form__label">Email</label>
                  <input type="email" className="login-form_email" name="login-form_email" placeholder="Email" required />
                  <button id="login-form__Btn" type="submit" value = "Submit" className="login-form__Btn" name="submitBtn">Connexion</button>             
            </form>
        </div>
    )
}

export default Login;