import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';
import WhoToFollow from './WhoToFollow';
import TopicsToFollow from './TopicsToFollow';

import './twitlist.scss';

const ProfileTweets = ({ user }) => {
  const [feeds, setFeeds] = useState([]);
  // useEffect(() => {
  //   fetch('./data/main.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setFeeds(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch('http://10.58.0.33:3000/main', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjMyMTgzNTZ9.sy8yanZe0sNbduh1uPf6P-JkKGKadZkZRDZNC5I1CKY',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setFeeds(data));
  // }, []);

  return (
    <div>
      <TwitList feeds={feeds} />
      <WhoToFollow />
      <TopicsToFollow />
    </div>
  );
};

export default ProfileTweets;
