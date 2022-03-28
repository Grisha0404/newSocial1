import React from 'react';
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import store, {ActionType, PostType, ProfilePageType} from "../state/state";
import {Info} from "./Info";
import {Image} from "./Image";
import s from "./post.module.css";
import {addPostAC, propfilePageReducer} from "../reducer/profilePage-reducer";

type ProfileType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfileType) => {
    const addNewPost = (title: string) => {
        props.dispatch({type: 'Add-post', newPostText: title})

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
                {props.posts.map(el => <Post key={el.id} id={el.id} message={el.message}
                                             likesCounts={el.likesCounts}/>)}
            </div>
        </div>
    );
};
