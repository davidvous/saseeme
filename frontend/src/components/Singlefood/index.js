import React from "react";
import './Singlefood.css';

const Singlefood = ({
    id,
    name,
    description,
    image,
    user_id,
    restaurant_id,
    createdAt,
    updatedAt,
    userCheckins,
    userRestaurants,
}) => {

    const foodComment = Object.values(userCheckins).find(target => target.food_id === id);
    const location = Object.values(userRestaurants).find(target => target.id === restaurant_id);

    return (
        <div className="SinglefoodContainer">
            <span>{name}</span>
            <br />
            <span>{`Original post: ${foodComment.createdAt}`}</span>
            <br />
            <span>{`At: ${location.title}`}</span>
            <img alt={description} src={image} />
            <span>{foodComment.comment}</span>
            <div className='button-row'>
                <button className='delete-button'>
                    Delete
                </button>
                <button>Update</button>
            </div>
        </div >
    );
};

export default Singlefood;

