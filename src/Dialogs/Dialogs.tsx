import React, {useCallback} from 'react';
import d from './dialog.module.css'
import {UniversalInput} from "../Common/UniversalInput";
import {useDispatch} from "react-redux";
import {addFriendAC} from "../Reducer/dialogsPageReducer";
import {DialogsContainer} from "./DialogsContainer/DialogsContainer";

export const Dialogs = () => {

    const dispatch = useDispatch()

    const addFriend = useCallback((title: string) => {
        dispatch(addFriendAC(title))
    }, [dispatch])

    return (
        <div className={d.dialogs}>
            <UniversalInput callback={addFriend} name={'add friends'}/>
            <DialogsContainer/>
        </div>
    );
};
