import { usersReducer } from '../features/UsersFeature';
import { sessionReducer } from '../features/SessionFeature';

export const reducer = {
  users: usersReducer,
  session: sessionReducer
}