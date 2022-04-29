import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import API from "../Redux/API";
import {followAC, getTotalCountAC, setSelectorAC, setUsersAC, UsersType} from "../Reducer/usersReducer";
import {User} from "./User";
import {Selector} from "./Selector";
import style from './users.module.css'
import loadingImg from '../Common/image/loading__.gif'

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.users.users)
    //число кол-ва users
    const totalCount = useSelector<AppRootStateType, number>(state => state.users.totalCount)
    //выбраная страница
    const currentPage = useSelector<AppRootStateType, number>(state => state.users.currentPage)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        const usersContainer = async () => {
            try {
                const {data} = await API.usersFriends(currentPage);
                const {items, error, totalCount} = data;
                dispatch(getTotalCountAC(totalCount))
                error ? dispatch(setUsersAC(error)) : dispatch(setUsersAC(items))
            } catch (err) {
                console.log('err ', err);
            } finally {
                console.log("FIN")
            }

        }

        usersContainer()
    }, [dispatch, currentPage])


    const setSelectorClick = (page: number) => {
        dispatch(setSelectorAC(page))
    }
    const clickHandler = (follow: boolean, userId: number) => {
        dispatch(followAC(follow, userId))
    }

    return (
        <div className={style.usersContainer}>
            loading ?
            <User users={users} callBack={clickHandler}/>
            <Selector callBack={setSelectorClick} currentPage={currentPage}
                      totalCount={totalCount}/>
            :
            <div>
                <img src={loadingImg}/>
            </div>
        </div>
    );
};
