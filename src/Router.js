import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Swithch } from 'react-router-dom';
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
      <MainTrend />
      <LeftSideBar />

export default Router;
