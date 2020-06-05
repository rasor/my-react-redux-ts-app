// https://codesandbox.io/s/9on71rvnyo?file=/src/TodoApp.js
import React from 'react';
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

export default App;
