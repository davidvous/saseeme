import { csrfFetch } from './csrf';

const LOAD_CHECKIN = "checkins/load";
const ADD_CHECKIN = "checkins/addCheckin";

const load = (list) => ({
    type: LOAD_CHECKIN,
    list,
});

const newCheckin = (payload) => ({
  type: ADD_CHECKIN,
  payload,
});



export const getCheckins = () => async (dispatch) => {
    const response = await csrfFetch("/api/checkins");

    if (response.ok) {
        const checkins = await response.json();
        dispatch(load(checkins));
        return checkins;
    }
}

export const addCheckin = (check) => async (dispatch) => {
  const response = await csrfFetch("/api/checkins", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(check),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(newCheckin(data));
    dispatch(getCheckins());
    return data;
  }
};

const checkinsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
      case LOAD_CHECKIN:
        action.list.forEach((checkins) => (newState[checkins.id] = checkins));
        return newState;
      case ADD_CHECKIN:
        newState = { ...state };
        newState[action.payload.id] = action.payload;
        return newState;
      default:
        return state;
    }
};

export default checkinsReducer;
