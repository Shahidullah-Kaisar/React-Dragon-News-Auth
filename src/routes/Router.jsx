
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import About from "../pages/home/About/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Career from "../pages/career/Career";
import NewDetails from "../pages/news/NewDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/news.json')
        },
        {
          path: '/news/:id',
          element:<PrivateRoute> <NewDetails></NewDetails> </PrivateRoute> 
        },
        {
          path: '/about',
          element: <PrivateRoute><About></About></PrivateRoute>,
        },
        {
          path: '/career',
          element: <PrivateRoute><Career></Career></PrivateRoute>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        }

      ]
    },
  ]);

  export default router;