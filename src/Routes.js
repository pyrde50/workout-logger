import { useLocation } from 'react-router-dom';
import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Main from './Screens/Main';
import AddWorkout from './Screens/AddWorkout';
import PastWorkout from './Screens/PastWorkouts';
import Settings from './Screens/Settings';
import RequireAuth from './Components/RequireAuth';
import Registration from './Screens/Registration';

// TODO add protected route for after login (component which redirects you to login if no token)

const Routes = () => {
  const location = useLocation();

  return (
    <Switch>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Registration />} />
      <Route
        path="/Home"
        element={
          <RequireAuth>
            <Main />
          </RequireAuth>
        }
      />
      <Route
        path="/AddWorkout"
        element={
          <RequireAuth>
            <AddWorkout />
          </RequireAuth>
        }
      />
      <Route
        path="/PastWorkouts"
        element={
          <RequireAuth>
            <PastWorkout />
          </RequireAuth>
        }
      />
      <Route
        path="/Settings"
        element={
          <RequireAuth>
            <Settings />
          </RequireAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Main />
          </RequireAuth>
        }
      />
      {/*<Route path="/Register" component={}/>*/}
    </Switch>
  );
};

export default Routes;
