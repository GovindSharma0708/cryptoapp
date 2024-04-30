import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // replace './reducers' with the path to your root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;