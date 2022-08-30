import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/GlobalStyles";

import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { AppRoutes } from "./routes/Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Logo />
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  );
};
