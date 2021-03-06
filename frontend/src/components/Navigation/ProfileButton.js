import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import "../LoginFormModal/LoginFormPage.css";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>  <div className="HomeLinkContainer">
            <button className="loginButton" onClick={openMenu}>
                <i className="fas fa-drumstick-bite"></i>
            </button>
            </div>
            {showMenu && (
                <div className="profile_container">
                    <ul className="profile-dropdown">
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <button className="logoutButton" onClick={logout}>Log Out</button>
                    </ul>
                </div>
            )}
        </>
    );
}

export default ProfileButton;
