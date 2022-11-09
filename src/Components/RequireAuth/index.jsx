import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../reducers/userReducer';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  // User from the redux store
  let user = useSelector((state) => state.user);

  console.log(user, 'vittu23');
  const dispatch = useDispatch();
  // Helper state as for not to navigate before checking localstorage information
  const [loading, setLoading] = useState(true);
  // For redirecting
  let location = useLocation();
  const userToken = window.localStorage.getItem('user');

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('user');
    //If not logged, then try to log in from local storage info
    if (!user.user) {
      const user = JSON.parse(loggedUser);
      // update redux store
      dispatch(login(user));
      setLoading(false);
    }
  }, []);

  // User info not yet loaded
  if (loading && !user.user) {
    return 'loading..';
  }

  //No user logged
  if (!user.user || !userToken) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
