import React, { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext.jsx";

const NavBar = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);
  return (
    <button className="border border-red-950" onClick={toggleDarkMode}>
      NavBar
    </button>
  );
};

export default NavBar;
