import React, { useEffect, useState } from 'react';

import WhoToFollow from './WhoToFollow';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';
import NoTweets from './NoTweets';

const ProfileTweetsAndReplies = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://pienk.ddns.net:3000/profile/reply', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjMyMTgzNTZ9.sy8yanZe0sNbduh1uPf6P-JkKGKadZkZRDZNC5I1CKY',
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
