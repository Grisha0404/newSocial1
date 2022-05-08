import React from 'react';
import s from "./profile.module.css";
import {InfoProfile} from "./InfoProfile/InfoProfile";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {Navigate} from 'react-router-dom';


export const Profile = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    if (!isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.profile}>
            <InfoProfile/>
            <PostsContainer />
        </div>
    );
};
