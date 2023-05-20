import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import My_toys from "../Pages/My Toys/My_toys";
import ALL_toys from "../Pages/All Toys/ALL_toys";
import Add_toys from "../Pages/Add Toys/Add_toys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
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
        path: "add-toys",
        element: <Add_toys></Add_toys>,
      },
    ],
  },
]);
export default router;
