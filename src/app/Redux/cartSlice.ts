// "use client"
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image: string;
// }

// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<CartItem>) => {
//       const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
//       if (itemIndex >= 0) {
//         state.items[itemIndex].quantity += 1;
//       } else {
//         state.items.push(action.payload);
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//     updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
//       const item = state.items.find(item => item.id === action.payload.id);
//       if (item) {
//         item.quantity = action.payload.quantity;
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;

// export default cartSlice.reducer;













"use client"



import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}


interface CartState {
  items: CartItem[];
}


const initialState: CartState = {
  items: [],
};


const persistConfig = {
  key: 'cart',  
  storage,      
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;


const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);

export default persistedCartReducer;






