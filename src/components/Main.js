// import React, { useState } from "react";
import MainTrend from '../pages/kimdaeho/MainTest/MainTrend';

import MainFeed from '../pages/seunghoon/MainFeed/MainFeed';
import './Main.scss';
import LeftSideBar from '../pages/hyosung/leftSideBar';
import { useState, useEffect } from 'react';
import Profile from '../pages/jiwon/Profile';

function Main() {
  useEffect(() => {
    fetch('/data/profile.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProfile(...data);
      });
  }, []);
  const [profile, setProfile] = useState({});
  // console.log(profile);
  return (
    <div className="main">
      <LeftSideBar profile={profile} />
      {/* <MainFeed /> */}
      <MainTrend />
      <Profile />
    </div>
  );
}

export default Main;
