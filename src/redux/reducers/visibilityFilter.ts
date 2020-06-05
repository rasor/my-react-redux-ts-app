// https://codesandbox.io/s/9on71rvnyo?file=/src/redux/reducers/visibilityFilter.js
import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action: { type: any; payload: any[]; }) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
