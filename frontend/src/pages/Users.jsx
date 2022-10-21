
import React from "react";

import Axios from 'axios';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import User from "../components/User"

function Users () {
    const [users, setUsers] = useState('');
    
    const getAllUsers = async () => {
        await Axios.get('http://localhost:3001/api/users',  
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
                 },
            
            
            withCredentials: true

        }).then((response) => {
            
            setUsers(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
            //setError(error.response.data.message);
        })
       }
       useEffect(( ) => {
        getAllUsers();

       }, []);
    
    return (
    
        <div className="users" aria-label="contenu principal">
            <h1 className="users__h1" aria-label="list d'utilisateurs">Voici la liste de tes collègues!</h1>      
                  
            <>
            
            {users ?
                users.map(user => {
                    return(
                    <User key={user.id} user={user}/>
                    )
                }) : <h2>Affichage impossible</h2>
            }
           </>
        </div>
    )
}





export default Users;