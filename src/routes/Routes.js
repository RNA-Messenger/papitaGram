import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Favs } from "../pages/Favs";
import { UserInfo } from "../pages/UserInfo";
import { NotAuthUser } from "../pages/NotAuthUser";
import { AppContext } from "../context/AppContext";
import { RegisterUser } from "../pages/RegisterUser";

export const AppRoutes = () => {
  const { isAuth } = useContext(AppContext);
  const isUserAuth = (isAuth, element) => {
    return isAuth ? element : <NotAuthUser />;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pet/:categoryId" element={<Home />} />
      <Route path={"/detail/:detailId"} element={<Detail />} />
      <Route path="/favs" element={isUserAuth(isAuth, <Favs />)} />
      {/* <Route path="/favs" element={<Favs />} /> */}
      <Route path="/user" element={isUserAuth(isAuth, <UserInfo />)} />
      {!isAuth && (
        <>
          <Route path="/register" element={<RegisterUser />} />
        </>
      )}
    </Routes>
  );
};
