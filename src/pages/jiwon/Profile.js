import React, { useEffect, useState } from 'react';

import './Profile.scss';
import '../seunghoon/MainFeed/Mainfeed.scss';

import ProfileTweets from './ProfileTweets';
import ProfileTweetsAndReplies from './ProfileTweetsAndReplies';
import ProfileMedia from './ProfileMedia';
import ProfileLikes from './ProfileLikes';
import ProfileEdit from './ProfileEdit';

import ModalPortal from '../seunghoon/MainFeed/Portal.js';

const Profile = () => {
  useEffect(() => {
    fetch('/data/profile.json')
      .then(res => res.json())
      .then(data => setUser(...data));
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.2.73:3000/profile/post', {
  //     method: 'PATCH',
  //     headers: {
  //       authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyOCwiaWF0IjoxNjYzMjIzNTA0fQ.4ypXCBzPIv6lrERcw7AjVKR_hPCKGeEKfs-RLXski3E',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setUser(data.profile);
  //     });
  // }, []);

  const [user, setUser] = useState({});

  const [profileEditClicked, setProfileEditClicked] = useState(false);

  const profileEditModalClose = () => {
    setProfileEditClicked(false);
  };

  const [menuClicked, setMenuClicked] = useState({
    tweets: true,
    tweetsreplies: false,
    media: false,
    likes: false,
  });

  const handleTweetsClick = () => {
    setMenuClicked({
      tweets: true,
      tweetsreplies: false,
      media: false,
      likes: false,
    });
  };

  const handleTweetsAndRepliesClick = () => {
    setMenuClicked({
      tweets: false,
      tweetsreplies: true,
      media: false,
      likes: false,
    });
  };

  const handleMediaClick = () => {
    setMenuClicked({
      tweets: false,
      tweetsreplies: false,
      media: true,
      likes: false,
    });
  };

  const handleLikesClick = () => {
    setMenuClicked({
      tweets: false,
      tweetsreplies: false,
      media: false,
      likes: true,
    });
  };

  const profileEditClick = () => {
    setProfileEditClicked(true);
  };

  return (
    <div className="profile">
      <img
        className="profile-background"
        // src={user.backgroundImg}
        alt="유저 백그라운드 이미지"
      />
      <img
        className="profile-image"
        // src={user.profileImg}
        alt="유저 프로필 이미지"
      />
      <button className="profile-edit-button" onClick={profileEditClick}>
        프로필 수정
      </button>
      <div className="profile-information">
        <div className="profile-text">
          <span className="profile-username">{user.profile_nickname}</span>
          <span>{user.userid}</span> */}
          <span>{user.introduce}</span>
          <span className="profile-joined-day">
            <img src={ICONS.calendar} width="15px" alt="달력 아이콘" />
            {'  '}가입일 : {user.joinDay}
          </span>
          <div className="profile-follow-info">
            <span className="profile-follow-info-num">{user.follow}</span>{' '}
            <span className="profile-follow-info-text"> Followings</span>
            <span className="profile-follow-info-num">
              {user.follower}
            </span>{' '}
            <span className="profile-follow-info-text"> Followers</span>
          </div>
        </div>
      </div>
      <div className="profile-menu">
        <div className="profile-menu-item" onClick={handleTweetsClick}>
          Tweets
        </div>
        <div
          className="profile-menu-item"
          onClick={handleTweetsAndRepliesClick}
        >
          Tweets & replies
        </div>
        <div className="profile-menu-item" onClick={handleMediaClick}>
          Media
        </div>
        <div className="profile-menu-item" onClick={handleLikesClick}>
          Likes
        </div>
      </div>
      <ModalPortal>
        {profileEditClicked && (
          <ProfileEdit
            user={user}
            profileEditModalClose={profileEditModalClose}
          />
        )}
      </ModalPortal>

      {menuClicked.tweets && <ProfileTweets user={user} />}
      {menuClicked.tweetsreplies && <ProfileTweetsAndReplies user={user} />}
      {menuClicked.media && <ProfileMedia user={user} />}
      {menuClicked.likes && <ProfileLikes user={user} />}
    </div>
  );
};

export default Profile;

const ICONS = {
  addAlarm: 'images/Twitter_files/profile_icons/alarm.png',
  calendar: 'images/Twitter_files/profile_icons/calendar.png',
};
