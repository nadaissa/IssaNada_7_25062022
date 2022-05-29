import React from "react";
import logo from "../assets/images/icon-left-font-monochrome-white.svg";
import {Link} from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBell, faMagnifyingGlass, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <nav className="header">
            <div className="header-left">
                <img src={logo} alt="logo groupomania" className="header-left__logo" />
            </div>
            {/*<div className="header-center">
               <div className="header-center__searchBar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="header-center__icon"/>
                    <input placeholder="Search for friends or content!" className="header-center__input" />
                </div>
            </div>*/}
            <div className="header-right">
                <div className="header-right__links">
                    <Link className="header-right__link" to="/">Accueil</Link>
                    <Link className= "header-right__link" to="/Login">Login</Link>
                    <Link className= "header-right__link" to="/Signup">Signup</Link>
                </div>
                {/*<div className="header-icons">
                    <FontAwesomeIcon icon={faUser} className="header-icons__icon"/>
                    <span className="header-icons__badge">1</span>
                </div>
                <div className="header-icons">
                    <FontAwesomeIcon icon={faMessage} className="header-icons__icon"/>
                    <span className="header-icons__badge">1</span>
                </div>
                <div className="headerIcons">
                    <FontAwesomeIcon icon={faBell} className="header-icons__icon"/>
                    <span className="header-icons__badge">1</span>
    </div>*/}
            </div>
            {/*<img src="" alt="profil" className="header-profil" />*/}
            
            
        </nav>
    
    )
}

export default Header;
