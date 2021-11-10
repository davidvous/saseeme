import { csrfFetch } from './csrf';

const LOAD = "foods/load";

const load = (list) => ({
    type: LOAD,
    list,
});

export const getFoods = () => async (dispatch) => {
    const response = await csrfFetch("/api/foods");

    if (response.ok) {
        const foods = await response.json();
        dispatch(load(foods));
        return foods;
    }
}

const foodsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case LOAD:
            action.list.forEach((food) => (newState[food.id] = food));
            return newState;
        default:
            return state;
    }
};

export default foodsReducer;
