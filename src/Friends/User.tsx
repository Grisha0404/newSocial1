import React from 'react';
import userPhoto from "../Common/image/userPhoto.png";
import {UsersType} from "../Reducer/usersReducer";

type UserType = {
    users: UsersType[]
    callBack: (follow: boolean, userId: number) => void
}


export const User: React.FC<UserType> = ({users, callBack}) => {
    return (
        <div>
            {
                users.map(u =>
                    <div key={u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'not photo'}
                             style={{width: "40px", height: "50px"}}/>
                        <div>{u.name}</div>
                        <span>{u.status}</span>
                        <button
                            onClick={() => callBack(u.followed, u.id)}>{u.followed ? "FOLLOW" : 'UNFOLLOW'}</button>
                    </div>
                )
            }
        </div>
    );
};
