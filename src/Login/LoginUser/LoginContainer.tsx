import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import style from './login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DataInitialType, getLoginAuthUserTC} from "../../Reducer/authUsersReducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {LoginUser} from "./LoginUser";

export const LoginContainer = () => {
    const authUser = useSelector<AppRootStateType, DataInitialType>(state => state.login)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLoginAuthUserTC())
    }, [dispatch])

    return (
        <div className={style.loginLink}>
            {authUser.id === null ?
                <div className={style.loginBlock}>
                    <NavLink to={'/login'} >Login</NavLink>
                </div>
                :
                <LoginUser login={authUser.login} email={authUser.email} id={authUser.id}/>
            }
        </div>
    );
};