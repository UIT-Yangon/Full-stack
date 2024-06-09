import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import RoleReducer from './RoleSlice';
import apiDataReducer from './apiDataSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    role: RoleReducer,
    data: apiDataReducer,
  },
})