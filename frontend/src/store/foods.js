import { csrfFetch } from './csrf';
import closeModal from '../components/createFoodModal/index';

const LOAD = "foods/load";
const DELETE_FOOD = "foods/deleteFood";
const ADD_FOOD = "/foods/addFood";

const load = (list) => ({
    type: LOAD,
    list,
});

const deleteFood = (id) => ({
    type: DELETE_FOOD,
    id,
});

const newFood = (payload) => ({
    type: ADD_FOOD,
    payload,
});

export const getFoods = () => async (dispatch) => {
    const response = await csrfFetch("/api/foods");

    if (response.ok) {
        const foods = await response.json();
        dispatch(load(foods));
        return foods;
    }
};

export const removeFood = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/foods/${id}`, {
        method: "DELETE",
    })

    if (response.ok) {
        dispatch(deleteFood(id));
    }
}

export const addFood = (dish) => async (dispatch) => {
  const response = await csrfFetch("/api/foods", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dish),
  });

  console.log(response, "<----RESPONSE")

  if (response.ok) {
    const data = await response.json();
    dispatch(newFood(data));
    dispatch(getFoods());
    return data;
  }
};

const foodsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case LOAD:
            action.list.forEach((food) => (newState[food.id] = food));
            return newState;
        case DELETE_FOOD:
            newState = { ...state };
            delete newState[action.id];
            return newState;
        case ADD_FOOD:
            newState = { ...state };
            newState[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
};

export default foodsReducer;
