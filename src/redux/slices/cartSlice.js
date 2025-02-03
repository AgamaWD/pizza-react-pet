import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cartList',
  initialState: initialState,
  reducers: {
    setItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  }
})

export const { setItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer