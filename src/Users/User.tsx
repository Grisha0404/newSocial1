import React from 'react';
import userPhoto from "../Common/image/userPhoto.png";
import {UsersType} from "../Reducer/usersReducer";
import style from './users.module.css'
import {NavLink} from "react-router-dom";

type UserType = {
    users: UsersType[]
    callBack: (follow: boolean, userId: number) => void
}

export const User: React.FC<UserType> = ({users, callBack}) => {
    return (
        <div className={style.users}>
            {
                users.map(u =>
                    <div key={u.id}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'no photo'}
                                 style={{width: "60px", height: "70px"}}/>
                        </NavLink>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                        <button
                            onClick={() => callBack(u.followed, u.id)}>{u.followed ? "FOLLOW" : 'UNFOLLOW'}</button>
                    </div>
                )
            }
        </div>
    );
};
