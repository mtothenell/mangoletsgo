import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import Login from "./navigation/Login";
import {useEffect, useState} from "react";
import {Dimensions,Text} from "react-native";

function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    }

    return (
        <>
            {!loggedIn ? <Login onLogin={handleLogin}/> : <MainContainer/>}
        </>
    );
}

export default App;


