import { useState, useRef, useEffect } from 'react';
import React from 'react';
import './ProfileEdit.scss';
const ProfileEdit = ({ user, profileEditModalClose }) => {
  const [bgFiles, setBgFiles] = useState();
  const [backgroundImage, setBackgroundImage] = useState(user.backgroundImg); // 기본 유저 이미지 넣기;
  const backgroundImgFileInput = useRef(null);
  const [profileFiles, setProfileFiles] = useState();
  const [profileImage, setProfileImage] = useState(user.profile_image); // 기본 유저 이미지 넣기;
  const profileImgFileInput = useRef(null);

  const [bgServerFile, setBgServerFile] = useState(new FormData());
  const [pfServerFile, setPfServerFile] = useState(new FormData());
  const editForm = document.getElementById('profileEditForm');
  const accessToken = localStorage.getItem('token');

  const profileEditSave = e => {
    e.preventDefault();

    fetch('http://pienk.ddns.net:3000/profile/modify', {
      method: 'PATCH',
      headers: {
        enctype:
          'multipart/form-data; boundary=----WebKitFormBoundarydD5THZoXsb7pVLpu',
        authorization: accessToken,
      },
      body: new FormData(editForm),
    })
      .catch(error => console.log('에러', error.message))
      .then(response => console.log(response))
      .then(() => profileEditModalClose())
      .then(() => window.location.reload());
  };

  const backgroundChange = e => {
    if (e.target.files[0]) {
      setBgFiles(e.target.files[0]);
    } else {
      setBackgroundImage(user.backgroundImg);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBackgroundImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setBgServerFile(bgServerFile.append('file', e.target.files[0]));
    for (let value of bgServerFile.values()) {
      setBgServerFile(value);
    }
  };

  const profileChange = e => {
    if (e.target.files[0]) {
      setProfileFiles(e.target.files[0]);
    } else {
      setProfileImage(user.profileImg);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    pfServerFile.append('file', e.target.files[0]);
    // console.log(pfServerFile);
    // for (let value of pfServerFile.values()) {
    //   console.log('pf', value);
    // }
  };

  const [textInput, setTextInput] = useState({
    nickname: `${user.profile_nickname}`,
    comment: `${user.introduce}`,
  });

  const handleTextInput = e => {
    const { name, value } = e.target;
    setTextInput({ ...textInput, [name]: value });
  };

  // const birthday = new Date(user.birthday);
  // const birthYear = birthday.getFullYear();
  // const birthMonth = birthday.getMonth() + 1;
  // const birthDate = birthday.getDate();

  return (
    <>
      <div className="profile-edit-back" onClick={profileEditModalClose} />
      <form className="ProfileEdit" id="profileEditForm">
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
          <button
            className="profile-edit-save-button"
            onClick={profileEditSave}
          >
            저장
          </button>
        </div>
        <div className="profileEditBackground">
          <div className="profileEditOverlay" />
          <input
            className="fileUploader"
            type="file"
            accept="image/*"
            onChange={backgroundChange}
            ref={backgroundImgFileInput}
            name="backgroundImg"
          />
          <img
            className="profileImageEditCamera"
            src="images/Twitter_files/profile_icons/camera.png"
            alt="이미지 수정"
            onClick={() => {
              backgroundImgFileInput.current.click();
            }}
          />
          <img
            className="profileEditBackgroundImg"
            src={backgroundImage}
            alt="사용자 지정 배경"
          />
        </div>
        <div className="profileEditProfile">
          <div className="profileEditOverlay" />
          <input
            className="fileUploader2"
            type="file"
            accept="image/*"
            onChange={profileChange}
            ref={profileImgFileInput}
            name="profile_img"
          />
          <img
            className="profileImageEditCamera2"
            src="images/Twitter_files/profile_icons/camera.png"
            alt="이미지 수정"
            onClick={() => {
              profileImgFileInput.current.click();
            }}
          />
          <img
            className="profileEditProfileImg"
            src={profileImage}
            alt="사용자 프로필 사진"
          />
        </div>
        <div className="profile-edit">
          <div className="profile-edit-input-wrap">
            <span>이름</span>
            <input
              name="profile_nickname"
              value={textInput.nickname && textInput.nickname}
              onChange={handleTextInput}
            />
          </div>
          <div className="profile-edit-input-wrap">
            <span>자기소개</span>
            <textarea
              name="comment"
              value={textInput.comment && textInput.comment}
              onChange={handleTextInput}
            />
          </div>
          {/* <div className="birthday">
            <span className="birthdayTitle">생년월일</span>
            <span className="birthdayInfo">
              {birthYear + '년 ' + birthMonth + '월 ' + birthDate + '일'}
            </span>
          </div> */}
        </div>
      </form>
    </>
  );
};
export default ProfileEdit;
