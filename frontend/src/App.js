import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import aboutme from "./data/aboutme"
import Navigation from "./components/Navigation";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer"


function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <div className="appContainer">
                <Navigation isLoaded={isLoaded} />
                <Maincontent isLoaded={isLoaded} />
            </div>
            <Footer links={aboutme} />
        </>
    );
}

export default App;
