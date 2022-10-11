import React from "react";

function Post({ post }) {
    return (
        <div className="post-wrapper" >
            <div className="postTop">
                <img className="postProfileImg" src="" alt="TestImage"/>
                <span className="postFirstName">TestFName</span>
                <span className="postDate">TestDate</span>
            </div>
            <div className="postCenter">
                <span className="postContent">{post?.postContent}</span>
                <img className="postMedia" src={post.postMedia} alt="TestPostMedia"/>
            </div>
            <div className="postBottom">
                <span className="postLikeIcon">like?</span>
                <span className="likeCounter">33likes?</span>
            
            </div>
        </div>
    )
}





export default Post;