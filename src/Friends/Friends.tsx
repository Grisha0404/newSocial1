import React, {useState} from 'react';
import API from "../Redux/API";
import {UsersContainer} from "./UsersContainer";
import {useDispatch, useSelector} from "react-redux";
import {setUsersAC} from "../Reducer/usersReducer";
import {AppRootStateType} from "../Redux/redux-store";

export type UsersType = {
    id: number,
    name: string,
    photos: {
        small: string,
        large: string,
    }
    status: string,
    followed: boolean
}

export const Friends = () => {

    const users = useSelector<AppRootStateType, UsersType[]>(state => state.users.users)
    const dispatch = useDispatch();
    const [error, setError] = useState('')

    const addUsers = (items:UsersType[]) =>{
        dispatch(setUsersAC(items))
    }

    const usersContainer = async () => {
        try {
            const {data} = await API.usersFriends();
            const { items, error} = data;
            error ? setError(error) : addUsers(items)
        } catch (err) {
            console.log('err ', err);
        }
    };

    return (
        <div>
            <button onClick={usersContainer}>show</button>
            {users.map((u, index)=> <UsersContainer key={index} name={u.name}
                                                     largePhotos={u.photos.large} smallPhotos={u.photos.small}
                                                     status={u.status} followed={u.followed}/>) || error}
        </div>
    );
};
