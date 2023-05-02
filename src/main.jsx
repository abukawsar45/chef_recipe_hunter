import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blog from './components/Blog/Blog';
import AuthProviders from './AuthProviders/AuthProviders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:  async () => {
          const res = await fetch('http://localhost:5000/alldata')
          const data = await res.json()
          return data;
        },
        /*
        *   path: '/jobdetails/:jobId',
        element: <SingleJobDetails></SingleJobDetails>,
        loader: async ({params}) => {
          const res = await fetch('/jobsdata.json')
          const data = await res.json()
          return data.find(job => job.id == params.jobId)
        *   */
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
