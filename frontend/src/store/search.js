import { csrfFetch } from "./csrf";

const ADD_SEARCH = "search/add";

const newSearch = (payload) => ({
  type: ADD_SEARCH,
  payload,
});

export const addSearch = (search) => async (dispatch) => {
  const response = await csrfFetch("/api/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(search),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(newSearch(data));
    return data;
  }
};



const searchReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case ADD_SEARCH:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
