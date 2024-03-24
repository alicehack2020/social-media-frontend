import React, { useContext } from "react";
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
import SideBar from "./components/Right";
import Profile from "./pages/Profile";
import { DarkModeContext } from "./context/darkModeContext";

const App = () => {
  const currentUser = true;
  //TODO 1.add dark theme logic here in tailwindcss
  //TODO 2. add switch button in navbar

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div
        className={`${
          darkMode ? "dark:bg-white dark:text-back" : " bg-black text-white"
        }`}
      >
        <NavBar />
        <div className="flex justify-between">
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
