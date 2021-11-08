import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Maincontent.css';

function Maincontent({ isLoaded }) {

    const sessionUser = useSelector(state => state.session.user);
    let content;
    if (sessionUser) {
        content = (
            <p>User is currently logged in!</p>
        );
    } else {
        content = (
            <p>User is not logged in!</p>
        );
    }
    return (
        <>
            {isLoaded && content}
        </>
    );
}

export default Maincontent;
