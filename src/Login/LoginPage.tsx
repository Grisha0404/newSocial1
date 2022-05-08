import React from 'react';
import style from './LoginUser/login.module.css'
import {LoginForm} from "./LoginForm";
import {AuthWithOtherSocial} from "./AuthWithOtherSocial";

export const LoginPage = () => {
    return (
        <div className={style.loginPage}>
            <div className={style.loginContainer}>
                <h2>Join NewSocial to hear the latest from people you follow</h2>
                <AuthWithOtherSocial/>
                <h4>-------- or --------</h4>
                <LoginForm/>
            </div>
        </div>
    );
};