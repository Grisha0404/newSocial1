import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {followUserTC, getUsersTC, setSelectorAC, UsersType} from "../Reducer/usersReducer";
import {User} from "./User";
import {Selector} from "./Selector";
import style from './users.module.css'
import {LoginPage} from "../Login/LoginPage";
import {Navigate} from "react-router-dom";

export const UsersContainer = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.users.users)
    //число кол-ва users
    const totalCount = useSelector<AppRootStateType, number>(state => state.users.totalCount)
    //выбраная страница
    const currentPage = useSelector<AppRootStateType, number>(state => state.users.currentPage)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersTC(currentPage))
    }, [dispatch, currentPage])

    const setSelectorClick = (page: number) => {
        dispatch(setSelectorAC(page))
    }
    const clickFollowHandler = (follow: boolean, userId: number) => {
        dispatch(followUserTC(follow, userId))
    }
    if (!isAuth) return <Navigate to={'/login'}/>
    return (
        <div>
            {
                isAuth ?
                    <div className={style.usersContainer}>
                        <User users={users} callBack={clickFollowHandler}/>
                        <Selector callBack={setSelectorClick} currentPage={currentPage}
                                  totalCount={totalCount}/>
                    </div>
                    :
                    <LoginPage/>

            }
        </div>
    );
};
