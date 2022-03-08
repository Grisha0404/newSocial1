import React, {useState} from 'react';
import d from './dialog.module.css'
import {NavLink} from "react-router-dom";


type MessageType = {
    id: string
    name: string
    ava: string
}


export const Message = (props: MessageType) => {

    return (
        <div className={d.message}>
            <NavLink to={'/dialogs/'}><img src={props.ava}/> {props.name}</NavLink>
        </div>
    );
};
