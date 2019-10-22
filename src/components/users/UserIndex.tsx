import { User } from '../../models/User';
import React from 'react';
import UserForm from './UserForm';

interface Props {
  users: User[];
  deleteUser: (user: User) => void;
  editUser: (user: User) => void;
}

const UserIndex: React.FC<Props> = (props) => {
  const createDeleteAction = (user: User) => {
    return () => {
      props.deleteUser(user);
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Forename</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Birthday</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.forename}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.birthday}</td>
              <td>
                <UserForm user={user} saveUser={props.editUser} />
                <button onClick={createDeleteAction(user)}>Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default UserIndex;