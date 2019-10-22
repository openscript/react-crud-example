import React from 'react';
import './App.css';
import { UserProvider } from '../contexts/UserContext';
import Users from './Users';

const App: React.FC = () => {
  const initialUsers = [
    { id: 0, forename: 'Max', surname: 'Muster', email: 'max.muster@example.com' },
    { id: 1, forename: 'Robin', surname: 'Bühler', email: 'robin.buehler@example.com', birthday: new Date('11/05/1992').toISOString() },
    { id: 2, forename: 'Dwayne', surname: 'Johnson', email: 'dwayne@example.com', birthday: new Date('02/05/1972').toISOString() }
  ];

  return (
    <div className="App">
      <UserProvider initialUsers={initialUsers}>
        <Users />
      </UserProvider>
    </div>
  );
}

export default App;
