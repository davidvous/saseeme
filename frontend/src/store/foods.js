import { csrfFetch } from './csrf';

const LOAD = "foods/load";
const DELETE_FOOD = "foods/deleteFood";
const ADD_FOOD = "/foods/addFood";
const EDIT_FOOD = "/foods/editFood";

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

const editFood = (payload) => ({
    type: EDIT_FOOD,
    payload,
})

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

  if (response.ok) {
    const data = await response.json();
    dispatch(newFood(data));
    dispatch(getFoods());
    return data;
  }
};

export const changeFood = (data) => async dispatch => {
    const response = await csrfFetch(`/api/foods/${data.food_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const food = await response.json();
        dispatch(editFood(data));
        dispatch(getFoods());
        return food;
    }
}

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
        case EDIT_FOOD:
            newState = { ...state };
            newState[action.payload.food_id] = action.payload;
            return newState;
        default:
            return state;
    }
};

export default foodsReducer;
