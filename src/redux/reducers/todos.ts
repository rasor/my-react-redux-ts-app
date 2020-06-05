// https://codesandbox.io/s/9on71rvnyo?file=/src/redux/reducers/todos.js
import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState: any = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action: { type: any; payload: { id: string; content?: any; }; }) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
