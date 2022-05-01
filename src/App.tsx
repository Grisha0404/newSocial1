import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Header} from "./Heder/Header";
import {NavBar} from "./NavLink/NavLink";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Settings} from "./Settings/Settings";
import {Music} from "./Music/Music";
import {UsersContainer} from "./Friends/UsersContainer";


export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings',
    FRIENDS: '/friends',
}

const App = () => {

    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <div className={'Content'}>
                <Routes>
                    <Route path={PATH.PROFILE}
                           element={<Profile/>}/>
                    <Route path={PATH.DIALOGS}
                           element={<Dialogs/>}/>
                    <Route path={PATH.NEWS} element={<News/>}/>
                    <Route path={PATH.MUSIC} element={<Music/>}/>
                    <Route path={PATH.SETTINGS} element={<Settings/>}/>
                    <Route path={PATH.FRIENDS} element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
