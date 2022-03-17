import React, {useState} from 'react';
import d from './dialog.module.css'
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog";
import {NewPost} from "../Profile/NewPost";
import {DialogsType, MessagesType} from "../state/state";
import {v1} from "uuid";


type MessageType = {
    id: string
    name: string
    ava: string

}


export const Message = (props: MessageType) => {
    let [collapsed, setCollapsed] = useState(false)
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
        <div className={d.message}>
            <button style={{border:'none', backgroundColor:'white'}} onClick={()=> setCollapsed(!collapsed)}><img src={props.ava}/> {props.name}</button>
            { collapsed &&
                <div>
                    {message.map(el => <Dialog key={el.id} id={el.id} message={el.message}/>)}
                <div className={d.inp}>
                    <NewPost callBack={addNewMessage} name={'Send'}/>
                </div>
                </div>
            }
        </div>
    );
};
