import React from 'react';
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {addPostAC, ProfilePageType} from "../../Reducer/profilePageReducer";
import s from "../profile.module.css";
import {UniversalInput} from "../../Common/UniversalInput";

export const PostsContainer= () => {
    const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    const dispatch = useDispatch()

    const addPost = (title: string) => {
        dispatch(addPostAC(title))
    }

    return (
        <div>

            <div className={s.inp}>
                <h3>
                    My Posts
                </h3>
                <UniversalInput callback={addPost} name={'Add post'}/>
            </div>
            {profilePage.posts.map(el => <Post key={el.id} id={el.id} message={el.message}
                                               likesCounts={el.likesCounts}/>)}
        </div>
    );
};