import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Swithch } from 'react-router-dom';
import Login from './components/Login';

import LoginDaeho from './pages/kimdaeho/LoginTest/LoginDaeho';
import MainTrend from './pages/kimdaeho/MainTest/MainTrend';
import Footer from './components/Footer';
import Profile from './pages/jiwon/Profile';
import LeftSideBar from './pages/hyosung/leftSideBar';
import MainFeed from './pages/seunghoon/MainFeed/MainFeed';

const Router = () => {
  return (
    <BrowserRouter>
      <LeftSideBar />
      <MainTrend />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<MainFeed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
