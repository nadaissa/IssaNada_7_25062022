import React from "react";
import logo from "../assets/images/icon-left-font-monochrome-white.svg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket, faBars, faHouse, faLightbulb /*faUserPlus*/} from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="header">
            <nav className="header-nav" aria-label="navigation en-tête">
                <Link className="header-left" to="/">
                <img src={logo} alt="logo groupomania" className="header-left__logo" />
                {/*<div className="light-switch">
                    <span><FontAwesomeIcon icon={faLightbulb} className="light-switch__icon"/></span>
                </div>*/}
                </Link>
                {/*<div className="header-center">
                <div className="header-center__searchBar">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="header-center__icon"/>
                        <input placeholder="Search for friends or content!" className="header-center__input" />
                    </div>
                </div>*/}
                
                <div className="header-right">
                    <div className="header-right__links">
                        <Link className= "header-right__link" to="/" aria-label="icone d'accueil">
                            <FontAwesomeIcon icon={faHouse} className="header-right__icon"/>
                        </Link>
                        <Link className= "header-right__link" to="/Login" aria-label="inscription">
                            <FontAwesomeIcon icon={faArrowRightToBracket} className="header-right__icon"/>
                        </Link>
                        <div className="header-right__switch header-right__link">
                            <FontAwesomeIcon icon={faLightbulb} className="header-right__icon"/>
                        </div>
                        <button className="header-right__btn">
                            <FontAwesomeIcon icon={faBars} className="header-right__burger"/>
                        </button>
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
        </header>    
    
    )
}

export default Header;
