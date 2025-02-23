

"use client"
import { configureStore } from '@reduxjs/toolkit';
import persistedCartReducer from './cartSlice';
import { persistStore } from 'redux-persist';


export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    }),
});

// Create persistor to manage persistence
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
