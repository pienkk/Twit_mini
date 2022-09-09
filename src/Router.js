import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import LoginDaeho from "./pages/kimdaeho/LoginTest/LoginDaeho";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route
          path="./pages/kimdaeho/LoginTest/LoginDaeho"
          element={<LoginDaeho />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
