import axios from 'axios';
import {UsersType} from "../Friends/Friends";
import {SetStateAction} from "react";

const configOMB = {
    baseURL: 'https://social-network.samuraijs.com',
};
const key = '22986';
const axiosInstance = axios.create(configOMB);

const API = {
    usersFriends: () => {
        const query = `/api/1.0/users`;
        return axiosInstance.get<{}, TestType<ItemsType>>(query);
    }
};

type TestType<T> = {
    data: T
}

export type ItemsType = {
    items: Array<UsersType>,
    totalCount?: number,
    error: SetStateAction<string>,
}


export default API;
