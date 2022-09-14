import React from 'react';

import './WhoToFollowItem.scss';

const WhoToFollowItem = ({ item }) => {
  return (
    <div className="WhoToFollowItem">
      <img src={item.profileImg} alt={`${item.nickname} 의 프로필사진`} />
      <div className="WhoToFollowItemUserInfo">
        <span>{item.nickname}</span>
        <span>@{item.userid}</span>
      </div>
      <button>팔로우</button>
    </div>
  );
};

export default WhoToFollowItem;
