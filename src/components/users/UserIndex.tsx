import { User } from '../../models/User';
import React from 'react';

interface Props {
  users: User[];
  deleteUser: (user: User) => void; 
}

const UserIndex: React.FC<Props> = (props) => {
  const createDeleteAction = (user: User) => {
    return () => {
      props.deleteUser(user);
    }
  } 

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Forename</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Birthday</th>
        <th>Actions</th>
      </tr>
      {props.users.map(user => {
        return (
          <tr>
            <td>{user.id}</td>
            <td>{user.forename}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>{user.birthday ? user.birthday.toISOString() : null}</td>
            <td>
              <button onClick={createDeleteAction(user)}>Delete</button>
            </td>
          </tr>
        )
      })}
    </table>
  )
}

export default UserIndex;