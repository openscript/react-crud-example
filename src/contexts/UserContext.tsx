import React, { createContext, useReducer, Dispatch, useContext } from "react";
import { User } from "../models/User";

const USER_STORAGE_KEY = 'crud:users'

type UserActions =
  | { type: "create"; user: User }
  | { type: "update"; user: User }
  | { type: "delete"; user: User };

const userReducer = (state: User[], action: UserActions) => {
  switch (action.type) {
    case "create":
      return [...state, {...action.user, id: new Date().getTime()}];
    case "update":
      return state.map(u => u.id === action.user.id ? action.user : u);
    case "delete":
      return state.filter(u => u.id !== action.user.id);
    default:
      throw new Error();
  }
};

const UserContext = createContext<[User[], Dispatch<UserActions>]>([[], () => {}]);

export const useUserContext = () => useContext(UserContext);

interface UserProviderProps {
  initialUsers: User[];
}

export const UserProvider: React.FC<UserProviderProps> = props => {
  const localStorageValue = localStorage.getItem(USER_STORAGE_KEY);

  const initialValue = localStorageValue ? JSON.parse(localStorageValue) as User[] : props.initialUsers;

  const localStorageMiddleware = (state: User[], action: UserActions) => {
    const newState = userReducer(state, action);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newState));
    return newState;
  }

  return (
    <UserContext.Provider value={useReducer(localStorageMiddleware, initialValue)}>
      {props.children}
    </UserContext.Provider>
  );
};
