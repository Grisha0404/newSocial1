import React, {useEffect} from 'react';
import s from "./profile.module.css";
import {InfoProfile} from "./InfoProfile/InfoProfile";
import {PostsContainer} from "./PostsContainer/PostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {LoginPage} from "../Login/LoginPage";
import {getLoginAuthUserTC} from "../Reducer/authUsersReducer";
import {Navigate} from "react-router-dom";


export const Profile = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLoginAuthUserTC())
    }, [dispatch])
    if (!isAuth) return <Navigate to={'/login'}/>
    return (
        <div className={s.profile}>
            {isAuth ?
                <>
                    <InfoProfile/>
                    <PostsContainer/>
                </>
                :
                <LoginPage/>
            }

        </div>
    );
};
