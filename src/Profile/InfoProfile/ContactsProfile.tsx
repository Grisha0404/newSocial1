import React from 'react';
import {InfoUserType} from "./InfoUser";

export const ContactsProfile:React.FC<InfoUserType> = (props) => {
    return (
        <div>
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
    );
};
