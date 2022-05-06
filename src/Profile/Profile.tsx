import React from 'react';
import {UniversalInput} from "../Common/UniversalInput";
import s from "./profile.module.css";
import {InfoProfile} from "./InfoProfile/InfoProfile";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {useDispatch} from "react-redux";
import {addPostAC} from "../Reducer/profilePageReducer";


export const Profile = () => {
    const dispatch = useDispatch()

    const addPost = (title: string) => {
        dispatch(addPostAC(title))
    }

    return (
        <div className={s.profile}>
            <InfoProfile/>
            <div className={s.inp}>
                <UniversalInput callback={addPost} name={'Add post'}/>
            </div>
            <PostsContainer/>
        </div>
    );
};
