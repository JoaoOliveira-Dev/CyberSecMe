import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./App";
import LoginPage from "./app/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={LoginPage} path="/" exact />
      {/* <Route component={LoginPage} path="/login" /> */}
    </BrowserRouter>
  );
};

export default Routes;
