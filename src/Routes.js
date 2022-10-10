import { useLocation } from 'react-router-dom';
import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Main from './Screens/Main';
import AddWorkout from './Screens/AddWorkout';
import PastWorkout from './Screens/PastWorkouts';
import Settings from './Screens/Settings';

// TODO add protected route for after login (component which redirects you to login if no token)

const Routes = () => {
  const location = useLocation();

  return (
    <Switch>
      <Route path="/Login" element={<Login />} />
      <Route path="/Home" element={<Main />} />
      <Route path="/AddWorkout" element={<AddWorkout />} />
      <Route path="/PastWorkouts" element={<PastWorkout />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/" element={<Main />} />
      {/*<Route path="/Register" component={}/>*/}
    </Switch>
  );
};

export default Routes;
