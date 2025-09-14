import { createSlice } from "@reduxjs/toolkit";
export const todo = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {},
  },
});

export const { setTodo, addTodo } = todo.actions;
export default todo.reducer;
