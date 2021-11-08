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
                <NavLink className="HomeLink" exact to="/">
                    <img src="https://cdn.discordapp.com/attachments/907133739128217621/907305017021714472/logo_invert.png" />
                </NavLink>
            </div>
            {isLoaded && sessionLinks}
        </div>
    );
}

export default Navigation;
