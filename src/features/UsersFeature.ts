import { User } from '../models/User';
import { ActionType, createAction } from 'typesafe-actions';

export const indexUsers = createAction('users/INDEX')<User[]>();
export const createUser = createAction('users/CREATE')<User>();
export const updateUser = createAction('users/UPDATE')<User>();
export const deleteUser = createAction('users/DELETE')<User>();

type UserAction = ActionType<typeof indexUsers | typeof createUser | typeof updateUser | typeof deleteUser>;

export const usersReducer = (state: User[] = [], action: UserAction) => {
  switch (action.type) {
    case 'users/INDEX':
      return action.payload;
    case 'users/CREATE':
      return [...state, {...action.payload, id: new Date().getTime()}];
    case 'users/UPDATE':
      return state.map(u => u.id === action.payload.id ? action.payload : u);
    case "users/DELETE":
      return state.filter(u => u.id !== action.payload.id);
    default:
      return state;
  }
}