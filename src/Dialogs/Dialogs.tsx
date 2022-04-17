import React from 'react';
import d from './dialog.module.css'
import {MessagesPageType} from "../Reducer/dialogsPageReducer";
import {NewPost} from "../Profile/NewPost";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {addFriendAC} from "../Reducer/dialogsPageReducer";
import {Dialog} from "./Dialog";

export const Dialogs = () => {
    const dialogs = useSelector<AppRootStateType, MessagesPageType>(state => state.dialogsPage)
    const dispatch = useDispatch()
    const addFriend = (title: string) => {
        dispatch(addFriendAC(title))
    }

    return (
        <div className={d.dialogs}>
            <NewPost callBack={addFriend}
                     name={'add friends'}/>
            {dialogs.dialogs.map(el => <Dialog id={el.id} key={el.id} ava={el.ava}
                                               name={el.name}/>)}

        </div>
    );
};
