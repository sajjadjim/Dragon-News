import React, { use } from 'react'
import { AuthContext } from './AUthProvider'
import { Navigate, useLocation } from 'react-router';

function PrivateRoute({children}) {
 const location =  useLocation()
 console.log(location)   
    const {user} = use(AuthContext);

    if(user && user.email)
    {
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
}
export default PrivateRoute
