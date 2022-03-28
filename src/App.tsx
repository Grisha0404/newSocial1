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
import store, {StateType} from "./state/state";

type AppType = {
    store: StateType
}

const App: React.FC<AppType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className={'Content'}>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile dispatch={store.dispatch.bind(store)} posts={state.profilePage.posts}
                                                 newPostText={state.profilePage.newPostText}/>}/>
                        <Route path='/dialogs'
                               element={<Dialogs dispatch={store.dispatch.bind(store)} dialogs={state.messagesPage.dialogs}
                                                 messages={state.messagesPage.messages}/>}/>
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
