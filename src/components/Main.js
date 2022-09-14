// import React, { useState } from "react";
import MainTrend from '../pages/kimdaeho/MainTest/MainTrend';
import LeftSideBar from '../pages/hyosung/leftSideBar';
import { useState, useEffect } from 'react';

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
  console.log(profile);
  return (
    <div className="main">
      <MainTrend></MainTrend>
      <LeftSideBar profile={profile} />
    </div>
  );
}

export default Main;
