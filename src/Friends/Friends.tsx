import React, {useState} from 'react';
import API from "../Redux/API";
import {UsersContainer} from "./UsersContainer";

export type UsersType = {
    name: string,
    id: number,
    photos: {
        small: string,
        large: string,
    }
    status: string,
    followed: boolean
}

export const Friends = () => {
    const [users, setUsers] = useState<UsersType[]>()
    const [error, setError] = useState('')

    const usersContainer = async () => {
        try {
            const {data} = await API.usersFriends();
            const { items, error} = data;
            error ? setError(error) : setUsers(items)
        } catch (err) {
            console.log('err ', err);
        }
    };
    return (
        <div>
            <button onClick={usersContainer}>show</button>
            {users?.map((u, index)=> <UsersContainer key={index} name={u.name}
                                                     largePhotos={u.photos.large} smallPhotos={u.photos.small}
                                                     status={u.status} followed={u.followed}/>) || error}
        </div>
    );
};
