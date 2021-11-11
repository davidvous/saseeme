import React from 'react';
import { useSelector} from 'react-redux';
import './Maincontent.css';
import Guestcontent from '../Guestcontent';
import ProfilePage from '../ProfilePage';

function Maincontent({ isLoaded }) {

    const sessionUser = useSelector(state => state.session.user);
    
    let content;
    if (sessionUser) {
        content = (
            <ProfilePage/>
        )
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
