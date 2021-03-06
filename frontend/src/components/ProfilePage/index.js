import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './ProfilePage.css'
import Singlefood from '../Singlefood'
import { getFoods } from "../../store/foods";
import { getCheckins, changeCheckin, removeCheckin } from "../../store/checkins";
import { getRestaurants } from "../../store/restaurants";
import CreateFoodModal from '../../components/createFoodModal';
import Searchbar from "../Searchbar";



const ProfilePage = () => {
    const dispatch = useDispatch();
    const userFoods = useSelector((state) => Object.values(state.foods));
    const userCheckins = useSelector((state) => state.checkins);
    const userRestaurants = useSelector((state) => state.restaurants);
    const sessionUser = useSelector(state => state.session.user);

    useEffect((id) => {
        dispatch(getFoods());
        dispatch(getCheckins());
        dispatch(getRestaurants());
    }, [dispatch]);

    if (!userFoods || !userCheckins || !userRestaurants) return null;

    let content;
    let userFoodArray = [];
    userFoods.forEach(({ id, user_id, restaurant_id, name, imageUrl, description, createdAt, updatedAt }) => (
        sessionUser.id === user_id ?
            userFoodArray.push(<Singlefood
                key={id}
                id={id}
                name={name}
                description={description}
                image={imageUrl}
                user_id={user_id}
                restaurant_id={restaurant_id}
                createdAt={createdAt}
                updatedAt={updatedAt}
                userCheckins={userCheckins}
                userRestaurants={userRestaurants}
            />) : null));

    if (userFoodArray.length > 0) {
        content = (
          <>
            <div className="topProfileRow">
            <Searchbar />
              <CreateFoodModal />
            </div>
            <div className="foodSelector">
              {userFoodArray.map((item) => item)}
            </div>
          </>
        );
    } else {
        content = (
            <> 
                <Searchbar/>
                <CreateFoodModal />
                <h1>Submit your first dish!</h1>)
            </>
        )
    }

    return (
        <>
            {content}
        </>

    );
};

export default ProfilePage;
