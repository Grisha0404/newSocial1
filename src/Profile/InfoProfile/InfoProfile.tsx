import React, {useEffect, useState} from 'react';
import {InfoUser} from "./InfoUser";
import {UsersProfileType} from "../../Redux/API";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {useParams} from "react-router-dom";
import {StatusProfile} from "./StatusProfile/StatusProfile";
import {getStatusProfile, getUserProfileTC} from "../../Reducer/profilePageReducer";
import s from '../profile.module.css'

export const InfoProfile = () => {
    const profile = useSelector<AppRootStateType, UsersProfileType>(state => state.profilePage.profile)
    const dispatch = useDispatch()
    //берет из url id-выбранного юзера
    const params = useParams()

    useEffect(() => {
        dispatch(getStatusProfile(params.id))
        dispatch(getUserProfileTC(params.id))
    }, [dispatch, params.id]);

    return (
        <div className={s.profileContainer}>
            {params.id === ':id' ? 'Yo, men! Here could be your profile!' :  <InfoUser profile={profile}/>}
            <StatusProfile/>
        </div>
    );
};
