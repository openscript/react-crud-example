import { User } from './User';

export interface State {
  users: User[]
}

export const initialState: State = {
  users: []
}