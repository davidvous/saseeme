import React from "react";
import './Singlefood.css';
import { useDispatch } from 'react-redux';
import { removeFood } from '../../store/foods';
import EditFoodModal from '../EditFood';
import "../LoginFormModal/LoginFormPage.css";

const Singlefood = ({
    id: food_id,
    name,
    description,
    image: imageUrl,
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
        <div className="SingleFoodImage">
        <img alt={description} src={imageUrl} />
        </div>
        <span>{foodComment ? foodComment.comment : null}</span>
        <div className="buttonRow">
                <button
                onClick={() => handleDelete(`${food_id}`)}
                className="loginButton"
                >
                DELETE
                </button>
                <EditFoodModal
                key={food_id}
                food_id={food_id}
                name={name}
                description={description}
                image={imageUrl}
                restaurant_id={restaurant_id}
                />
        </div>
      </div>
    );
};

export default Singlefood;

