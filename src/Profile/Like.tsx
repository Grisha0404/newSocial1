import React, {useState} from 'react';
import s from './post.module.css'

type LikeType = {}

export const Like = (props: LikeType) => {
    let [like, setLike] = useState(0)

    const addLike = () => {
        setLike(like++)
    }

    return (
        <div className={s.like}>
            <button onClick={addLike}>{like} ♡</button>
        </div>
    );
};
