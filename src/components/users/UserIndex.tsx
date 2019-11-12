import { User } from '../../models/User';
import React from 'react';
import UserForm from './UserForm';
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Forename</TableCell>
          <TableCell>Surname</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>BirTableCellday</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.map(user => {
          return (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.forename}</TableCell>
              <TableCell>{user.surname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.birthday}</TableCell>
              <TableCell>
                <UserForm user={user} saveUser={props.editUser} />
                <Button onClick={createDeleteAction(user)}>Delete</Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default UserIndex;