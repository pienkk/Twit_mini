import { useState } from 'react';

import React from 'react';

import './ProfileEdit.scss';

const ProfileEdit = ({ user, profileEditModalClose }) => {
  const birthday = new Date(user.birthday);
  const birthYear = birthday.getFullYear();
  const birthMonth = birthday.getMonth() + 1;
  const birthDate = birthday.getDate();

  const [profileImg, setProfileImg] = useState();
  const [backgroundImg, setBackgroundImg] = useState();
  const [nickname, setNickname] = useState();
  const [introduce, setIntroduce] = useState();

  const profileImgEdit = () => {};
  const backgroundImgEdit = () => {};
  const nicknameEdit = () => {};
  const introduceEdit = () => {};

  return (
    <>
      {/* <Overlay setProfileEditClicked={setProfileEditClicked} /> */}
      <div className="profile-edit-back" onClick={profileEditModalClose} />
      <div className="ProfileEdit">
        <div className="ProfileEditTop">
          <button
            className="profile-edit-x-button"
            onClick={profileEditModalClose}
          >
            <img
              src="images/Twitter_files/profile_icons/x.png"
              width="10px"
              alt="닫기 버튼"
            />
          </button>
          <div>프로필 수정</div>
          <button className="profile-edit-save-button">저장</button>
        </div>
        <div className="profileEditBackground">
          <div className="profileEditOverlay" />
          <img
            className="profileImageEditCamera"
            src="images/Twitter_files/profile_icons/camera.png"
            alt="이미지 수정"
          />

          <img
            className="profileEditBackgroundImg"
            src={user.backgroundImg}
            alt="사용자 지정 배경"
          />
        </div>

        <div className="profileEditProfile">
          <div className="profileEditOverlay" />
          <img
            className="profileImageEditCamera2"
            src="images/Twitter_files/profile_icons/camera.png"
            alt="이미지 수정"
          />
          <img
            className="profileEditProfileImg"
            src={user.profileImg}
            alt="사용자 프로필 사진"
          />
        </div>
        <div className="profile-edit">
          <div className="profile-edit-input-wrap">
            <span>이름</span>
            <input />
          </div>
          <div className="profile-edit-input-wrap">
            <span>자기소개</span>
            <textarea />
          </div>
          <div className="birthday">
            <span className="birthdayTitle">생년월일</span>
            <span className="birthdayInfo">
              {birthYear + '년 ' + birthMonth + '월 ' + birthDate + '일'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;

// 오버레이 주기
// 오버레이 클릭 시 set Clicked false
