import React  from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
// import Register from './components/Register/Register';
// import Blog from './components/Blog/Blog';
import AuthProviders from './AuthProviders/AuthProviders';
// import SingleChefInfo from './components/SingleChefInfo/SingleChefInfo';
import PrivateRoutes from './Private/PrivateRoutes';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ErrorPage from './components/ErrorPage/ErrorPage';

const Blog = React.lazy(() => import('./components/Blog/Blog'));
const Register = React.lazy(() => import('./components/Register/Register'));
const SingleChefInfo = React.lazy(() =>import('./components/SingleChefInfo/SingleChefInfo'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch(
            'https://my-assignment-10-server-abukawsar45.vercel.app/alldata'
          );
          const data = await res.json();
          return data;
        },
      },
      {
        path: '/alldata/:chefId',
        element: (
          <PrivateRoutes>
            <SingleChefInfo></SingleChefInfo>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-10-server-abukawsar45.vercel.app/alldata/${params.chefId}`
          ),
        
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
        path: '/forgetten_password',
        element: <ForgetPassword></ForgetPassword>
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
