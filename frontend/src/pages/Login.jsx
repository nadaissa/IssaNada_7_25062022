import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import { useContext } from "react";
import LoginContext from "../contexts/LoginContext";


const Login = () => {
    const {setLoginAuth} = useContext(LoginContext);
    const Navigate = useNavigate('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setError] = useState('');
    
  
    //setting the axios post order to send form data on login
    const userLogin = async (e) =>
    {
        e.preventDefault();
        
        try{
           const user = await Axios.post(
                'http://localhost:3001/api/auth/login',
                {
                    email: email,
                    password: password,
                },
                {
                    headers: { 
                        "Content-Type": "application/json"
                        
                },
                
                })

                console.log(user.data);
                console.log(user.data.message);
    
                const userId = parseFloat(user.data.userId);
                const firstName = user.data.firstName;
                const admin = user.data.admin
                        
                                
                            
               setLoginAuth(
                    loginAuth => ({
                        ...loginAuth,
                        userId: userId,
                        firstName: firstName,
                        admin: admin
                    }))
                    
    
                Axios.create({
                    headers: {
                        'Cookie': Cookies.set(
                        'token', 
                    user.data.token,
                    {expires: 1},
                    { secure: true },
                    { sameSite: 'None'}
                    )
                    }
                })
    
                //redirecting to the feed page with state values and unique userId params
                //Navigate(`/Feed/${user.data.userId}`)
                Navigate('/Feed')
        }catch(error){
            console.log(error)
            setError(error);
        }
    }

    return (
        <div className="main-content-wrapper" aria-label="contenu principal">
            <div className="login-area" aria-label="formulaire de connexion">    
                <h1 className="login-area__h1" aria-label="titre formulaire connexion">Connexion</h1>
                <form className="login-area__form" action="#" method="POST" encType="multipart/form-data">
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
                        onClick={userLogin}
                    
                    >
                    Connexion
                    </button>
                </form>
            </div>
            <h2>{errorMessage}</h2>
        </div>
    )
}

export default Login;