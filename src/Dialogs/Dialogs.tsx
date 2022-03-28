import React from 'react';
import {Message} from "./Message";
import d from './dialog.module.css'
import store, {ActionType, DialogsType, MessagesType} from "../state/state";
import {NewPost} from "../Profile/NewPost";


type DialogType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    dispatch: (action: ActionType) => void
}


export const Dialogs = (props: DialogType) => {
    const addFriend = (title: string) => {
        props.dispatch({type: 'add-new-friend', title})
    }

    return (
        <div className={d.dialogs}>
            <NewPost callBack={addFriend}
                     name={'add friends'}/>
            {props.dialogs.map(el => <Message key={el.id} dispatch={store.dispatch.bind(store)} ava={el.ava}
                                              name={el.name} id={el.id}/>)}

        </div>
    );
};
