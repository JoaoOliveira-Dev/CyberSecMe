import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./App";
import LoginPage from "./app/pages/LoginPage";
import CreateAccountPage from "./app/pages/CreateAccountPage";
import ListUsersPage from "./app/pages/ListUsersPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/" />
        <Route element={<CreateAccountPage />} path="/createaccount" />
        <Route element={<ListUsersPage />} path="/listusers" />
      </Routes>
      {/* <Route component={LoginPage} path="/login" /> */}
    </BrowserRouter>
  );
};

export default AppRoutes;
