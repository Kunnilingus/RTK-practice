import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import { goodsApi } from "./goodsApi";

const rootReducer = combineReducers({
  todo: todoSlice,
  [goodsApi.reducerPath]: goodsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware),
});

export type AppStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
