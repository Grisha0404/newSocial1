import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import API from "../Redux/API";
import {followAC, setSelectorAC, setUsersAC, UsersType} from "../Reducer/usersReducer";
import {User} from "./User";
import {Selector} from "./Selector";

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.users.users)
    const pageSize = useSelector<AppRootStateType, number>(state => state.users.pagesSize)
    const [totalCount, setTotalCount] = useState<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const dispatch = useDispatch();

    const clickHandler = (follow: boolean, userId: number) => {
        dispatch(followAC(follow, userId))
    }

    useEffect(() => {
        const usersContainer = async () => {
            try {
                const {data} = await API.usersFriends(currentPage, pageSize);
                const {items, error, totalCount} = data;
                setTotalCount(totalCount)
                error ? dispatch(setUsersAC(error)) : dispatch(setUsersAC(items))
            } catch (err) {
                console.log('err ', err);
            }
        }
        usersContainer()
    }, [dispatch, currentPage])


    const setSelectorClick = (page: number) => {
        setCurrentPage(page)
        dispatch(setSelectorAC(page))
    }

    return (
        <div>
            <Selector callBack={setSelectorClick} pageSize={pageSize} currentPage={currentPage}
                      totalCount={totalCount}/>
            <User users={users} callBack={clickHandler}/>
        </div>
    );
};
