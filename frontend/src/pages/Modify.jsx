import React from "react";
import Axios from "axios";
import { useState } from "react";
//import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
//import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//import { useRef } from "react";

function Modify () {
    //const Navigate = useNavigate('');
    //const [newContent, setNewContent] = useState('');
    //const [newMedia, setNewMedia] = useState('');
    //const [userId, setUserId] = useState('');
    const location = useLocation()
    //const params = new URLSearchParams(location.search)
    //const ref = useRef('');
    const [postObject, setPostObject] = useState({
        postContent : `${location.state.postContent}`,
        postMedia: `${location.state.postMedia}`,
    })
    
    function handleContentChange(e){
        postObject.postContent = e.target.value;
    }

    function handleMediaChange(e){
        postObject.postMedia = e.target.files[0];
    }
    //console.log(ref.current.value)

    const modifyPost = async (e) => {
        e.preventDefault();
        
        //const formData = new FormData();
        //formData.append('newContent', newContent);
        //formData.append('newMedia', newMedia);
        /*formData.forEach((value, key) => {
            console.log(key + " " + value)
        })*/
        //formData.append('userId', userId);

        await Axios.put(`http://localhost:3001/api/posts/${location.state.id}`,
        
        /*{
            postContent: postContent,
            postMedia: postMedia
        },*/

        //formData,
        {
            ...postObject
        },
        {
            headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${Cookies.get('token')}`
            },
            
            
            //withCredentials: true,

            //transformeRequest: formData => formData
        
        
            }
            

        )
        .then((response) => {
            //formData.forEach((value, key) => { console.log(key + "__" + value) })
            //setUserId(response.data.userId);
            //console.log(response.data.message);
            console.log(response);
            console.log(postObject)
            //Navigate('/Feed')
            //window.location.reload();
            setPostObject({
                postContent: e.target.value,
                postMedia: e.target.files[0]
            })
        })
        .catch((error) =>{
            console.log(error);
        })
    }


    
    return (
        <div className="main-content-wrapper" aria-label="contenu principal">     
            <div className="modify" >
                {/*<div className="modify__top">
                    <img className="modify__profileImg" src="" alt=""/>
                    <span className="modify__firstName">FName</span>
        </div>*/}
                <form className="modify__bottom modify__form">
                    <div className="modify__group">
                        <label htmlFor="postContent" className="modify__label">Changer votre texte?</label>
                        <textarea 
                        className="modify__content modify__textarea"
                        placeholder="Une pensée?"
                        id="postContent"
                        type="text"
                        //ref={ref}
                        defaultValue={postObject.postContent}
                        onChange={handleContentChange}
                        name="postContent"
                        //onChange={(event) => 
                        //{setNewContent(event.target.value)}
                        //}
                        />
                    </div>
                    <div className="modify__group modify__img-area">
                        <div className="modify__oldImg-area">
                            <h3>Votre image actuelle</h3>
                            <img className="modify__oldImg" src={postObject.postMedia} alt="oldImg" crossOrigin=""/>
                        </div>
                        <label htmlFor="postMedia" className="modify__label">Changer votre image?</label>
                        <input 
                        className="modify__image modify__input"
                        id="postMedia" 
                        type="file" 
                        name="postMedia" 
                        //defaultValue={postObject.postMedia}
                        accept="image/*"
                        multiple
                        onChange={handleMediaChange}
                        //onChange={(event) =>
                        //{setNewMedia(event.target.files[0])}
                            
                        //}
                        />
                    </div>
                    <button 
                    className="modify__btn" 
                    type="submit"
                    onClick={modifyPost}
                    >
                    Modifier
                    </button>
                </form>
                
            </div>
        </div>
    )
}






export default Modify;