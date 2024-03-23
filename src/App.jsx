import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import Leftbar from "./components/Leftbar";
import SideBar from "./components/SideBar";
import Profile from "./pages/Profile";

const App = () => {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div className="flex">
          <Leftbar />
          <Outlet />
          <SideBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Profile />,
          path: "/profile/:id",
        },
      ],
    },
    {
      element: <Login />,
      path: "/login",
    },
    {
      element: <Register />,
      path: "/register",
    },
  ]);

  return (
    <di>
      <RouterProvider router={router} />
    </di>
  );
};

export default App;
