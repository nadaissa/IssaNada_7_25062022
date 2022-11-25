import React,  { useState }  from "react";
import Axios from "axios";
import Cookies from 'js-cookie';



//Setting the modification display compoment only for connected user or admin
const DisplayModDiv = ({post, getAllPosts, loginAuth}) =>{
 

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


//setting the initiale state of the post for modification
const [postContent, setPostContent] = useState(post.postContent);
const [postMedia, setPostMedia] = useState(post.postMedia);


//defining the modification function
const modifyPost = async (e) => {
e.preventDefault();

const formData = new FormData();
        formData.append('postContent', postContent);
        formData.append('postMedia', postMedia);


await Axios.put(`http://localhost:3001/api/posts/${post.id}`,

formData,
{
    headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${Cookies.get('token')}`
    },
    transformeRequest: formData => formData
}
)
.then((response) => {
    getAllPosts();
    console.log(response);
})
.catch((error) =>{
    console.log(error);
})
}






//defining the current post user
const postUser = post.userId;
//defining the connected user by getting the login state values
const currentUser = loginAuth.userId;
//defining the admin status by getting it from the login state values
const isAdmin = loginAuth.admin;
//setting the condition to display modification form
if(postUser === currentUser || isAdmin === 'true'){
    return (
        <div className="modifyarea" >
        <form className="modifyarea__form">
            <div className="modifyarea__group">
                <label htmlFor="modifyarea__postContent" className="modifyarea__label">Modifier ton texte?</label>
                <textarea 
                className="modifyarea__textarea"
                placeholder="Changez votre texte"
                id="modifyarea__postContent"
                type="text"
                defaultValue={post.postContent}
                onChange={(event) => 
                    {setPostContent(event.target.value)}
                }
                name="postContent"
                />
            </div>
            <div className="modifyarea__group modifyarea__img-area">
                <label htmlFor="modifyarea__postMedia" className="modifyarea__label">Modifier ton image?</label>
                <input 
                className="modifyarea__image modifyarea__input"
                id="modifyarea__postMedia" 
                type="file" 
                name="postMedia" 
                accept="image/*"
                crossOrigin=""
                multiple
                onChange={(event) => {
                    setPostMedia(event.target.files[0])
                }}
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