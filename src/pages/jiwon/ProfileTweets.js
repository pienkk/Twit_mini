import React from 'react';
import { useEffect, useState } from 'react';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';
import WhoToFollow from './WhoToFollow';
import NoTweets from './NoTweets';

import './twitlist.scss';

const ProfileTweets = ({ user }) => {
  const [feeds, setFeeds] = useState([]);
  const accessToken = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://pienk.ddns.net:3000/profile/tweets', {
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

export default ProfileTweets;
