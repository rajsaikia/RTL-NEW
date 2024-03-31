import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './usersSlice';

const rootReducer = combineReducers({
  data: dataReducer
});

export default rootReducer;

