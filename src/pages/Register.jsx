import axios from "axios";
import React from "react";

const Register = () => {
  const handleClick = async (e) => {
    // e.preventDefault();
    const inputs = {
      username: "test",
      email: "m@gmail.com",
      password: "test1234",
      name: "mohan",
    };
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <button className="border border-red-900 p-2" onClick={handleClick}>
        Register
      </button>
    </div>
  );
};

export default Register;
