import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import * as sessionActions from "../../store/session";
import Searchbar from "../Searchbar";
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
          <div className="SignUpLinkContainer">
            <LoginFormModal />
            <div className="demoButtonContainer">
            <Link to="/" 
            className="DemoLink"
            onClick={() => dispatch(sessionActions.login({
                credential: "gmaildemo",
                password: "password"
            }))}>DEMO</Link>
            </div>
            <div className="SignUpLinkLink">
              <SignupFormModal />
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
