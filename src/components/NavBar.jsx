import React, { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext.jsx";
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>NavBar</h1>
      <div className="flex w-full justify-end gap-4">
        <button className="border border-red-950" onClick={toggleDarkMode}>
          Theme
        </button>
        <button className="border border-red-950" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
