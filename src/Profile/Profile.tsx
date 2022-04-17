import React from 'react';
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import {ProfilePageType} from "../Reducer/profilePageReducer";
import {Info} from "./Info";
import {Image} from "./Image";
import s from "./post.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {addPostAC} from "../Reducer/profilePageReducer";


export const Profile = () => {
    const profilePage = useSelector<AppRootStateType, ProfilePageType>(state => state.profilePage)
    const dispatch = useDispatch()
    const addNewPost = (title: string) => {
        dispatch(addPostAC(title))
    }
    return (
        <div className={'profile'}>
            <Image/>
            <Info/>
            <div className={s.str}>
                My Posts
            </div>
            <div className={s.inp}>
                <NewPost callBack={addNewPost}
                         name={'Add post'}/>
            </div>
            <div>
                {profilePage.posts.map(el => <Post key={el.id} id={el.id} message={el.message}
                                                   likesCounts={el.likesCounts}/>)}
            </div>
        </div>
    );
};
