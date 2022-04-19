import React, {memo, useCallback, useState} from 'react';
import s from '../Profile/PostsContainer/Post/post.module.css'

type LikeType = {
    likesCounts: number
}

export const Like = memo((props: LikeType) => {
    let [like, setLike] = useState(props.likesCounts)

    const addLike = useCallback(() => {
        setLike(like++)
    },[like])

    return (
        <div className={s.like}>
            <button onClick={addLike}>{like} ♡</button>
        </div>
    );
});
