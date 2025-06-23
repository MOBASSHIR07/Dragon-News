import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, replace, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = React.useContext(AuthContext);
    const location = useLocation();
   
    if(loading){
      return  <Loading></Loading>
    }
    if(user && user.email){
      return children;

    }
    return <Navigate state={location.pathname} to='/auth/login'  replace />
};

export default PrivateRoute;