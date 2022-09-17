import React, { useEffect, useState } from 'react';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';
import NoTweets from './NoTweets';

const ProfileLikes = () => {
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    fetch('http://pienk.ddns.net:3000/profile/like', {
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

  return <>{feeds.length ? <TwitList feeds={feeds} /> : <NoTweets />}</>;
};

export default ProfileLikes;
