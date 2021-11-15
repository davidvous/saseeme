import React, { useEffect } from "react";
import './Singlefood.css';
import { useSelector, useDispatch } from "react-redux";
import { removeFood } from '../../store/foods';
import EditFoodModal from '../EditFood';
import CreateCheckinSingModal from '../CreateCheckinSing';
import EditCheckinModal from "../EditCheckinModal";
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

  const stateCheckins = useSelector((state) => Object.values(state.checkins));
  const singleCheck = stateCheckins.find(each => each.food_id == food_id)

  const foodComment = stateCheckins.find(each => each.food_id == food_id)

    let singleCheckRender;
    let eachCheckinEntry;

 

    if (!singleCheck) {
      singleCheckRender = <CreateCheckinSingModal food_id={food_id} />;
    }
    else {
      singleCheckRender = null;
      eachCheckinEntry = stateCheckins.filter(each => each.food_id == food_id).slice(0).reverse().map(
        ({comment, updatedAt, id: checkinId, food_id}) => {
          return (
            <div className="checkinComment">
              <span className="checkinCommentFirst">{comment}</span> <span>at {`${new Date(
                updatedAt
              ).toLocaleString()}`}</span>
              <EditCheckinModal
                comment={comment}
                checkinId={checkinId}
                food_id={food_id}
              />
            </div>
          );
        }) 
    }
    const dispatch = useDispatch();

     useEffect((id) => {
       dispatch(removeFood(id));
     }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(removeFood(id));
    };


    // const foodComment = Object.values(userCheckins).find(target => target.food_id === food_id);
    const location = Object.values(userRestaurants).find(target => target.id === restaurant_id);

    return (
      <div className="SinglefoodContainer">
        <span id="foodName">{name}</span>
        <br />
        <span>
          {foodComment
            ? `Original Post: ${new Date(
                foodComment.createdAt).toLocaleString()}`
            : null}
        </span>
        <br />
        <span>At: {location ? (<span id="restaurantName">{location.title}</span>) : null}</span>
        <div className="SingleFoodImage">
          <img alt={description} src={imageUrl} />
        </div>
        {eachCheckinEntry}
        <div className="buttonRow">
          {singleCheckRender}
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

