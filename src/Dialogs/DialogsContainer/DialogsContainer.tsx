import React from 'react';
import {Dialog} from "./Dialog/Dialog";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {MessagesPageType} from "../../Reducer/dialogsPageReducer";
import s from '../dialog.module.css'

export const DialogsContainer = () => {
    const dialogs = useSelector<AppRootStateType, MessagesPageType>(state => state.dialogsPage)

    return (
        <div className={s.dialogContainer}>
            {dialogs.dialogs.map(el => <Dialog id={el.id} key={el.id} ava={el.ava}
                                               name={el.name}/>)}
        </div>
    );
};
