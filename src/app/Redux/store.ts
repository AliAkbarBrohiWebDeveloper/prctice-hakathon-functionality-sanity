"use client"
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Adjust the path if necessary

// Configure the Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Add other reducers here if needed
  },
});

// Type for RootState and AppDispatch (optional, but helpful for typing)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
