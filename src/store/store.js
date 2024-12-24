import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';
import filterReducer from '../slices/filterSlice';

export const store = configureStore({
  reducer: {
    add: todoReducer,
    filters: filterReducer,
  },
});