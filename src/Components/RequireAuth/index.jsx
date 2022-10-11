import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../reducers/userReducer';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ( { children} ) => {
    // User from the redux store
    let user = useSelector(state => state.user);

    const dispatch = useDispatch();
    // Helper state as for not to navigate before checking localstorage information
    const [loading, setLoading] = useState(true);
    // For redirecting
    let location = useLocation();

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('user');
        //If not logged, then try to log in from local storage info
        if(!user.user) {
            const user = JSON.parse(loggedUser);
            // update redux store
            dispatch(login(user));
            setLoading(false);
        }
    }, [])
    

    if(loading && !user.user) {
        return (
            'loading..'
        );
    }

    if(!user.user) {
        return <Navigate to="/Login" state={{from: location}} replace/>
    }

    return children
}

export default RequireAuth;