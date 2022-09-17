import React, { useEffect, useState } from 'react';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';
import NoTweets from './NoTweets';

const ProfileLikes = () => {
  const [feeds, setFeeds] = useState([]);
  const accessToken = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://pienk.ddns.net:3000/profile/like', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(data => setFeeds(data.tweets));
  }, []);

  return <>{feeds.length ? <TwitList feeds={feeds} /> : <NoTweets />}</>;
};

export default ProfileLikes;
