import React from 'react';
import Overlay from './Overlay';

import './ProfileEdit.scss';

const ProfileEdit = ({ user, setProfileEditClicked }) => {
  const birthday = new Date(user.birthday);
  const birthYear = birthday.getFullYear();
  const birthMonth = birthday.getMonth() + 1;
  const birthDate = birthday.getDate();

  return (
    <>
      <Overlay setProfileEditClicked={setProfileEditClicked} />
      <div className="ProfileEdit">
        <div className="ProfileEditTop">
          <button
            className="profile-edit-x-button"
            onClick={() => setProfileEditClicked(false)}
          >
            <img
              src="images/Twitter_files/profile_icons/x.png"
              width="20px"
              alt="닫기 버튼"
            />
          </button>
          <div>프로필 수정</div>
          <button className="profile-edit-save-button">저장</button>
        </div>
        <img
          className="profileEditBackgroundImg"
          src={user.backgroundImg}
          alt="사용자 지정 배경"
        />
        <img
          className="profileEditProfileImg"
          src={user.profileImg}
          alt="사용자 프로필 사진"
        />
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
