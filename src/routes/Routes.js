import React, { useContext, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
// import { Detail } from "../pages/Detail";
// import { Favs } from "../pages/Favs";
// import { UserInfo } from "../pages/UserInfo";
import { NotAuthUser } from "../pages/NotAuthUser";
import { AppContext } from "../context/AppContext";
// import { RegisterUser } from "../pages/RegisterUser";
// import { NotFound } from "../pages/NotFound";

const Favs = React.lazy(() => import("../pages/Favs"));
const Detail = React.lazy(() => import("../pages/Detail"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const RegisterUser = React.lazy(() => import("../pages/RegisterUser"));
const UserInfo = React.lazy(() => import("../pages/UserInfo"));

export const AppRoutes = () => {
  const { isAuth } = useContext(AppContext);
  const isUserAuth = (isAuth, element) => {
    return isAuth ? element : <Navigate replace to="/login" />;
  };
  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:categoryId" element={<Home />} />
        <Route path={"/detail/:detailId"} element={<Detail />} />
        <Route path="/favs" element={isUserAuth(isAuth, <Favs />)} />
        <Route path="/user" element={isUserAuth(isAuth, <UserInfo />)} />
        {!isAuth && <Route path="/login" element={<NotAuthUser />} />}
        {!isAuth && <Route path="/register" element={<RegisterUser />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
