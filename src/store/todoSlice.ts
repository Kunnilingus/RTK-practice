import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit/react";
import { ITodo } from "../models/ITodo";

interface InitialStateProps {
  todos: ITodo[];
  status: string;
  error: null;
}
const initialState: InitialStateProps = {
  todos: [],
  status: "",
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: Number(new Date()),
        text: action.payload,
        completed: false,
      });
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompleted(state, action: PayloadAction<number>) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      toggledTodo!.completed = !toggledTodo?.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer as Reducer<typeof initialState>;
