import React, {useEffect} from 'react';
import {InfoUser} from "../InfoUser";
import API, {UsersProfileType} from "../../Redux/API";
import {useDispatch, useSelector} from "react-redux";
import {getUsersProfileAC} from "../../Reducer/profilePageReducer";
import {AppRootStateType} from "../../Redux/redux-store";

export const InfoProfile = () => {
    const profile = useSelector<AppRootStateType, UsersProfileType>(state => state.profilePage.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        const usersProfile = async () => {
            try {
                const {data} = await API.usersProfile();
                dispatch(getUsersProfileAC(data))
            } catch (err) {
                console.log('err ', err);
            }
        }
        usersProfile()
    },[dispatch]);

    return (
        <div>
            <img
                src={'https://static8.depositphotos.com/1370441/848/i/600/depositphotos_8486144-stock-photo-beach-and-tropical-sea.jpg'}/>
            <InfoUser profile={profile}/>
            <div style={{textAlign: 'left', padding: '20px'}}>
                My Posts
            </div>
        </div>
    );
};
