import React from 'react';
import Users from './Users';
import { Route, Switch } from 'react-router';

const App: React.FC = () => {

  return (
    <div className="App">
      <Switch>
        <Route path='/users' component={Users} />
      </Switch>
    </div>
  );
}

export default App;
