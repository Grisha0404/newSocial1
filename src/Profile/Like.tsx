import React, {useState} from 'react';
import s from './post.module.css'

type LikeType = {
    likesCounts: number
}

export const Like = (props: LikeType) => {
    let [like, setLike] = useState(props.likesCounts)

    const addLike = () => {
        setLike(like++)
    }

    return (
        <div className={s.like}>
            <button onClick={addLike}>{like} ♡</button>
        </div>
    );
};
