import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {addMessageAC, MessagesPageType} from "../../Reducer/dialogsPageReducer";
import {Message} from "./Message/Message";
import {UniversalInput} from "../../Common/UniversalInput";
import d from '../dialog.module.css'

export const MessageContainer = () => {

    const messages = useSelector<AppRootStateType, MessagesPageType>(state => state.dialogsPage)
    const dispatch = useDispatch()

    const addNewMessage = useCallback((title: string) => {
        dispatch(addMessageAC(title))
    }, [dispatch])

    return (
        <div>
            {messages.messages.map(el => <Message key={el.id} id={el.id} message={el.message}/>)}
            <div className={d.inp}>
                <UniversalInput callback={addNewMessage} name={'Send'}/>
            </div>
        </div>
    );
};
