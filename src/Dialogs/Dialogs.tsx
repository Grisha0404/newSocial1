import React, {useState} from 'react';
import {Message} from "./Message";
import d from './dialog.module.css'
import {DialogsType, MessagesPageType, MessagesType} from "../state/state";
import {NewPost} from "../Profile/NewPost";
import {v1} from "uuid";


type DialogType = MessagesPageType


export const Dialogs = (props: DialogType) => {
    let [friends, setFriends] = useState<Array<DialogsType>>([
        {
            id: v1(),
            name: 'Pasha',
            ava: 'https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png'
        },
        {
            id: v1(),
            name: 'Olya',
            ava: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'
        },
        {
            id: v1(),
            name: 'Sasha',
            ava: 'https://iconape.com/wp-content/png_logo_vector/avatar-11.png'
        },
        {
            id: v1(),
            name: 'Leha',
            ava: 'https://preview.redd.it/dh5otp8kcf741.png?width=640&crop=smart&auto=webp&s=d795f12b5e3eea1ef4d7ceb8244fca98e2384dbf'
        }
    ])
    const newFriend = (title: string) => {
        let friendNew: DialogsType = {id: v1(), name: title, ava: 'http://proshloe.com/wp-content/uploads/2019/07/avatar_l.png'}
        setFriends([...friends, friendNew])
    }
    return (
        <div className={d.dialogs}>
            <NewPost callBack={newFriend} name={'add friends'}/>
            {friends.map(el => <Message key={el.id} ava={el.ava} name={el.name} id={el.id}/>)}

        </div>
    );
};
