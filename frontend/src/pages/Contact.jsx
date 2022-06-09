import React from "react";



function Contact() {
    return (
       <div className="main-content-wrapper" aria-label="contenu principal">
            <div className="contact-area" aria-label="présentation de la plateforme Groupomania">
                <h1 className="contact-area__h1" aria-label="titre formulaire contact">Vous avez une question?</h1>
                <form id="contact-area_form" action="#" method="POST" enctype="multipart/form-data">
                    <div className="row">
                        <label className="required" for="name">Your name:</label><br />
                        <input id="name" className="input" name="name" type="text" value="" size="30" /><br />
                        <span id="name_validation" className="error_message"></span>
                    </div>
                    <div className="row">
                        <label className="required" for="email">Your email:</label><br />
                        <input id="email" className="input" name="email" type="text" value="" size="30" /><br />
                        <span id="email_validation" className="error_message"></span>
                    </div>
                    <div className="row">
                        <label className="required" for="message">Your message:</label><br />
                        <textarea id="message" className="input" name="message" rows="7" cols="30"></textarea><br />
                        <span id="message_validation" className="error_message"></span>
                    </div>
                    
                    <input id="submit_button" type="submit" value="Send email" />
                </form>
            </div>
       </div>
    )
}

export default Contact;