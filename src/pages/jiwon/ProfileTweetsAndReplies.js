import React, { useEffect, useState } from 'react';

import WhoToFollow from './WhoToFollow';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';
import NoTweets from './NoTweets';

const ProfileTweetsAndReplies = () => {
  const [feeds, setFeeds] = useState([]);
  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://pienk.ddns.net:3000/profile/reply', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
    })
      .then(res => res.json())
      .then(data => setFeeds(data.tweets));
  }, []);
  return (
    <>
      {feeds.length ? <TwitList feeds={feeds} /> : <NoTweets />}
      <WhoToFollow />
    </>
  );
};

export default ProfileTweetsAndReplies;
