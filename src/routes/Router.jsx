import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Homelayout from '../layouts/Homelayout';
import CategoryNews from '../pages/CategoryNews';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from '../pages/UpdateProfile';
import NotFound from '../components/NotFound';

const Router = createBrowserRouter([
  {    
    path: '/',
    element:<Homelayout />,
    children:[
      {
         index: true,
         element:<Navigate to={'/category/01'}></Navigate>
      },
      {
        path: '/category/:id',
        element:<CategoryNews />,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
   },
   {
    path: '/news/:id',
    element:<PrivateRoute>
      <NewsDetails>
      </NewsDetails>
      </PrivateRoute>,
    loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
   },
   {
    path:'auth',
    element: <AuthLayout />,
    children:[
      {
         path: '/auth/login',  
         element: <Login  />,

      },
      {
        path: '/auth/register',
        element: <Register />,
      },
      {
        path:'/auth/updateprofile',
        element: <PrivateRoute>
          <UpdateProfile /> 
        </PrivateRoute>
      }
    ]
   },
   {
    path:"*",
    element: <NotFound></NotFound>
   }
]);
 

export default Router;