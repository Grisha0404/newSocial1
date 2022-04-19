import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';


type NewPostType = {
    callback: (title: string) => void,
    name: string
}

export const UniversalInput = memo((props: NewPostType) => {

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
            props.callback(title)
        }
        setTitle('')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (title.trim() === '') {
                setError("Pleas, into you post!")
            } else {
                props.callback(title)
            }
            setTitle('')
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
});
