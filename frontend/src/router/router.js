import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Dashboard from "../pages/Dashboard";
import Todo from "../pages/Todo";
import Login from "../pages/Login"
import Register from "../pages/Register"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/todo/:id",
        element: <Todo />,
      },
    ],
  },
  {
    path: "/register",

    element: <Register />,
  },
  {
    path: "/login",

    element: <Login />,
  },
]);
