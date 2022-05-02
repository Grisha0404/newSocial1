import React from 'react';
import {UsersProfileType} from "../Redux/API";
import userPhoto from '../Common/image/userPhoto.png'
import style from './profile.module.css'

type InfoUserType = {
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
                <div>{props.profile.contacts.github ? <div>'GitHub: ' {props.profile.contacts.github}</div> : ''}</div>
                <div>{props.profile.contacts.vk ? <div>'VK: ' {props.profile.contacts.vk}</div> : ''}</div>
                <div>{props.profile.contacts.facebook ?
                    <div>'FaceBook: ' {props.profile.contacts.facebook}</div> : ''}</div>
                <div>{props.profile.contacts.instagram ?
                    <div>'Instagram: ' {props.profile.contacts.instagram}</div> : ''}</div>
                <div>{props.profile.contacts.twitter ?
                    <div>'Twitter: ' {props.profile.contacts.twitter}</div> : ''}</div>
                <div>{props.profile.contacts.youtube ?
                    <div>'YouTube: ' {props.profile.contacts.youtube}</div> : ''}</div>
            </div>
        </div>
    );
};