'use client'
import { configureStore } from '@reduxjs/toolkit';
import tobeRenamedReducer from './tobeRenamed/tobeRenamedSlice';

export const store = configureStore({
  reducer: {
    tobeRenamed: tobeRenamedReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;