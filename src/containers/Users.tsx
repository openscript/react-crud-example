import React from 'react';
import './App.css';
import { User } from '../models/User';
import UserIndex from '../components/users/UserIndex';
import UserForm from '../components/users/UserForm';
import { useUserContext } from '../contexts/UserContext';

const Users: React.FC = () => {
  const [users, userContextDispatch] = useUserContext();

  const deleteUser = (user: User) => {
    userContextDispatch({type: 'delete', user});
  }

  const createUser = (user: User) => {
    userContextDispatch({type: 'create', user});
  }

  const updateUser = (user: User) => {
    userContextDispatch({type: 'update', user});
  }

  return (
    <>
      <UserForm saveUser={createUser} />
      <UserIndex users={users} deleteUser={deleteUser} editUser={updateUser} />
    </>
  );
}

export default Users;