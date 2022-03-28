import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './post.module.css'
import {ActionType} from "../state/state";

type NewPostType = {
    callBack: (title: string) => void
    name: string
    dispatch: (action: ActionType) => void
}

export const NewPost = (props: NewPostType) => {
    let [title, setTitle] = useState('')
    let [error, setError] = useState('')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError('')
    }
    const addNewPosts = () => {
        if (title.trim() === '') {
            setError("Pleas, into you post!")
        } else {
            props.callBack(title)
            //props.dispatch({type: 'add-message', title:title})
            console.log(title)
        }
        setTitle('')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewPosts();
        }
    }


    return (
        <div>
            <div>
                <input value={title} onKeyPress={onKeyPressHandler} onChange={changeHandler}/>
                <span style={{color: 'red'}}>{error}</span>
                <button onClick={addNewPosts}>{props.name}</button>
            </div>
        </div>
    );
};
