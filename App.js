import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import Login from "./navigation/Login";
import {useState} from "react";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    }

    const handleLogout = () => {
        setLoggedIn(false);
    }
    return (
        <>
            {!loggedIn ? <Login onLogin={handleLogin}/> : <MainContainer handleLogout={handleLogout}/>}
        </>
    );
}

export default App;


