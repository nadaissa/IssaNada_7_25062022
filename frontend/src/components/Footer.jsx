import React from "react";
import {Link} from "react-router-dom";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-list" aria-label="navigation bas de page">            
                <Link className="footer-list__link" to="/">Contact</Link>
                <Link className="footer-list__link" to="/">A propos</Link>
                <Link className="footer-list__link" to="/">Mentions légales</Link>
            </div>
        </footer>
    )
}

export default Footer;