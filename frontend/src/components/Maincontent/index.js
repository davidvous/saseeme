import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Maincontent.css';
import Guestcontent from '../Guestcontent'

function Maincontent({ isLoaded }) {

    const sessionUser = useSelector(state => state.session.user);
    let content;
    if (sessionUser) {
        content = (
            <p>User is currently logged in!</p>
        );
    } else {
        content = (
            <Guestcontent />
        );
    }
    return (
        <div className="GcContainer">
            {isLoaded && content}
        </div>
    );
}

export default Maincontent;
