import { csrfFetch } from './csrf';

const LOAD = "checkins/load";

const load = (list) => ({
    type: LOAD,
    list,
});

export const getCheckins = () => async (dispatch) => {
    const response = await csrfFetch("/api/checkins");

    if (response.ok) {
        const checkins = await response.json();
        dispatch(load(checkins));
        return checkins;
    }
}

const checkinsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case LOAD:
            action.list.forEach((checkins) => (newState[checkins.id] = checkins));
            return newState;
        default:
            return state;
    }
};

export default checkinsReducer;
