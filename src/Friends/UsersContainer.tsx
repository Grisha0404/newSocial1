import React from 'react';

type UsersContainerType={
    name: string,
    status: string,
    followed: boolean,
    largePhotos: string,
    smallPhotos:string
}

export const UsersContainer = (props:UsersContainerType) => {

    return (
        <div>
            <img src={props.smallPhotos} alt={'not photo'}/>
            <div>{props.name}</div>
            <span>{props.status}</span>
            <span>{props.followed}</span>
        </div>
    );
};
