import { csrfFetch } from './csrf';

const LOAD = "restaurants/load";

const load = (list) => ({
    type: LOAD,
    list,
});

export const getRestaurants = () => async (dispatch) => {
    const response = await csrfFetch("/api/restaurants");

    if (response.ok) {
        const restaurants = await response.json();
        dispatch(load(restaurants));
        return restaurants;
    }
}

const restaurantsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case LOAD:
            action.list.forEach((restaurants) => (newState[restaurants.id] = restaurants));
            return newState;
        default:
            return state;
    }
};

export default restaurantsReducer;
