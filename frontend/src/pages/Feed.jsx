import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Publish from "../components/Publish";
import Axios from 'axios';
import Cookies from "js-cookie";




function Feed() {
    const [posts, setPosts] = useState('');
    
    //getting all posts from backend
    const getAllPosts = async ()=> {
    
        await Axios.get('http://localhost:3001/api/posts',  
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('token')}`
                     },
                
            })
        .then((response) => {
            
            setPosts(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
       }
    useEffect(( ) => {
        getAllPosts();

    }, []);
       
      //getting the userInfo stored in localStorage after singin 
      
      
      const userConnected = {
        userId: parseFloat(localStorage.getItem('userId')),
        firstName:  localStorage.getItem('firstName'),
        admin:  localStorage.getItem('admin')
    }
      

    
    //importing the share content to the feed page
    //and then displaying the post by importing a map using the post compoment already defined when user is logged in
    return (
        <div className="feed" aria-label="contenu principal">
          
          <h1 className="feed__h1" aria-label="flux des posts">Voici l'actualité de tes collègues!</h1>
          <Publish getAllPosts={getAllPosts} loginAuth={userConnected}/>
          <>
            
            {posts ?
                posts.map(post => {
                    return(
                    <Post key={post.id} post={post} getAllPosts={getAllPosts} loginAuth={userConnected}/>
                    )
                }) : <h2>Tu dois te connecter pour poster et accéder au fil</h2>
            }
           </>
           
        </div>
        )
}

export default Feed;
