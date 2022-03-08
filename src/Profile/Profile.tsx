import React, {useState} from 'react';
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import {PostType, ProfilePageType} from "../state/state";
import {v1} from "uuid";
import {Info} from "./Info";
import {Image} from "./Image";
import s from "./post.module.css";

type ProfileType = ProfilePageType

export const Profile = (props: ProfileType) => {

    let [post, setPost] = useState<Array<PostType>>([
        {id: v1(), message: 'Hi, how are you?', likesCounts: 11},
        {id: v1(), message: "It's my first post!", likesCounts: 13}])
    const addNewPost = (title: string) => {
        let postNew = {id: v1(), message: title, likesCounts: 0}
        setPost([postNew, ...post])
    }

    return (
        <div className={'profile'}>
            <Image/>
            <Info/>
            <div className={s.str}>
                My Posts
            </div>
            <div className={s.inp}>
            <NewPost callBack={addNewPost} name={'Add post'}/>
            </div>
            <div>
                {post.map(el => <Post key={el.id} id={el.id} message={el.message} likesCounts={el.likesCounts}/>)}
            </div>
        </div>
    );
};
