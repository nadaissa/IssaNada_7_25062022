import React from "react";
import Post from "../components/Post";
import Publish from "../components/Publish"
import { useState, useEffect } from "react";
import Axios from 'axios';
import Cookies from "js-cookie";


function Feed() {
    const [posts, setPosts] = useState('');
    //const [errorMessage, setError] = useState('');
    
    const getAllPosts = async ()=> {
    
        await Axios.get('http://localhost:3001/api/posts',  
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('token')}`
                     },
                
                
                withCredentials: true

            })
        .then((response) => {
            
            setPosts(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
            //setError(error.response.data.message);
        })
       }
       useEffect(( ) => {
        getAllPosts();

       }, []);
       
    return (
        <div className="feed" aria-label="contenu principal">
          
          <h1 className="feed__h1" aria-label="flux des posts">Voici l'actualité de tes collègues!</h1>
          <Publish/>
          <>
            
            {posts ?
                posts.map(post => {
                    return(
                    <Post key={post.id} post={post}/>
                    )
                }) : <h2>Rien de neuf!</h2>
            }
           </>
           
        </div>
    )
}

export default Feed;