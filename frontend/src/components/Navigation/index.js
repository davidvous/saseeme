import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <div className="SignUpLinkContainer">
                <LoginFormModal />
                <div className="SignUpLinkLink">
                    <NavLink className="SignUpLink" to="/signup">SIGN UP</NavLink>
                </div>
            </div>
        );
    }

    return (
        <div className="NavigationBar">
            <div className="HomeLinkContainer">
                <NavLink className="HomeLink" exact to="/">HOME</NavLink>
            </div>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;
