import React, { useContext } from "react";
import { AuthContext } from "../context/authContext.jsx";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const user = {
        username: "neo",
        password: "pass",
      };
      await login(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin} className="border border-red-950 p-1">
        login Button
      </button>
    </div>
  );
};

export default Login;
