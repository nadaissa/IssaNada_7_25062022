import React from "react";
import {Link} from "react-router-dom";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-list" aria-label="navigation bas de page">            
<<<<<<< HEAD
                <Link className="footer-list__link" to="/">Contact</Link>
                <Link className="footer-list__link" to="/">A propos</Link>
                <Link className="footer-list__link" to="/">Mentions légales</Link>
=======
                <Link className="footer-list__link" to="/Contact">Contact</Link>
                <Link className="footer-list__link" to="/Mentions">Mentions légales</Link>
>>>>>>> dev
            </div>
        </footer>
    )
}

export default Footer;