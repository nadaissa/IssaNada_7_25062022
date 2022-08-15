import React from "react";
import logo from "../assets/images/icon-left-font-monochrome-white.svg";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket, faHouse/*faBars,faUserPlus, faSun*/} from '@fortawesome/free-solid-svg-icons';
/*import {useState} from "react";*/

function Header() {
    /*const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };*/
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
                    <div className= "header-right__links"> {/*`header-right__links ${showLinks ? "header-right__links-show" : "header-right__links-hide"}`*/}
                        <Link className= "header-right__link" to="/" aria-label="icone d'accueil">
                            <FontAwesomeIcon icon={faHouse} className="header-right__icon"/>
                        </Link>
                        <Link className= "header-right__link" to="/Login" aria-label="inscription">
                            <FontAwesomeIcon icon={faArrowRightToBracket} className="header-right__icon"/>
                        </Link>
                        {/*<div className="header-right__switch header-right__link">
                            <FontAwesomeIcon icon={faSun} className="header-right__icon"/>
                        </div>*/}                       
                    </div>
                    {/*<button className="header-right__btn" onClick={handleShowLinks} aria-label="burger-menu">
                            <FontAwesomeIcon icon={faBars} className="header-right__burger"/>
                    </button>*/} 
                    
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
