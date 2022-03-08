import React, {useState} from 'react';
import {Message} from "./Message";
import {NewMessage} from "./NewMessage";
import d from './dialog.module.css'
import {Dialog} from "./Dialog";
import {MessagesPageType, MessagesType} from "../state/state";
import {v1} from "uuid";
import {NewPost} from "../Profile/NewPost";
import s from "src/Profile/post.module.css";

type DialogType = MessagesPageType


export const Dialogs = (props: DialogType) => {

    let [message, setMessage] = useState<Array<MessagesType>>([
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'Yo'}
    ])
    const addNewMessage = (title: string) => {
        let messageNew: MessagesType = {id: v1(), message: title}
        setMessage([ ...message, messageNew])
    }
    

    return (
        <div className={d.dialogs}>
            {props.dialogs.map(el => <Message key={el.id} ava={el.ava} name={el.name} id={el.id}/>)}
            <div className={d.inp}>
                {message.map(el => <Dialog key={el.id} id={el.id} message={el.message}/>)}
                <NewPost callBack={addNewMessage} name={'Send'}/>
            </div>
        </div>
    );
};
