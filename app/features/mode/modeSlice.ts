"use client";

import { createSlice } from "@reduxjs/toolkit";

// Define a type for allowed colors
export type ModeType = "light" | "dark" | "inherit";

// Define initial state with the correct type
const initialState: { currentMode: ModeType } = {
  currentMode: "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.currentMode = action.payload;
    },
  },
});

export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
