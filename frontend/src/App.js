import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
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
            <div className="pageContainer">
                <div className="contentWrapper">
                    <div className="appContainer">
                        <Navigation isLoaded={isLoaded} />
                        {isLoaded && (
                            <Switch>
                                <Route path="/signup">
                                    <SignupFormPage />
                                </Route>
                            </Switch>
                        )}
                        <Maincontent isLoaded={isLoaded} />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
