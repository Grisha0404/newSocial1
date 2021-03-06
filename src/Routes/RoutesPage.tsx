import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";
import {News} from "../News/News";
import {Music} from "../Music/Music";
import {Settings} from "../Settings/Settings";
import {UsersContainer} from "../Users/UsersContainer";
import {LoginPage} from "../Login/LoginPage";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";
import {UsersProfileType} from "../Redux/API";

export const PATH = {
    PROFILE: '/profile/:id',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings',
    FRIENDS: '/friends',
    LOGIN: '/login',
}

export const RoutesPage = () => {
    return (
        <div className={'Content'}>
            <Routes>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={PATH.PROFILE}
                       element={<Profile/>}/>
                <Route path={PATH.DIALOGS}
                       element={<Dialogs/>}/>
                <Route path={PATH.NEWS} element={<News/>}/>
                <Route path={PATH.MUSIC} element={<Music/>}/>
                <Route path={PATH.SETTINGS} element={<Settings/>}/>
                <Route path={PATH.FRIENDS} element={<UsersContainer/>}/>
                <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>
                <Route path={'404'} element={<h1 style={{textAlign: 'center'}}>404 NOT FOUND</h1>}/>
            </Routes>
        </div>
    );
};
