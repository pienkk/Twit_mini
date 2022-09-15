import React from 'react';

import './RecommendedTopics.scss';

const RecommendedTopics = ({ topic }) => {
  return (
    <div className="RecommendedTopics">
      <div className="RecommendedTopicsLeft">
        <span>{topic}</span>
        <img src="./images/Twitter_files/profile_icons/plus.png" />
      </div>
      <img src="./images/Twitter_files/profile_icons/x.png" />
    </div>
  );
};

export default RecommendedTopics;
