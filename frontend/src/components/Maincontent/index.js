import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Maincontent.css';
import Guestcontent from '../Guestcontent';
import ProfilePage from '../ProfilePage';
import { getFoods } from "../../store/foods";
import { getCheckins } from "../../store/checkins";
import { getRestaurants } from "../../store/restaurants";

function Maincontent({ isLoaded }) {

    const dispatch = useDispatch();
    const [AllLoaded, setAllLoaded] = useState(false);

    useEffect(() => {
        dispatch(getFoods());
        dispatch(getCheckins());
        dispatch(getRestaurants()).then(() => setAllLoaded(true));
    }, [dispatch]);

    const sessionUser = useSelector(state => state.session.user);
    let content;

    if (sessionUser) {
        content = (
            <ProfilePage AllLoaded={AllLoaded} />
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
