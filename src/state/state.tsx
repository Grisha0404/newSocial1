import {v1} from 'uuid';
import React, {ChangeEvent, useState} from 'react';


export type PostType = {
    id: string
    message: string
    likesCounts: number
}
export type DialogsType = {
    id: string
    name: string
    ava: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessagesPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}


export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCounts: 11},
            {id: v1(), message: "It's my first post!", likesCounts: 25}
        ],
        newPostText: 'it-kamasutra'
    },
    messagesPage: {
        dialogs: [
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
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'}
        ]
    },
}


