import React from 'react';
import './leftSideBar.scss';
import Profile from './profile';
import Modal from './modal';
function LeftSideBar({ profile }) {
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

          <div className="categories home">
            <img src="./homeicon.png" />
            <span className="categoriesWord">홈</span>
          </div>

          <div className="categories">
            <img src="./hastagicon.png" />
            <span className="categoriesWord">탐색하기</span>
          </div>
          <div className="categories">
            <img src="./notificationicon.png" />
            <span className="categoriesWord">알림</span>
          </div>
          <div className="categories">
            <img src="./emailicon.png" />
            <span className="categoriesWord">쪽지</span>
          </div>
          <div className="categories">
            <img src="./bookmarkicon.png" />
            <span className="categoriesWord">북마크</span>
          </div>
          <div className="categories">
            <img src="./listicon.png" />
            <span className="categoriesWord">리스트</span>
          </div>
          <div className="categories">
            <img src="./user-profileicon.png" />
            <span className="categoriesWord">프로필</span>
          </div>
          <div className="categories">
            <img src="./moreicon.png" />
            <span className="categoriesWord">더보기</span>
          </div>

          <div className="twit">트윗하기</div>
        </div>

        <Profile
          profile={profile}
          id={profile.id}
          nickname={profile.nickname}
          userid={profile.userid}
          profleImg={profile.profleImg}
          joinDay={profile.joinDay}
          follow={profile.follow}
          follower={profile.follower}
        />
      </div>
    </>
  );
}

export default LeftSideBar;
