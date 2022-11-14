
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { useState } from "react";
import Cookies from "js-cookie";
import Moment from 'moment';
import { useLocation } from "react-router-dom";

//setting authorization header
const authorizationHeader = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
    }
};
//setting authorization for forms
const formAuthorizationHeader = {
    headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${Cookies.get('token')}`
    }
}


function Post ({ post }) {

    const location = useLocation();

   //setting the like function
    
    const [like, setLike] = useState('');
       
    const likePost = async (e) => {
        
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('like', like);

        await Axios.post(`http://localhost:3001/api/likes/${post.id}/like`,
        
        formData,
        authorizationHeader
        
        )
        .then((response) => {
            setLike(response);
            alert(response.data.message);
            window.location.reload();
            //console.log("liked: " + response.data.liked);
           

        })
        .catch((error) =>{
            console.log(error);
        })
        
    }

    //setting the delete function
    const deletePost = async (e) => {
        e.preventDefault();

        await Axios.delete(`http://localhost:3001/api/posts/${post.id}`,
            authorizationHeader
        )
        .then((response) => {
            //console.log(response)
            window.location.reload();

        })
        .catch((error) =>{
            console.log(error);
            alert(error.response.data.error)
        })

    }

   
   
   //setting the initiale state of the post object for modification
    const [postObject, setPostObject] = useState({
            postContent : post.postContent,
            postMedia: post.postMedia,
        })
    //setting the state change handling for post texte content
    function handleContentChange(e){
        postObject.postContent = e.target.value;
    }
     //setting the state change handling for post image content
    function handleMediaChange(e){
        postObject.postMedia = e.target.files[0];
    }
    //defining the modification function
    const modifyPost = async (e) => {
        e.preventDefault();
        await Axios.put(`http://localhost:3001/api/posts/${post.id}`,
        {
            ...postObject
        },
        formAuthorizationHeader
        )
        .then((response) => {
            alert(response.data.message)
            window.location.reload();
            //console.log(response);
            //console.log(postObject)
            setPostObject({
                postContent: response.target.value,
                postMedia: response.target.files[0]
            });
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    
    //Setting the modification display compoment only for connected user or admin
    const DisplayModDiv = () =>{
        //defining the current post user
        const postUser = post.userId;
        //defining the connected user by getting the login state values
        const currentUser = location.state.userId;
        //defining the admin status by getting it from the login state values
        const isAdmin = location.state.admin;
        //setting the condition to display modification form
        if(postUser === currentUser || isAdmin === true){
            return (
                <div className="modifyarea" >
                <form className="modifyarea__form">
                    <div className="modifyarea__group">
                        <label htmlFor="postContent" className="modifyarea__label">Changer votre texte?</label>
                        <textarea 
                        className="modifyarea__textarea"
                        placeholder="Changez votre texte"
                        id="postContent"
                        type="text"
                        defaultValue={postObject.postContent}
                        onChange={handleContentChange}
                        name="postContent"
                        />
                    </div>
                    <div className="modifyarea__group modifyarea__img-area">
                        <label htmlFor="postMedia" className="modifyarea__label">Changer votre image?</label>
                        <input 
                        className="modifyarea__image modifyarea__input"
                        id="postMedia" 
                        type="file" 
                        name="postMedia" 
                        accept="image/*"
                        multiple
                        onChange={handleMediaChange}
                        />
                    </div>
                    <div className='modifyarea__btnsDiv'>
                    <button 
                    className="modifyarea__modifyBtn" 
                    type="submit"
                    onClick={modifyPost}
                    >
                    Modifier
                    </button>
                    <button 
                    className='modifyarea__deleteBtn'
                    type="submit"
                    onClick={deletePost}
                    >
                    Supprimer
                    </button>
                    </div>
                </form>
                </div>
            )
        }
    } 
        
    
    return (
        <div className="post" >
            <div className="post__top">
                <div className="post__topLeft">
                    <img className="post__profileImg" src={post?.User.picture} alt={post.User.fristName} crossOrigin=""/>
                    <span className="post__firstName">{post?.User.firstName}</span>
                    <span className="post__lastName">{post?.User.lastName}</span>
                </div>
                <div className="post__topRight">
                    <span className="post__date">{Moment(post?.createdAt).format('L')}</span>
                </div>
                
            </div>
            <div className="post__center">
                <span className="post__content">{post?.postContent}</span>
                <img className="post__media" src={post?.postMedia} alt="" crossOrigin=""/>
            </div>
            <div className="post__bottom">
                          
                
                <span className="post__likeIcon">
                    <FontAwesomeIcon 
                        icon={faThumbsUp}
                        className="post__icon"
                        id='post__icon'
                        type="submit"
                        onClick={likePost}/>
                </span>
                <span className="like__counter">{post?.Likes.length}</span>
                
            </div>
            <DisplayModDiv/>
        </div>
    )
}





export default Post;