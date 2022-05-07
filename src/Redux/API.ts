import axios from 'axios';
import {SetStateAction} from "react";
import {UsersType} from "../Reducer/usersReducer";
import {DataInitialType} from "../Reducer/authUsersReducer";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com',
    withCredentials: true,
    headers: {
        'API-KEY': 'ec9357aa-327b-4213-99ec-0ffb01e452b5',
    }
});

const API = {
    usersFriends: (currentPage: number) => {
        const query = `/api/1.0/users?page=${currentPage}&count=10`;
        return axiosInstance.get<{}, TestType<ItemsType>>(query);
    },
    usersProfile: (id: string | undefined) => {
        const query = `/api/1.0/profile/` + id;
        return axiosInstance.get<{}, TestType<UsersProfileType>>(query);
    },
    authUser: () => {
        const query = `/api/1.0/auth/me`;
        return axiosInstance.get<{}, TestType<AuthUserType>>(query);
    },
    followUsers: (id: number) => {
        const query = `/api/1.0/follow/` + id;
        return axiosInstance.post<{}, TestType<FollowUserType>>(query);
    },
    unFollowUsers: (id: number) => {
        const query = `/api/1.0/follow/` + id;
        return axiosInstance.delete<{}, TestType<FollowUserType>>(query);
    },
    currentProfile:()=>{
        const query = `/api/1.0/profile`;
        debugger
        return axiosInstance.put<{}, TestType<UsersProfileType>>(query)
    }

};

//Type
type TestType<T = {}> = {
    data: T
}
export type FollowUserType = {
    resultCode: number
    messages: [],
    data: {}
}

export  type AuthUserType = {
    data: DataInitialType,
    messages: [],
    fieldsErrors: [],
    resultCode: number
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
