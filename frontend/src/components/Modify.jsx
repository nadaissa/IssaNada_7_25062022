import React from "react";
import Axios from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import { useLocation } from "react-router-dom";



//Setting the modification display compoment only for connected user or admin
const DisplayModDiv = ({post, getAllPosts}) =>{
    const location = useLocation();

     //setting the delete function
     const deletePost = async (e) => {
        e.preventDefault();

        await Axios.delete(`http://localhost:3001/api/posts/${post.id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        }
        )
        .then(() => {
            getAllPosts()
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
{
    headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${Cookies.get('token')}`
    }
}
)
.then((response) => {
    getAllPosts();
    setPostObject({
        postContent: response.target.value,
        postMedia: response.target.files[0]
    });
})
.catch((error) =>{
    console.log(error);
})
}






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
                <label htmlFor="postContent" className="modifyarea__label">Modifier ton texte?</label>
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
                <label htmlFor="postMedia" className="modifyarea__label">Modifier ton image?</label>
                <input 
                className="modifyarea__image modifyarea__input"
                id="postMedia" 
                type="file" 
                name="postMedia" 
                accept="image/*"
                crossOrigin=""
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
            Soumettre
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

export default DisplayModDiv;