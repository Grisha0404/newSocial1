import React from 'react';
import style from './LoginUser/login.module.css';
import {AuthWithOtherSocial} from "./AuthWithOtherSocial";
import {InnerForm} from "./LoginForm";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {Navigate} from "react-router-dom";
import {UsersProfileType} from "../Redux/API";


export const LoginPage = () => {
    const profile = useSelector<AppRootStateType, UsersProfileType>(state => state.profilePage.profile)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    if (isAuth) return <Navigate to={'/profile/' + profile.userId}/>
    return (
        <div className={style.loginPage}>
            <div className={style.loginContainer}>
                <h2>Join NewSocial to hear the latest from people you follow</h2>
                <AuthWithOtherSocial/>
                <h4>-------- or --------</h4>
                <div className={style.login}>
                    <InnerForm />
                </div>
            </div>
        </div>
    );
};