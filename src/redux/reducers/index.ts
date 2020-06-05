// https://codesandbox.io/s/9on71rvnyo?file=/src/redux/reducers/index.js
// https://redux.js.org/recipes/usage-with-typescript
import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter });
