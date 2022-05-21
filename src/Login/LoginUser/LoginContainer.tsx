import React from 'react';
import style from './login.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {LoginUser} from "./LoginUser";
import {MeType} from "../../Redux/API";

export const LoginContainer = () => {
    const authMe = useSelector<AppRootStateType, MeType>(state => state.login.data)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    return (
        <div className={style.loginLink}>
            <LoginUser authMe={authMe} isAuth={isAuth}/>
        </div>
    );
};