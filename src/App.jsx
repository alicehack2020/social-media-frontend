import React from "react";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import Leftbar from "./components/Leftbar";
import SideBar from "./components/SideBar";
import Profile from "./pages/Profile";

const App = () => {
  const currentUser = false;

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

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
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
