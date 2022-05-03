import React, {useEffect} from 'react';
import API from "../../Redux/API";
import {NavLink} from "react-router-dom";
import style from './login.module.css'
import {useDispatch, useSelector} from "react-redux";
import {DataInitialType, setLoginUsersAC} from "../../Reducer/authUsersReducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {LoginUser} from "./LoginUser";

export const LoginContainer = () => {
    const authUser = useSelector<AppRootStateType, DataInitialType>(state => state.login)
    const dispatch = useDispatch()

    useEffect(() => {
        const login = async () => {
            try {
                const {data} = await API.authUser()
                dispatch(setLoginUsersAC(data.data))
            } catch (error) {
                alert('Please, login!')
            }
        }
        login()
    }, [dispatch])

    return (
        <div className={style.loginLink}>
            {authUser.id === null ?
                <div>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
                :
                <LoginUser login={authUser.login} email={authUser.email}/>
            }
        </div>
    );
};