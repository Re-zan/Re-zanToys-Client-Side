import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import My_toys from "../Pages/My Toys/My_toys";
import ALL_toys from "../Pages/All Toys/ALL_toys";
import Add_toys from "../Pages/Add Toys/Add_toys";
import Login from "../Pages/Login/Login";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import Profile from "../Pages/Profile/Profile";
import Details from "../Pages/ProductDetails/Details";
import PrivateRouter from "./PrivateRouter";
import UpdateData from "../Pages/My Toys/UpdateData";
import ErrorPage from "../componentes/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "all-toys",
        element: <ALL_toys></ALL_toys>,
      },
      {
        path: "my-toys",
        element: <My_toys></My_toys>,
      },
      {
        path: "my-toys/:id",
        element: <UpdateData></UpdateData>,
        loader: ({ params }) =>
          fetch(`https://re-zan-toys-server-side.vercel.app/toys/${params.id}`),
      },
      {
        path: "add-toys",
        element: <Add_toys></Add_toys>,
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRouter>
            <Details></Details>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://re-zan-toys-server-side.vercel.app/toys/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
export default router;
