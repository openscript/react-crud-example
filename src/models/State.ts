import { User } from './User';
import { Session, initialSession } from './Session';
import { RouterState } from 'connected-react-router';

export interface State {
  users: User[]
  router: RouterState
  session: Session
}

export const initialState: Partial<State> = {

}