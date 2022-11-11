import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import { useParams } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

function Publish() {
    const Navigate = useNavigate('');
    const [postContent, setPostContent] = useState('');
    const [postMedia, setPostMedia] = useState('');
    //const [userId, setUserId] = useState('');
    const Params = useParams();

    const publishPost = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('postContent', postContent);
        formData.append('postMedia', postMedia);
        formData.forEach((value, key) => {
            console.log(key + " " + value)
        })
        //formData.append('userId', userId);

        await Axios.post('http://localhost:3001/api/posts',
        
        /*{
            postContent: postContent,
            postMedia: postMedia
        },*/

        formData,
        {
            headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${Cookies.get('token')}`
            },
            
            //withCredentials: true,

            transformeRequest: formData => formData
        
        
            }
            

        )
        .then((response) => {
            //formData.forEach((value, key) => { console.log(key + "__" + value) })
            //setUserId(response.data.userId);
            //console.log(response.data.message);
            console.log(response);
            //Navigate('/Feed')
            window.location.reload();
        })
        .catch((error) =>{
            console.log(error);
        })
    
    
    
    }

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
                <img className="publish__profileImg" src="" alt=""/>
                <span className="publish__firstName">Bonjour {Params.id}</span>
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
                    <label htmlFor="postContent publish___label"></label>
                    <input 
                    className="publish__content"
                    placeholder="Une pensée?"
                    id="postContent"
                    type="text"
                    name="postContent"
                    onChange={(event) => 
                        {setPostContent(event.target.value)}
                    }
                    />
                </div>
                <div className="publish__group publish___img-area">
                    <label htmlFor="postMedia publish___label">Une image?</label>
                    <input 
                    className="publish__image"
                    id="postMedia" 
                    type="file" 
                    name="postMedia" 
                    accept="image/*"
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