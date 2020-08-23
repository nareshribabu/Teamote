import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Rooms from './rooms';
// import Signup from '../pages/Signup';

const Main = () => {
  return (
    <Switch> {
    /* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/rooms' component={Rooms}></Route>
    </Switch>
  );
}

export default Main;