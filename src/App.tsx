import React from 'react';
import './App.css';
import {RoutesPage} from "./Routes/RoutesPage";
import {Header} from "./Heder/Header";
import {NavBar} from "./NavLink/NavLink";



const App = () => {

    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <RoutesPage/>
        </div>
    );
}

export default App;
