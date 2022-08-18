import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { PhotoCardDetail } from "./container/PhotoCardDetail";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardDetail id={detailId} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};
