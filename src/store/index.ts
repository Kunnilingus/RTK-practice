import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  todo: todoSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
