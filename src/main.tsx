import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './routes/sign_up.tsx';
import Login from './routes/login.tsx'
import ProtectedRoute from './routes/protected_route.tsx';
import Dashboard from './routes/dashboard.tsx';
import { AuthProvider } from './auth/auth_provider.tsx';


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
      element: <ProtectedRoute/>,
      children: [
        {
          path:'/dashboard',
          element: <Dashboard/>,
        }
      ]
      }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>




    <RouterProvider router ={router} />
    </AuthProvider>
  </React.StrictMode>,
)
