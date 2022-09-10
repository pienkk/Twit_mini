import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import LoginDaeho from "./pages/kimdaeho/LoginTest/LoginDaeho";
import MainTrend from "./pages/kimdaeho/MainTest/MainTrend";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/LoginDaeho" element={<LoginDaeho />} />
        <Route path="/MainTrend" element={<MainTrend />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
