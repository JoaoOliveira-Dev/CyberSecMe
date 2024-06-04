import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./App";
import LoginPage from "./app/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/" />
      </Routes>
      {/* <Route component={LoginPage} path="/login" /> */}
    </BrowserRouter>
  );
};

export default AppRoutes;
