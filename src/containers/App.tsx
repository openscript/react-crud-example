import React, { useState } from 'react';
import './App.css';
import { User } from '../models/User';
import UserIndex from '../components/users/UserIndex';

const App: React.FC = () => {
  const [users, setUsers] = useState([
    { id: 0, forename: 'Max', surname: 'Muster', email: 'max.muster@example.com' },
    { id: 1, forename: 'Robin', surname: 'Bühler', email: 'robin.buehler@example.com', birthday: new Date('11/05/1992') },
    { id: 2, forename: 'Dwayne', surname: 'Johnson', email: 'dwayne@example.com', birthday: new Date('02/05/1972') }
  ]);

  const deleteUser = (user: User) => {
    setUsers(users.filter(u => u.id !== user.id));
  }

  return (
    <div className="App">
      <UserIndex users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
