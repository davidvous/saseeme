import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/foods";

const Singlefood = () => {
    const dispatch = useDispatch();
    const foods = useSelector((state) => Object.values(state.foods));
    const oneFood = foods.find(food => food.id == 2);
    const { name, imageUrl, description } = oneFood;

    useEffect(() => {
        dispatch(getFoods());
    }, [dispatch]);

    return (
        <div className="SinglefoodContainer">
            <div>
                <img src={imageUrl} />
            </div>
            <div>
                <span>{name}</span>
            </div>
            <div>
                <span>{description}</span>
            </div>
        </div >
    );
};

export default Singlefood;

