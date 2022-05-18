import React, {useEffect} from 'react';
import {InfoUser} from "./InfoUser";
import {StatusProfile} from "./StatusProfile/StatusProfile";
import s from '../profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {UsersProfileType} from "../../Redux/API";
import {useParams} from "react-router-dom";
import {getStatusProfile, getUserProfileTC} from "../../Reducer/profilePageReducer";

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
            <>
                <InfoUser profile={profile}/>
                <StatusProfile/>
            </>
        </div>
    );
};
