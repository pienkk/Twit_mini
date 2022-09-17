import React, { useEffect, useState } from 'react';

import './ProfileMedia.scss';

import TwitList from '../seunghoon/MainFeed/components/TwitList/TwitList';

const ProfileMedia = () => {
  const [feeds, setFeeds] = useState([]);
  const accessToken = localStorage.getItem('token');
  useEffect(() => {
    fetch('http://pienk.ddns.net:3000/profile/media', {
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
      {feeds.length ? (
        <TwitList feeds={feeds} />
      ) : (
        <div className="profile-media">
          <img
            src="https://abs.twimg.com/sticky/illustrations/empty-states/masked-doll-head-with-camera-800x400.v1.png"
            alt="프로필 미디어"
          />
          <span className="media-title">조명, 카메라... 첨부!</span>
          <span className="media-description">
            사진이나 동영상을 포함한 트윗을 전송하면 여기에 표시됩니다.
          </span>
        </div>
      )}
    </>
  );
};

export default ProfileMedia;
