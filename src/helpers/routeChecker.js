import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children }) {
    return user ? <Navigate to={{ pathname: loggedInPath, }} /> : children;
}

export function ProtectRoute({ user, children }) {
    const location = useLocation();
    return (
        user ? children : <Navigate to={{
            pathname: '/signin',
            state: { from: location },
        }} />
    )
}