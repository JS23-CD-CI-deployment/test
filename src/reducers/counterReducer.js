import { createSlice } from "@reduxjs/toolkit";

// Här bestämmer vi allt som vi vill spara i vårt state, kan vara ett objekt med flera olika egenskaper
const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.value += action.payload; // Uppdaterar vårt state
    },
    decrement(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // Skapa actions för vår reducer

export default counterSlice.reducer;
