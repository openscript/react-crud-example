import React from 'react';
import { User } from '../models/User';
import UserIndex from '../components/users/UserIndex';
import UserForm from '../components/users/UserForm';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../models/State';
import { createUser, deleteUser, updateUser } from '../features/UsersFeature';
import { bindActionCreators } from 'redux';

const Users: React.FC = () => {
  const users = useSelector<State, User[]>(state => state.users);
  const dispatch = useDispatch();
  const actions = bindActionCreators({createUser, deleteUser, updateUser}, dispatch);

  return (
    <>
      <UserForm saveUser={actions.createUser} />
      <UserIndex users={users} deleteUser={actions.deleteUser} editUser={actions.updateUser} />
    </>
  );
}

export default Users;