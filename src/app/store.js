import { configureStore } from '@reduxjs/toolkit';
import submissionReducer from '../features/submission/submissionSlice';

export const store = configureStore({
  reducer: {
    submission: submissionReducer
  },
});
