// import React, { useState } from "react";
import MainTrend from '../pages/kimdaeho/MainTest/MainTrend';

import MainFeed from '../pages/seunghoon/MainFeed/MainFeed';
import './Main.scss';
import LeftSideBar from '../pages/hyosung/leftSideBar';
import { useState, useEffect } from 'react';
import Profile from '../pages/jiwon/Profile';

function Main() {
  return (
    <div className="main">
      <MainFeed />
    </div>
  );
}

export default Main;
