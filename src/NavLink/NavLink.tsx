import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {UsersProfileType} from "../Redux/API";

export const NavBar = () => {
    const profile = useSelector<AppRootStateType, UsersProfileType>(state => state.profilePage.profile)
    return (
        <div className={'NavLin'}>
            <div className={'NavLinContainer'}>
                <div>
                    <NavLink to={'/profile/'+ profile.userId}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs'>Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music'>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings'>Settings</NavLink>
                </div>
                <div>
                    <NavLink to='/friends'>Friends</NavLink>
                </div>
            </div>
        </div>
    );
};
