import React from 'react';
import './App.css';
import Splash from './Components/Home/Splash';
import Profile from './Components/ProfileViews/Profile';
import { Route, Switch, withRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
