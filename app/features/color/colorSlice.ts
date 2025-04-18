"use client";

import { createSlice } from "@reduxjs/toolkit";

// Define a type for allowed colors
export type ColorType =
  | "green"
  | "blue"
  | "purple"
  | "gray"
  | "bronze"
  | "orange"
  | "iris"
  | "red"
  | "yellow"
  | "violet"
  | "gold"
  | "teal"
  | "brown"
  | "amber"
  | "tomato"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "indigo"
  | "cyan"
  | "jade"
  | "grass"
  | "lime"
  | "mint"
  | "sky";

// Define initial state with the correct type
const initialState: { currentColor: ColorType } = {
  currentColor: "green",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.currentColor = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;
export default colorSlice.reducer;
