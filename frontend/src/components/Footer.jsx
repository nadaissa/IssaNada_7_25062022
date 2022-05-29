import React from "react";
import {Link} from "react-router-dom";
function Footer() {
    return (
        <div className="footer">            
            <Link className="footer__link" to="/">Contact</Link>
            <Link className="footer__link" to="/">A propos</Link>
            <Link className="footer__link" to="/">Mentions légales</Link>
        </div>
    )
}

export default Footer;