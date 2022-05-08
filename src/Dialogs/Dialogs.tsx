import React, {useCallback} from 'react';
import d from './dialog.module.css'
import {UniversalInput} from "../Common/UniversalInput";
import {useDispatch, useSelector} from "react-redux";
import {addFriendAC} from "../Reducer/dialogsPageReducer";
import {DialogsContainer} from "./DialogsContainer/DialogsContainer";
import {AppRootStateType} from "../Redux/redux-store";
import {Navigate} from "react-router-dom";

export const Dialogs = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    const dispatch = useDispatch()

    const addFriend = useCallback((title: string) => {
        dispatch(addFriendAC(title))
    }, [dispatch])

    if (!isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={d.dialogs}>
            <UniversalInput callback={addFriend} name={'add friends'}/>
            <DialogsContainer/>
        </div>
    );
};
