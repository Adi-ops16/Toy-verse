import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import RingLoaderC from '../Components/Loaders/RingLoaderC';
import { ToysContext } from '../Context/ToysContext';

const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext)
    const { loading } = use(ToysContext)
    const location = useLocation()
    if (loading) {
        return <RingLoaderC></RingLoaderC>
    } else {
        if (user) {
            return children;
        } return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    };
}

export default PrivateRoute;