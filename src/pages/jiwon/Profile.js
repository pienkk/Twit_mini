import React, { useEffect, useState } from 'react';

import './Profile.scss';

import ProfileTweets from './ProfileTweets';
import ProfileTweetsAndReplies from './ProfileTweetsAndReplies';
import ProfileMedia from './ProfileMedia';
import ProfileLikes from './ProfileLikes';
import ProfileEdit from './ProfileEdit';

const Profile = () => {
  const [user, setUser] = useState({});

  const [profileEditClicked, setProfileEditClicked] = useState(false);

  const [menuClicked, setMenuClicked] = useState({
    tweets: true,
    tweetsreplies: false,
    media: false,
    likes: false,
  });

  useEffect(() => {
    fetch('/data/profile.json')
      .then(res => res.json())
      .then(data => setUser(...data));
  }, []);

  const profileEditClick = () => {
    setProfileEditClicked(true);
  };

  return (
    <div className="profile">
      <img
        className="profile-background"
        src={user.backgroundImg}
        alt="유저 백그라운드 이미지"
      />
      <img
        className="profile-image"
        src={user.profileImg}
        alt="유저 프로필 이미지"
      />
      <button className="profile-edit-button" onClick={profileEditClick}>
        프로필 수정
      </button>
      <div className="profile-information">
        <div className="profile-text">
          <span className="profile-username">{user.nickname}</span>
          <span>{user.userid}</span>
          <span>{user.introduce}</span>
          <span>
            <img src={ICONS.calendar} width="15px" alt="달력 아이콘" />
            {'  '}가입일 : {user.joinDay}
          </span>
          <div className="profile-follow-info">
            <span>{user.follow}</span> <span> Followings</span>
            <span>{user.follower}</span> <span> Followers</span>
          </div>
        </div>
      </div>
      <div className="profile-menu">
        <div className="profile-menu-item">Tweets</div>
        <div className="profile-menu-item">Tweets & replies</div>
        <div className="profile-menu-item">Media</div>
        <div className="profile-menu-item">Likes</div>
      </div>
      <ProfileTweets user={user} />
      <ProfileTweetsAndReplies user={user} />
      <ProfileMedia user={user} />
      <ProfileLikes user={user} />

      {profileEditClicked && (
        <ProfileEdit
          user={user}
          profileEditClicked={profileEditClicked}
          setProfileEditClicked={setProfileEditClicked}
        />
      )}
    </div>
  );
};

export default Profile;

const ICONS = {
  addAlarm: 'images/Twitter_files/profile_icons/alarm.png',
  calendar: 'images/Twitter_files/profile_icons/calendar.png',
};
