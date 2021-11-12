import { csrfFetch } from './csrf';

const LOAD_RES = "restaurants/load";
const DELETE_RES = "restaurants/deleteRes";
const ADD_RES = "/restaurants/addRes";
const EDIT_RES = "/restaurants/editRes";

const load = (list) => ({
    type: LOAD_RES,
    list,
});

const newRes = (payload) => ({
  type: ADD_RES,
  payload,
});

export const getRestaurants = () => async (dispatch) => {
    const response = await csrfFetch("/api/restaurants");

    if (response.ok) {
        const restaurants = await response.json();
        dispatch(load(restaurants));
        return restaurants;
    }
}

export const addRes = (resta) => async (dispatch) => {
  const response = await csrfFetch("/api/restaurants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(resta),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(newRes(data));
    // dispatch(getRestaurants());
    return data;
  }
};



const restaurantsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
      case LOAD_RES:
        action.list.forEach(
          (restaurants) => (newState[restaurants.id] = restaurants)
        );
        return newState;
      case ADD_RES:
        newState = { ...state };
        newState[action.payload.id] = action.payload;
        return newState;
      default:
        return state;
    }
};

export default restaurantsReducer;
