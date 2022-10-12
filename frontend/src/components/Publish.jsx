import React from "react";

function Publish() {
    return (
        <div className="publish" >
            <div className="publish__top">
                <img className="publish__profileImg" src="" alt="tImage"/>
                <span className="publish__firstName">FName</span>
            </div>
            <form className="publish__bottom publish__form">
                <div className="publish__group publish__text-area">
                    <label htmlFor="postContent publish___label"></label>
                    <input 
                    className="publish__content"
                    type="text"
                    name="postContent"

                    placeholder="Une pensée?"/>
                </div>
                <div className="publish__group publish___img-area">
                    <label htmlFor="postMedia publish___label">Une image?</label>
                    <input 
                    className="publish__image" 
                    type="file" 
                    name="postMedia" 
                    accept="image/png, image/jpeg" />
                </div>
                <button className="publish__btn" type="submit">
                Partagez
                </button>
            </form>
            
        </div>
    )
}





export default Publish;