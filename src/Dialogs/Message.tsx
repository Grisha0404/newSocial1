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

    const addNewMessage = (title: string) => {

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
                        <NewPost  callBack={addNewMessage} name={'Send'}/>
                    </div>
                </div>
            }
        </div>
    );
};
