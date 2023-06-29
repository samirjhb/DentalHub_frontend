import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './routes/sign_up.tsx';
import Dashboard from './routes/dashboard.tsx';
import Login from './routes/login.tsx'


const router = createBrowserRouter([
  {
  path: '/login',
  element: <Login/>,
  },
  {
    path: '/sign_up',
    element: <SignUp/>,
  },
    {
      path: '/dashboard',
      element: <Dashboard/>,
      }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
