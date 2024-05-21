import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import RoleReducer from './RoleSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    role: RoleReducer
  },
})