import React, { useContext } from "react";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import Leftbar from "./components/Leftbar";
import Profile from "./pages/Profile";
import { DarkModeContext } from "./context/darkModeContext.jsx";
import Right from "./components/Right";
import { AuthContext } from "./context/authContext.jsx";

const App = () => {
  //TODO 1.add dark theme logic here in tailwindcss
  //TODO 2. add switch button in navbar
  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div
          className={`${
            darkMode ? "dark:bg-white dark:text-back" : " bg-black text-white"
          }`}
        >
          <NavBar />
          <div className="flex justify-between">
            <Leftbar />
            <Outlet />
            <Right />
          </div>
        </div>
      </QueryClientProvider>
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
