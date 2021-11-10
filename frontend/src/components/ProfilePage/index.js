import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './ProfilePage.css'
import Singlefood from '../Singlefood'
import { getFoods } from "../../store/foods";

const ProfilePage = ({ Foodloaded }) => {
    const userFoods = useSelector((state) => state.foods);


    let content;
    if (userFoods) {
        content = (
            <Singlefood userFoods={userFoods} />
        );
    } else {
        content = (
            <h1>There are no foods</h1>
        );
    }

    return (
        <>
            {Foodloaded && content}
        </>

    );
};

export default ProfilePage;
