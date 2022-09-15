import React from 'react';
import { useEffect, useState } from 'react';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';
import WhoToFollow from './WhoToFollow';
import TopicsToFollow from './TopicsToFollow';

import './twitlist.scss';

const ProfileTweets = ({ user }) => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch('./data/main.json')
      .then(response => response.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  return (
    <div>
      <TwitList feeds={feeds} />
      <WhoToFollow />
      <TopicsToFollow />
    </div>
  );
};

export default ProfileTweets;
