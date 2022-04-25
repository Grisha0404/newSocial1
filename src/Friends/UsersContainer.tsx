import React, {useState} from 'react';

type UsersContainerType={
    name: string,
    status: string,
    followed: boolean,
    largePhotos: string,
    smallPhotos:string
}

export const UsersContainer = (props:UsersContainerType) => {

    const [follow, setFollow] = useState<boolean>(props.followed)
    const clickHandler = () => {
      setFollow(!follow)
    }

    return (
        <div>
            <img src={props.smallPhotos} alt={'not photo'}/>
            <div>{props.name}</div>
            <span>{props.status}</span>
            <button onClick={clickHandler}>{follow ? 'UNFOLLOW': "FOLLOW"}</button>
        </div>
    );
};
