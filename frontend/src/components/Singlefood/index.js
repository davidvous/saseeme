import React from "react";
import './Singlefood.css';
import { useDispatch } from 'react-redux';
import { removeFood } from '../../store/foods'

const Singlefood = ({
    id: food_id,
    name,
    description,
    image,
    restaurant_id,
    userCheckins,
    userRestaurants,
}) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeFood(id));
    };


    const foodComment = Object.values(userCheckins).find(target => target.food_id === food_id);
    const location = Object.values(userRestaurants).find(target => target.id === restaurant_id);

    return (
      <div className="SinglefoodContainer">
        <span>{name}</span>
        <br />
        <span>
          {foodComment ? `Original Post: ${foodComment.createdAt}` : null}
        </span>
        <br />
        <span>{location ? `At: ${location.title}` : null}</span>
        <img alt={description} src={image} />
        <span>{foodComment ? foodComment.comment : null}</span>
        <div className="button-row">
          <button
            onClick={() => handleDelete(`${food_id}`)}
            className="delete-button"
            >
            Delete
          </button>
          <button>Update</button>
        </div>
      </div>
    );
};

export default Singlefood;

