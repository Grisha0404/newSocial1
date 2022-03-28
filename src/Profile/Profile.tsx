import React from 'react';
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import store, {ProfilePageType} from "../state/state";
import {Info} from "./Info";
import {Image} from "./Image";
import s from "./post.module.css";

type ProfileType = ProfilePageType

export const Profile = (props: ProfileType) => {

    return (
        <div className={'profile'}>
            <Image/>
            <Info/>
            <div className={s.str}>
                My Posts
            </div>
            <div className={s.inp}>
                <NewPost dispatch={store.dispatch.bind(store)} callBack={(title) => store.addNewPost(title)}
                         name={'Add post'}/>
            </div>
            <div>
                {props.posts.map(el => <Post key={el.id} id={el.id} message={el.message}
                                             likesCounts={el.likesCounts}/>)}
            </div>
        </div>
    );
};
