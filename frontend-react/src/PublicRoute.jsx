// import {useContext}from 'react'
// import { AuthContext } from './AuthProvider'
// import { Navigate } from 'react-router-dom'

// const PublicRoute = ({children}) => {
//     const {isloggedin} = useContext(AuthContext);
//     return isloggedin ?(
//         children
//   ):(
//     <Navigate to="/dashboard" />
//   )
// }
// export default PublicRoute


import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isloggedin } = useContext(AuthContext);

  // If logged in, redirect to dashboard. Else, show the page (login/register)
  return isloggedin ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
