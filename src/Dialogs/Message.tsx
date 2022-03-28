import React, {useState} from 'react';
import d from './dialog.module.css'
import {Dialog} from "./Dialog";
import {NewPost} from "../Profile/NewPost";
import store, {ActionType} from "../state/state";

type MessageType = {
    id: string
    name: string
    ava: string
    dispatch: (action: ActionType) => void
}

export const Message = (props: MessageType) => {
    let [collapsed, setCollapsed] = useState(false)
    // let [message, setMessage] = useState<Array<MessagesType>>([
    //     {id: v1(), message: 'Hi'},
    //     {id: v1(), message: 'How are you?'},
    //     {id: v1(), message: 'Yo'},
    //     {id: v1(), message: 'Yo'}
    // ])
    const addNewMessage = (title: string) => {
        //let messageNew: MessagesType = {id: v1(), message: title}
        //setMessage([ ...message, messageNew])
        props.dispatch({type: 'add-message', title: title})
    }
    return (
        <div className={d.message}>
            <button style={{border: 'none', backgroundColor: 'white'}} onClick={() => setCollapsed(!collapsed)}><img
                src={props.ava}/> {props.name}</button>
            {collapsed &&
                <div>
                    {store._state.messagesPage.messages.map(el => <Dialog key={el.id} id={el.id}
                                                                          message={el.message}/>)}
                    <div className={d.inp}>
                        <NewPost dispatch={store.dispatch.bind(store)} callBack={(title) => store.addNewMessage(title)}
                                 name={'Send'}/>
                    </div>
                </div>
            }
        </div>
    );
};
