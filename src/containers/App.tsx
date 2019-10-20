import React, { useState } from 'react';
import './App.css';
import { User } from '../models/User';
import UserIndex from '../components/users/UserIndex';
import UserForm from '../components/users/UserForm';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 0, forename: 'Max', surname: 'Muster', email: 'max.muster@example.com' },
    { id: 1, forename: 'Robin', surname: 'Bühler', email: 'robin.buehler@example.com', birthday: new Date('11/05/1992') },
    { id: 2, forename: 'Dwayne', surname: 'Johnson', email: 'dwayne@example.com', birthday: new Date('02/05/1972') }
  ]);

  const deleteUser = (user: User) => {
    setUsers(users.filter(u => u.id !== user.id));
  }

  const createUser = (user: User) => {
    setUsers([...users, {...user, id: new Date().getTime()}]);
  }

  const updateUser = (user: User) => {
    setUsers(users.map(u => u.id === user.id ? user : u));
  }

  return (
    <div className="App">
      <UserForm saveUser={createUser} />
      <UserIndex users={users} deleteUser={deleteUser} editUser={updateUser} />
    </div>
  );
}

export default App;
