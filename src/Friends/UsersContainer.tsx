import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import API from "../Redux/API";
import {followAC, setUsersAC, UsersType} from "../Reducer/usersReducer";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.users.users)
    const dispatch = useDispatch();

    const clickHandler = (follow: boolean, userId: number) => {
        dispatch(followAC(follow, userId))
    }
    useEffect(() => {
        const usersContainer = async () => {
            try {
                const {data} = await API.usersFriends();
                const {items, error} = data;
                error ? dispatch(setUsersAC(error)) : dispatch(setUsersAC(items))
            } catch (err) {
                console.log('err ', err);
            }
        }
        setTimeout(() => {
            usersContainer()
        }, 100)
    }, [dispatch])

    return (
        <div>
            {
                users.map(u =>
                    <div key={u.id}>
                        <img src={u.photos.small} alt={'not photo'}/>
                        <div>{u.name}</div>
                        <span>{u.status}</span>
                        <button
                            onClick={() => clickHandler(u.followed, u.id)}>{u.followed ? "FOLLOW" : 'UNFOLLOW'}</button>
                    </div>
                )
            }

        </div>
    );
};
