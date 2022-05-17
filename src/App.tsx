import React from 'react';
import './App.css';
import {RoutesPage} from "./Routes/RoutesPage";
import {Header} from "./Heder/Header";
import {NavBar} from "./NavLink/NavLink";
import {ErrorSnackbar} from "./Common/ErrorSnackbar";


const App = () => {

    return (
        <div className="App">
            <Header/>
            <NavBar/>
            <RoutesPage/>
            <ErrorSnackbar/>

        </div>
    );
}

export default App;
