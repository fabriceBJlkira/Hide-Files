import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import UploadVideo from "../pages/UploadVideo";

const Router = createBrowserRouter([
  {
    path:'/',
    element: <DefaultLayout />,
    children:[
      {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/upload/video',
        element: <UploadVideo />
    },
    ]
  },
  {
    path:'/',
    element: <LoginLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);

export default Router;
