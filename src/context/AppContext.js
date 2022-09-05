import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = (props) => {
  const [isAuth, setAuth] = useState(() => {
    return localStorage.getItem("token");
  });

  const activateAuth = (token) => {
    localStorage.setItem("token", token);
    setAuth(true);
  };

  const removeAuth = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return (
    <AppContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
