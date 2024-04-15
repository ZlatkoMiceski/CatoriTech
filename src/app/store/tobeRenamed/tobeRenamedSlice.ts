"use client";

import { createSlice } from "@reduxjs/toolkit";

interface tobeRenamedState {
  user: string;
}

const initialState: tobeRenamedState = {
  user: "userName",
};

const tobeRenamedSlice = createSlice({
  name: "tobeRenamed",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

export const { setUser } = tobeRenamedSlice.actions

export default tobeRenamedSlice.reducer;
