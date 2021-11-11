import { csrfFetch } from './csrf';

const LOAD = "foods/load";
const DELETE_FOOD = "foods/deleteFood";

const load = (list) => ({
    type: LOAD,
    list,
});

const deleteFood = (id) => ({
    type: DELETE_FOOD,
    id,
});

export const getFoods = () => async (dispatch) => {
    const response = await csrfFetch("/api/foods");

    if (response.ok) {
        const foods = await response.json();
        dispatch(load(foods));
        return foods;
    }
};

// export const removeFood = (id) = async (dispatch) => {
//     const response = await csrfFetch(`/api/foods/${id}`, {
//         method: "DELETE",
//     })

//     if (response.ok) {
//         dispatch(deleteFood(id));
//     }
// }

export const anything = whatever = async dispatch => {

};


const foodsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case LOAD:
            action.list.forEach((food) => (newState[food.id] = food));
            return newState;
        case DELETE_FOOD: {
            newState = { ...state };
            delete newState[action.id];
            return newState;
        }
        default:
            return state;
    }
};

export default foodsReducer;
