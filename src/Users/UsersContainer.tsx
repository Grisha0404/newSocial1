import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import API from "../Redux/API";
import {followAC, getFetchingAC, getTotalCountAC, setSelectorAC, setUsersAC, UsersType} from "../Reducer/usersReducer";
import {User} from "./User";
import {Selector} from "./Selector";
import style from './users.module.css'
import {IsFetching} from "../Common/IsFeatching";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.users.users)
    //число кол-ва users
    const totalCount = useSelector<AppRootStateType, number>(state => state.users.totalCount)
    //выбраная страница
    const currentPage = useSelector<AppRootStateType, number>(state => state.users.currentPage)
    //loading
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.users.fetch)

    const dispatch = useDispatch();

    useEffect(() => {
        const usersContainer = async () => {
            dispatch(getFetchingAC(false))
            try {
                const {data} = await API.usersFriends(currentPage);
                const {items, error, totalCount} = data;
                dispatch(getFetchingAC(true))
                dispatch(getTotalCountAC(totalCount))
                error ? dispatch(setUsersAC(error)) : dispatch(setUsersAC(items))
            } catch (err) {
                console.log('err usersContainer', err);
            }
        }
        usersContainer()

    }, [dispatch, currentPage])


    const setSelectorClick = (page: number) => {
        dispatch(setSelectorAC(page))
    }
    const clickFollowHandler = (follow: boolean, userId: number) => {
        const followUsers = async () => {
            try {
                follow ?
                    await API.unFollowUsers(userId)
                    :
                    await API.followUsers(userId)
            } catch (err) {
                console.log('err followUsers', err)
            }
        }
        followUsers()
        dispatch(followAC(follow, userId))
    }

    return (
        <div className={style.usersContainer}>
            {isFetching ?
                <>
                    <User users={users} callBack={clickFollowHandler}/>
                </>

                :
                <IsFetching width={'900px'} height={'650px'}/>
            }
            <Selector callBack={setSelectorClick} currentPage={currentPage}
                      totalCount={totalCount}/>
        </div>
    );
};
