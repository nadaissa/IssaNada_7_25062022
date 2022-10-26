
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
//import Axios from 'axios';
//import { useEffect, useState } from "react";
//import Cookies from "js-cookie";
import Moment from 'moment';

function Post ({ post }) {
    //const [users, setUsers] = useState('')
    
    return (
        <div className="post" >
            <div className="post__top">
                <div className="post__topLeft">
                    <img className="post__profileImg" src={post.User.picture} alt={post.User.fristName} />
                    <span className="post__firstName">{post.User.firstName}</span>
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
                <button className='post__delete'>Supprimer</button>
                <span className="post__likeIcon">
                    <FontAwesomeIcon icon={faThumbsUp} className="post__icon"/>
                </span>
                <span className="like__counter">33</span>
            </div>
        </div>
    )
}





export default Post;