import React from "react";

const Singlefood = ({ userFoods }) => {
    const oneFood = Object.values(userFoods).find(food => food.id == 2);
    const { imageUrl, name, description } = oneFood;

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

