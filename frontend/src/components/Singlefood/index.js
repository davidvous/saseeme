import React from "react";
import './Singlefood.css';
import { useDispatch } from 'react-redux';
// import { deleteFood } from "../../store/foods";

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

    const dispatch = useDispatch();

    // const handleDelete = (id) => {
    //     dispatch(deleteFoods(id));
    // };

    // <button onClick={() => handleDelete(`${id}`)} className='delete-button'>
    // </button>

    const foodComment = Object.values(userCheckins).find(target => target.food_id === id);
    const location = Object.values(userRestaurants).find(target => target.id === restaurant_id);

    return (
        <div className="SinglefoodContainer">
            <span>{name}</span>
            <br />
            <span>{foodComment ? `Original Post: ${foodComment.createdAt}` : null}</span>
            <br />
            <span>{location ? `At: ${location.title}` : null}</span>
            <img alt={description} src={image} />
            <span>{foodComment ? foodComment.comment : null}</span>
            <div className='button-row'>
                Delete
                <button>Update</button>
            </div>
        </div >
    );
};

export default Singlefood;

