// https://codesandbox.io/s/9on71rvnyo?file=/src/constants.js
interface Dictionary {
  [key: string]: string;
};

export const VISIBILITY_FILTERS: Dictionary = {
    ALL: "all",
    COMPLETED: "completed",
    INCOMPLETE: "incomplete"
};
  