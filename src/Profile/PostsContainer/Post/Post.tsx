import React, {memo} from 'react';
import s from './post.module.css'
import {Like} from "../../../Common/Like";

export type PostType = {
    id: string
    message: string
    likesCounts: number
}

export const Post = memo((props: PostType) => {
    return (
        <div className={s.post}>
            <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxaYyNHy6PVbY0IHg6NY10JVzxiqEGuWvyQ&usqp=CAU'}/>
            <span>{props.message}<Like likesCounts={props.likesCounts}/></span>
        </div>
    );
});
