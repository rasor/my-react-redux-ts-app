// https://codesandbox.io/s/9on71rvnyo?file=/src/redux/actions.js
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content: any) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = (id: any) => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = (filter: any) => ({ type: SET_FILTER, payload: { filter } });