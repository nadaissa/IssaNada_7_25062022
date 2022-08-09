import React from "react";



function Contact() {
    return (
       <div className="main-content-wrapper" aria-label="contenu principal">
            <div className="contact-area" aria-label="formulaire de contact">
                <h1 className="contact-area__h1" aria-label="titre formulaire contact">Vous avez une question?</h1>
                <form className="contact-area__form" action="#" method="POST" encType="multipart/form-data">
                    <div className="contact-area__name contact-area__group">
                        <label className="contact-area__label" htmlFor="name">Votre nom:</label>
                        <input className="contact-area__input" id="name" name="name" type="text" size="30" />
                    </div>
                    <div className="contact-area__mail contact-area__group">
                        <label className="contact-area__label" htmlFor="email">Votre email:</label>
                        <input className="contact-area__input" id="email" name="email" type="text" size="30" />
                    </div>
                    <div className="contact-area__message contact-area__group">
                        <label className="contact-area__label" htmlFor="message">Votre message:</label>
                        <textarea className="contact-area__input" id="message" name="message" rows="7" cols="30"></textarea>
                    </div>
                    <div className="contact-area__btns contact-area__group">
                        <button className="contact-area__btn submit-btn" type="submit">Envoyez</button>
                    </div>
                </form>
            </div>
       </div>
    )
}

export default Contact;