import React from 'react';
import s from './post.module.css'
import {Like} from "./Like";

type PostsType = {
    id: string
    message: string
    likesCounts: number
}


export const Post = (props: PostsType) => {
    return (
        <div className={s.post}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxaYyNHy6PVbY0IHg6NY10JVzxiqEGuWvyQ&usqp=CAU'}/>
            <span>{props.message}<Like/></span>
        </div>
    );
};
