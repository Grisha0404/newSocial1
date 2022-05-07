import React, {useEffect, useRef} from 'react';
import {InfoUser} from "../InfoUser";
import API, {UsersProfileType} from "../../Redux/API";
import {useDispatch, useSelector} from "react-redux";
import {currentProfileTC, getUserProfile, getUsersProfileAC} from "../../Reducer/profilePageReducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {useParams} from "react-router-dom";
import {IsFetching} from "../../Common/IsFeatching";
import {getFetchingAC} from "../../Reducer/usersReducer";

export const InfoProfile = () => {
    const profile = useSelector<AppRootStateType, UsersProfileType>(state => state.profilePage.profile)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.users.fetch)
    const dispatch = useDispatch()
    //берет из url id-выбранного юзера
    const params = useParams()

    useEffect(() => {
        dispatch(currentProfileTC())
        dispatch(getFetchingAC(false))
        dispatch(getUserProfile(params.id))
    }, [dispatch]);

    let fetchingParams = isFetching ? <InfoUser profile={profile}/> : <IsFetching width={'300px'} height={'200px'}/>
    let pageProfiler = params.id === ':id' ? 'Yo, men! Here could be your profile!' : fetchingParams

    return (
        <div>
            {pageProfiler}
            <div style={{textAlign: 'left', padding: '20px'}}>
                My Posts
            </div>
        </div>
    );
};
