import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/foods";
import './ProfilePage.css'
import Checkins from '../Checkins'
import Singlefood from '../Singlefood'

const ProfilePage = () => {
    const dispatch = useDispatch();
    const foods = useSelector((state) => Object.values(state.foods));


    useEffect(() => {
        dispatch(getFoods());
    }, [dispatch]);

    return (
        <div className="ProfileContainer">
            <Singlefood />
        </div>
    );
};

export default ProfilePage;
