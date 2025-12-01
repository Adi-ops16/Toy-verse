import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { ToysContext } from '../provider/ToysProvider';
import RingLoaderC from '../Components/Loaders/RingLoaderC';

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