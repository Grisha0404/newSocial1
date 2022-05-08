import React, {useEffect} from 'react';
import style from './login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DataInitialType, getLoginAuthUserTC} from "../../Reducer/authUsersReducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {LoginUser} from "./LoginUser";

export const LoginContainer = () => {
    const authUser = useSelector<AppRootStateType, DataInitialType>(state => state.login)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLoginAuthUserTC())
    }, [dispatch])

    return (
        <div className={style.loginLink}>
            <LoginUser login={authUser.login} email={authUser.email} id={authUser.id} isAuth={isAuth}/>
        </div>
    );
};