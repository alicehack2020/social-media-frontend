import { createContext, useEffect } from "react";

const authContext = createContext();

export const authProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TODO login logic
    //sample data
    setCurrentUser({ id: 1, name: "John Doe", email: "m@gmial.com" });
  };

  useEffect(() => {
    localStorage.setItem(
      "user",
      localStorage.setItem("user", JSON.stringify(currentUser))
    );
  }, [currentUser]);

  return (
    <authContext.Provider value={{ currentUser, login }}>
      {children}
    </authContext.Provider>
  );
};
s;
