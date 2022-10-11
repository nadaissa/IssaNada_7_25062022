import React from "react";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import Axios from 'axios';


function Feed() {
    const [posts, setPosts] = useState('');
    //const [errorMessage, setError] = useState('');
    //const token = Axios.interceptors.request.use( `response.data.token`);
    /*const [token, setToken] = useState('');

    
    const AxiosJWT = Axios.create();
    AxiosJWT.interceptors.request.use( async (config) => {
        const response = await Axios.get('http://localhost:3001/api/auth/login');
        config.headers.Authorization = `Bearer ${response.data.token}`;
        setToken(response.data.token);
    console.log(config)
        return config
    
    }, (error) => {
        
        return Promise.reject(error);
    });*/

    const getAllPosts = async ()=> {
    
        await Axios.get('http://localhost:3001/api/posts',  
            {
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${token}`
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2LCJhZG1pbiI6ZmFsc2UsImlhdCI6MTY2NTQ4ODc2MiwiZXhwIjoxNjY1NTc1MTYyfQ.EzQ0zIBuwa1MWLBLPyu8oB-6G99pMK0t-cW2x_BJWUY'
                }
            })
        .then((response) => {
            
            setPosts(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);

            //window.alert(error.response.data.message);
            //const errorMessage = error.response.data.message;
            //setError(error.response.data.message);
        })
       }
       useEffect(( ) => {
        getAllPosts();

       }, []);
       
    return (
        <div className="main-content-wrapper" aria-label="contenu principal">
          <h1 className="feed-h1" aria-label="flux des posts">Voici l'acutalité de tes collègues!</h1>
          <>
            {posts ?
                posts.map(post => {
                    return(
                    <Post key={post.id} post={post}/>
                    )
                }) : <h2>No posts yet</h2>
            }
           </>
        </div>
    )
}

export default Feed;