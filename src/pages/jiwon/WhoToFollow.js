import React, { useState } from 'react';
import { useEffect } from 'react';
import WhoToFollowItem from './WhoToFollowItem';

import './WhoToFollow.scss';
import ViewMore from './ViewMore';

const WhoToFollow = () => {
  const [recommendedFollow, setRecommendedFollow] = useState([]);

  useEffect(() => {
    fetch('/data/recommendedFollow.json')
      .then(res => res.json())
      .then(data => setRecommendedFollow(data));
  }, []);

  return (
    <div className="WhoToFollow">
      <div className="recommend-title">팔로우 추천</div>
      {recommendedFollow.map(e => (
        <WhoToFollowItem key={e.id} item={e} />
      ))}
      <ViewMore value="더 보기" />
    </div>
  );
};

export default WhoToFollow;
