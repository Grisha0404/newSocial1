import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import API from "../Redux/API";
import {followAC, setSelectorAC, setUsersAC, UsersType} from "../Reducer/usersReducer";
import userPhoto from '../Common/image/userPhoto.png'
import s from './users.module.css'

export const UsersContainer = () => {
    const users = useSelector<AppRootStateType, UsersType[]>(state => state.users.users)
    const pageSize = useSelector<AppRootStateType, number>(state => state.users.pagesSize)
    const currentPage = useSelector<AppRootStateType, number>(state => state.users.currentPage)
    const [totalCount, setTotalCount] = useState<number>(1)

    const dispatch = useDispatch();

    const clickHandler = (follow: boolean, userId: number) => {
        dispatch(followAC(follow, userId))
    }

    useEffect(() => {
        const usersContainer = async () => {
            try {
                const {data} = await API.usersFriends(pageCount, pageSize);
                const {items, error, totalCount} = data;
                console.log(data)
                setTotalCount(totalCount)
                error ? dispatch(setUsersAC(error)) : dispatch(setUsersAC(items))
            } catch (err) {
                console.log('err ', err);
            }
        }
        usersContainer()
    }, [dispatch, currentPage])
    console.log(currentPage)

    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const setSelectorClick = (page: number) => {
      dispatch(setSelectorAC(page))
    }

    return (
        <div>
            <div>
                <span>{pages.map((p, index) => <span key={index} onClick={()=>setSelectorClick(p)}
                                                     className={`${currentPage === p && s.selectedPages}`}> {p} </span>)}</span>
            </div>
            {
                users.map(u =>
                    <div key={u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt={'not photo'}
                             style={{width: "40px", height: "50px"}}/>
                        <div>{u.name}</div>
                        <span>{u.status}</span>
                        <button
                            onClick={() => clickHandler(u.followed, u.id)}>{u.followed ? "FOLLOW" : 'UNFOLLOW'}</button>
                    </div>
                )
            }

        </div>
    );
};
