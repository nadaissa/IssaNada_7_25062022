
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { useState } from "react";
import Cookies from "js-cookie";
import Moment from 'moment';

function Post ({ post }) {
    const [like, setLike] = useState('')
    const likePost = async (e) => {
        
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('like', like);

        await Axios.post(`http://localhost:3001/api/likes/${post.id}/like`,
        
        formData,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
                 },
            
            
            withCredentials: true

        }
        
        )
        .then((response) => {
            //console.log(response.data.message);
            setLike(response);
            alert(response.data.message);
            console.log(response)
            window.location.reload();
            console.log("liked: " + response.data.liked);
           

        })
        .catch((error) =>{
            console.log(error);
        })
        
    }

    const deletePost = async (e) => {
        e.preventDefault();

        await Axios.delete(`http://localhost:3001/api/posts/${post.id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
                 },
            
            
            withCredentials: true

        }
        )
        .then((response) => {
            //console.log(response.data.message);
            console.log(response)
            window.location.reload();

        })
        .catch((error) =>{
            console.log(error);
            alert(error.response.data.error)
        })

    }

    
    return (
        <div className="post" >
            <div className="post__top">
                <div className="post__topLeft">
                    <img className="post__profileImg" src={post?.User.picture} alt={post.User.fristName} crossOrigin=""/>
                    <span className="post__firstName">{post?.User.firstName}</span>
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
                <button className='post__modify'>Modifier</button>
                <button 
                
                    className='post__delete'
                    type="submit"
                    onClick={deletePost}
                >
                Supprimer
                </button>
                
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
        </div>
    )
}





export default Post;