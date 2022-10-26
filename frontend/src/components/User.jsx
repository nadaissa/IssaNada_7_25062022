
import React from "react";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Moment from 'moment';

function User ({user}) {
   
    return (
        <div className="user" key={user.id}>
            <div className="user__top">
                
                <img className="user__profileImg" src={user?.picture} alt="" />                
                <span className="user__firstName">{user?.firstName}</span>
                <span className="user__lastName">{user?.lastName}</span>
                
            </div>
            <div className="user__center">
                <span className="user__bio">{user?.bio}</span>
            </div>
            <div className="user__bottom">
                <span className="user__date">Depuis: {Moment(user?.createdAt).format('L')}</span>
            </div>
        </div>                

    )
}


export default User;