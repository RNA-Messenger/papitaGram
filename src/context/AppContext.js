import React, { createContext, useState } from "react";

const AppContext = createContext(null);

const AppProvider = (props) => {
  const [isAuth, setAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const activateAuth = (token) => {
    window.sessionStorage.setItem("token", token);
    setAuth(true);
  };

  return (
    <AppContext.Provider value={{ isAuth, activateAuth }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
