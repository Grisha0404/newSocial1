import React from 'react';
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {addPostAC, ProfilePageType} from "../../Reducer/profilePageReducer";
import s from "../profile.module.css";
import {UniversalInput} from "../../Common/UniversalInput";
import ava from '../../Common/image/ava.jpeg'

export const PostsContainer = () => {
    const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    const dispatch = useDispatch()

    const addPost = (title: string) => {
        dispatch(addPostAC(title))
    }

    return (
        <div className={s.postContainer}>
            <div className={s.avaInputContainer}>
                <img src={ava}/>
                <div className={s.inp}>
                    <UniversalInput callback={addPost} name={'Add post'}/>
                </div>
            </div>
            <div className={s.poster}>
                {profilePage.posts.map(el => <Post key={el.id} id={el.id} message={el.message}
                                                   likesCounts={el.likesCounts}/>)}
            </div>
        </div>
    );
};