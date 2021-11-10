import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/foods";

const Singlefood = () => {
    // const dispatch = useDispatch();
    const foods = useSelector((state) => Object.values(state.foods));
    const oneFood = foods.find(food => food.id == 2);
    const { name, imageUrl, description } = oneFood;


    //use effect is triggerd on each render and re-render
    // useEffect(() => {
    //     dispatch(getFoods());
    // }, [dispatch]);

    return (
        <div className="SinglefoodContainer">
            <div>
                <h1>{name}</h1>
                <img src={imageUrl}></img>
                <span>{description}</span>

            </div>
        </div >
    );
};

export default Singlefood;

