
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { useState } from "react";
import Cookies from "js-cookie";
import Moment from 'moment';
import userIcon from '../assets/images/fencer.png'
import DisplayModDiv from './Modify';
import {LazyLoadImage} from 'react-lazy-load-image-component'

function Post ({ post, getAllPosts}) {

    
   
   //setting the like function
    
    const [like, setLike] = useState('');
       
    const likePost = async (e) => {
        
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('like', like);

        await Axios.post(`http://localhost:3001/api/likes/${post.id}/like`,
        
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        }       
        )
        .then((response) => {
            setLike(response);
            getAllPosts();
        })
        .catch((error) =>{
            console.log(error);
        })
        
    }
    
    return (
        <div className="post" >
            <div className="post__top">
                <div className="post__topLeft">
                    <LazyLoadImage className="post__profileImg" src={userIcon} alt={post.User.firstName} crossOrigin=""/>
                    <span className="post__firstName">{post?.User.firstName}</span>
                    <span className="post__lastName">{post?.User.lastName}</span>
                </div>
                <div className="post__topRight">
                    <span className="post__date">{Moment(post?.createdAt).format('D.M.YYYY')}</span>
                </div>
                
            </div>
            <div className="post__center">
                <span className="post__content">{post?.postContent}</span>
                <LazyLoadImage className="post__media" src={post?.postMedia} alt="" crossOrigin="" loading='lazy'/>
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
            <DisplayModDiv post={post} getAllPosts={getAllPosts}/>
        </div>
    )
}





export default Post;