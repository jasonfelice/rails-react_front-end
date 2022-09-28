import { configureStore } from '@reduxjs/toolkit';
import updateMessage from './message';

export default configureStore({
  reducer: {
    updateMessage,
  },
});
