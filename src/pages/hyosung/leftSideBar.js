import React from 'react';
import './leftSideBar.scss';
import Profile from './profile';
// import Modal from './modal';
import { Link } from 'react-router-dom';
import MoreLook from './moreLook';
import { useEffect, useState } from 'react';
import TwitModal from './twitModal';

import Modal from '../seunghoon/MainFeed/Modal';
import ModalPortal from '../seunghoon/MainFeed/Portal';

const LeftSideBar = () => {
  const [profile, setProfile] = useState({});
  if (window.location.pathname === '/login') return null;

  return (
    <>
      <div className="sideBarNav">
        <div className="sideBarWrap">
          <img
            src="./bluebird.png"
            className="birdImage"
            alt="bluebird"
            width="30px"
          />

          <Link className="linkTag" to={'/main'}>
            <div className="categories home">
              <img src="./homeicon.png" />
              <span className="categoriesWord">홈</span>
            </div>
          </Link>
          <Link className="linkTag" to={'/explore'}>
            <div className="categories">
              <img src="./hastagicon.png" />
              <span className="categoriesWord">탐색하기</span>
            </div>
          </Link>
          <Link className="linkTag" to={'/notifications'}>
            <div className="categories">
              <img src="./notificationicon.png" />
              <span className="categoriesWord">알림</span>
            </div>
          </Link>
          <Link className="linkTag" to={'/messages'}>
            <div className="categories">
              <img src="./emailicon.png" />
              <span className="categoriesWord">쪽지</span>
            </div>
          </Link>
          <Link className="linkTag" to={'/bookmark'}>
            <div className="categories">
              <img src="./bookmarkicon.png" />
              <span className="categoriesWord">북마크</span>
            </div>
          </Link>
          {/* <Link className="linkTag" to={`/${profile.nickname}/lists`}> */}
          <div className="categories">
            <img src="./listicon.png" />
            <span className="categoriesWord">리스트</span>
          </div>
          {/* </Link> */}
          <Link className="linkTag" to={'/profile'}>
            <div className="categories">
              <img src="./user-profileicon.png" />
              <span className="categoriesWord">프로필</span>
            </div>
          </Link>

          <MoreLook />

          <TwitModal />
        </div>
        <Profile
          profile={profile}
          id={profile.id}
          nickname={profile.nickname}
          userid={profile.userid}
          profileImg={profile.profileImg}
          joinDay={profile.joinDay}
          follow={profile.follow}
          follower={profile.follower}
        />
      </div>
    </>
  );
};

export default LeftSideBar;
