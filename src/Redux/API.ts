import axios from 'axios';
import {SetStateAction} from "react";
import {UsersType} from "../Reducer/usersReducer";
import {PATH} from "../App";

const configOMB = {
    baseURL: 'https://social-network.samuraijs.com',
};
//const key = '22986';
const axiosInstance = axios.create(configOMB);

const API = {
    usersFriends: (currentPage: number) => {
        const query = `/api/1.0/users?page=${currentPage}&count=15`;
        return axiosInstance.get<{}, TestType<ItemsType>>(query);
    },
    usersProfile: (id:any)=>{
        const query = `/api/1.0/profile/` + id;
        return axiosInstance.get<{}, TestType<UsersProfileType>>(query);
    }

};

type TestType<T> = {
    data: T
}
export type UsersProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string,
    },
}
export type ItemsType = {
    items: Array<UsersType>,
    totalCount: number,
    error: SetStateAction<any>,
}


export default API;
