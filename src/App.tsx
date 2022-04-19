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


const App = () => {

    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <div className={'Content'}>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile/>}/>
                        <Route path='/dialogs'
                               element={<Dialogs/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
            </div>
        </div>
    );
}

export default App;
