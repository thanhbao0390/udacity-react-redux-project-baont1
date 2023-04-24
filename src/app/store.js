import { configureStore } from '@reduxjs/toolkit';
import rootSlice from './store/rootSlice';
import { middleware } from './middleware/auth';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    root: rootSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});
