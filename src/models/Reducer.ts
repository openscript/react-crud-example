import { usersReducer } from '../features/UsersFeature';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  users: usersReducer
})