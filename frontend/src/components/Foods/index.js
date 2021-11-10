import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/foods";

const Foods = () => {
    const dispatch = useDispatch();
    const foods = useSelector((state) => Object.values(state.foods));


    useEffect(() => {
        dispatch(getFoods());
    }, [dispatch]);

    // Object.values = array of objects
    return (
        <div>
            <div>
                <h1>Foods</h1>
                {foods.map(dish => {
                    return (
                        <>
                            <div>
                                <span>{dish.name}</span>
                            </div>
                            <div>
                                <img alt={`dish-${dish.id}`} key={dish.id} src={dish.imageUrl} />
                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    );
};

export default Foods;
