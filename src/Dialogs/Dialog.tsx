import React, {useState} from 'react';
import d from './dialog.module.css'
import {NewPost} from "../Profile/NewPost";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {addMessageAC, MessagesPageType} from "../Reducer/dialogsPageReducer";
import {Message} from "./Message";

export type DialogsType = {
    id: string
    name: string
    ava: string
}

export const Dialog = (props: DialogsType) => {

    const messages = useSelector<AppRootStateType, MessagesPageType>(state => state.dialogsPage)
    const dispatch = useDispatch()
    let [collapsed, setCollapsed] = useState(false)

    const addNewMessage = (title: string) => {
        dispatch(addMessageAC(title))
    }
    return (
        <div className={d.message}>
            <button style={{border: 'none', backgroundColor: 'white'}} onClick={() => setCollapsed(!collapsed)}><img
                src={props.ava}/> {props.name}</button>
            {collapsed &&
                <div>
                    {messages.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)}
                    <div className={d.inp}>
                        <NewPost callBack={addNewMessage} name={'Send'}/>
                    </div>
                </div>
            }
        </div>
    );
};