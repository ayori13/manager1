import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodos = [...state, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    },
    removeTodo: (state, action) => {
      const updatedTodos = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    },
    toggleTodo: (state, action) => {
      const updatedTodos = state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
