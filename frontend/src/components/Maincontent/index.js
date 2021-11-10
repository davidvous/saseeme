import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Maincontent.css';
import Guestcontent from '../Guestcontent';
import ProfilePage from '../ProfilePage';
import { getFoods } from "../../store/foods";

function Maincontent({ isLoaded }) {

    const dispatch = useDispatch();
    const [Foodloaded, setFoodloaded] = useState(false);

    useEffect(() => {
        dispatch(getFoods()).then(() => setFoodloaded(true));
    }, [dispatch]);

    const sessionUser = useSelector(state => state.session.user);
    let content;

    if (sessionUser) {
        content = (
            <ProfilePage Foodloaded={Foodloaded} />
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
