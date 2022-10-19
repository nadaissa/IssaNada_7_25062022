import React from "react";
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
                <img className="post__profileImg" src="/assets/testImgs/profile_test.png" alt="tImage"/>
                <span className="post__firstName">{post.userId}</span>
                <span className="post__date">{Moment(post?.createdAt).format('L')}</span>
            </div>
            <div className="post__center">
                <span className="post__content">{post?.postContent}</span>
                <img className="post__media" src={post?.postMedia} alt="TestPostMedia"/>
            </div>
            <div className="post__bottom">
                <span className="post__likeIcon">
                    <FontAwesomeIcon icon={faThumbsUp} className="post__icon"/>
                </span>
                <span className="like__counter">33</span>
            </div>
        </div>
    )
}





export default Post;