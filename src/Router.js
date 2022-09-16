import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import LoginDaeho from './pages/kimdaeho/LoginTest/LoginDaeho';
import MainTrend from './pages/kimdaeho/MainTest/MainTrend';
import Footer from './components/Footer';
import Profile from './pages/jiwon/Profile';
import LeftSideBar from './pages/hyosung/leftSideBar';

const Router = () => {
  const [path, setPath] = useState(window.location.pathname);
  console.log(path);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

      {path === '/Login' ? null : (
        <>
          <LeftSideBar />
          <MainTrend />
        </>
      )}

      <Routes>
        <Route path="/Main" element={<Main />} />
        {/* <Route path="/LoginDaeho" element={<LoginDaeho />} />
        <Route path="/MainTrend" element={<MainTrend />} /> */}
        <Route path="/home" element={<Profile />} />
        <Route path="/explore" element={<Profile />} />
        <Route path="/notifications" element={<Profile />} />
        <Route path="/messages" element={<Profile />} />
        <Route path="/bookmarks" element={<Profile />} />
        <Route path="/list" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
