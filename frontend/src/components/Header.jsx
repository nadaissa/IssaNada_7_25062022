import React from "react";
import logo from "../assets/images/icon-left-font-monochrome-white.svg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket, faHouse,faUserPlus /*faBars,faUserPlus, faSun*/} from '@fortawesome/free-solid-svg-icons';
/*import {useState} from "react";*/

function Header() {
   
    return (
        <header className="header">
            <nav className="header-nav" aria-label="navigation en-tête">
                <Link className="header-left" to="/">
                <img src={logo} alt="logo groupomania" className="header-left__logo" />
               
                </Link>
                
                <div className="header-right">
                    <div className= "header-right__links">
                        <Link className= "header-right__link" to="/" aria-label="icone d'accueil">
                            <FontAwesomeIcon icon={faHouse} className="header-right__icon"/>
                        </Link>
                        <Link className= "header-right__link" to="/Login" aria-label="connexion">
                            <FontAwesomeIcon icon={faArrowRightToBracket} className="header-right__icon"/>
                        </Link>
                        <Link className= "header-right__link" to="/Signup" aria-label="inscription">
                            <FontAwesomeIcon icon={faUserPlus} className="header-right__icon"/>
                        </Link>
                                     
                    </div>
                </div>

            </nav>
        </header>    
    
    )
}

export default Header;
