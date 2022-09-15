import React from 'react';

import WhoToFollow from './WhoToFollow';
import TopicsToFollow from './TopicsToFollow';

const ProfileTweets = ({ user }) => {
  return (
    <div>
      투윗투윗투윗
      <WhoToFollow />
      <TopicsToFollow user={user} />
    </div>
  );
};

export default ProfileTweets;
