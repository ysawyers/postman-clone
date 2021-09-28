import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import Homepage from './views/Homepage';
import Postman from './views/Postman';
import './styles/App.css';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/workspace'>
            <Postman />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
