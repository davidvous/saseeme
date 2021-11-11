import React from "react";

const Singlefood = ({
    key,
    id,
    name,
    description,
    image,
    user_id,
    restaurant_id,
    createdAt,
    updatedAt,
}) => {

    return (
        <div className="SinglefoodContainer">
            <div>
                <img src={image} />
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

