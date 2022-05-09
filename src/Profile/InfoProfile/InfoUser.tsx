import React from 'react';
import {UsersProfileType} from "../../Redux/API";
import userPhoto from '../../Common/image/userPhoto.png'
import style from '../profile.module.css'
import {ContactsProfile} from "./ContactsProfile";
import {NavLink} from "react-router-dom";

export type InfoUserType = {
    profile: UsersProfileType
}

export const InfoUser = (props: InfoUserType) => {

    return (
        <div className={style.infoUserContainer}>
            <img src={props.profile.photos.small ? props.profile.photos.small : userPhoto}
                 style={{width: '120px', height: '170px'}} alt={'NO photo'}/>
            <div className={style.infoUser}>
                <div>{props.profile.aboutMe}</div>
                <div>Name: {props.profile.fullName}</div>
                <div>Looking for a job: {props.profile.lookingForAJob ? props.profile.lookingForAJob : 'no'}</div>
                {props.profile.lookingForAJob ?
                    <div>Job Description:{props.profile.lookingForAJobDescription}</div> : ''}
                <ContactsProfile profile={props.profile}/>
            </div>
        </div>
    );
};