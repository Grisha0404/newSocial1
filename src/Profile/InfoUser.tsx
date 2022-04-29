import React from 'react';
import {UsersProfileType} from "../Redux/API";

type InfoUserType = {
    profile:UsersProfileType
}

export const InfoUser = (props: InfoUserType) => {


    return (
        <div>
            <img src={props.profile.photos.small}style={{width:'120px', height: '170px'}}/>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div>{props.profile.contacts.github}</div>
        </div>
    );
};