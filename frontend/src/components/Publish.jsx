import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import { useLocation } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import userIcon from '../assets/images/fencer.png'

//setting the share compoment to display on the feed page
function Publish({ getAllPosts}) {
    const Navigate = useNavigate('');
    const [postContent, setPostContent] = useState('');
    const [postMedia, setPostMedia] = useState('');
    const location = useLocation();

    const publishPost = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('postContent', postContent);
        formData.append('postMedia', postMedia);
        

        await Axios.post('http://localhost:3001/api/posts',
            formData,
            {
                headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${Cookies.get('token')}`
                },
                transformeRequest: formData => formData
            }

        )
        .then(() => {
            getAllPosts();
        })
        .catch((error) =>{
            console.log(error);
        })
    
    
    
    }

    //setting the logout function and redirect to login page
    const logout = async (e) => {
        e.preventDefault();
        await Axios.get('http://localhost:3001/api/auth/logout')            
        .then((response) => {
            Cookies.remove('token');
            console.log(response);
            Navigate('/login')
        })
        .catch((error) => {
            console.log(error)
        })


    }
    
    return (
        <div className="publish" >
            <div className="publish__top">
                <img className="publish__profileImg" src={userIcon} alt={location.state.firstName} crossOrigin=""/>
                <span className="publish__firstName">Bonjour {location.state.firstName}</span>
                <span className="publish__logoutIcon">
                
                <FontAwesomeIcon 
                        icon={faSignOut}
                        className="publish__icon"
                        id='publish__icon'
                        type="submit"
                        onClick={logout}
                        />
            </span>
            </div>
            <form className="publish__bottom publish__form">
                <div className="publish__group publish__text-area">
                    <label htmlFor="postContent" className="publish___label">Une pensée?</label>
                    <input 
                    className="publish__content"
                    placeholder="Ton texte ici"
                    id="postContent"
                    type="text"
                    name="postContent"
                    onChange={(event) => 
                        {setPostContent(event.target.value)}
                    }
                    />
                </div>
                <div className="publish__group publish___img-area">
                    <label htmlFor="postMedia" className= "publish___label">Une image?</label>
                    <input 
                    className="publish__image"
                    id="postMedia" 
                    type="file" 
                    name="postMedia" 
                    accept="image/*"
                    crossOrigin=""
                    multiple
                    onChange={(event) =>
                        {setPostMedia(event.target.files[0])}
                        
                    } />
                </div>
                <button 
                className="publish__btn" 
                type="submit"
                onClick={publishPost}>
                Partagez
                </button>
            </form>
            
        </div>
    )
}





export default Publish;