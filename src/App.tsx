import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "./Heder/Header";
import {NavBar} from "./NavLink/NavLink";
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Settings} from "./Settings/Settings";
import {Music} from "./Music/Music";
import {RootStateType} from "./state/state";

type AppType= {
    state: RootStateType
}

function App(props:AppType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className={'Content'}>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText}/>}/>
                        <Route path='/dialogs'
                               element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
