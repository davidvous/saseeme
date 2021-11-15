import { csrfFetch } from './csrf';

const LOAD_CHECKIN = "checkins/load";
const ADD_CHECKIN = "checkins/addCheckin";
const EDIT_CHECKIN = "/checkins/editCheckin";
const DELETE_CHECKIN = "checkins/deleteCheckin";

const load = (list) => ({
    type: LOAD_CHECKIN,
    list,
});

const newCheckin = (payload) => ({
  type: ADD_CHECKIN,
  payload,
});

const editCheckin = (payload) => ({
  type: EDIT_CHECKIN,
  payload,
});

const deleteCheckin = (id) => ({
  type: DELETE_CHECKIN,
  id,
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

export const changeCheckin = (data) => async dispatch => {

  const response = await csrfFetch(`/api/checkins/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const checkin = await response.json();
    dispatch(editCheckin(data));
    return checkin;
  } 
};

export const removeCheckin = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/checkins/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteCheckin(id));
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
      case EDIT_CHECKIN:
        newState = { ...state };
        console.log(newState, "I AM IN THE EDIT CHECKIN")
        newState[action.payload.id] = action.payload;
        return newState;
      case DELETE_CHECKIN:
        newState = { ...state };
        delete newState[action.id];
        return newState;
      default:
        return state;
    }
};

export default checkinsReducer;
