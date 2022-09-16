import { useState, useRef, useEffect } from 'react';
import React from 'react';
import './ProfileEdit.scss';
const ProfileEdit = ({ user, profileEditModalClose }) => {
  const profileEditSave = () => {
    fetch('http://10.58.2.73:3000/profile/modfy', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyOCwiaWF0IjoxNjYzMjIzNTA0fQ.4ypXCBzPIv6lrERcw7AjVKR_hPCKGeEKfs-RLXski3E',
      },
      body: JSON.stringify({
        profile_nickname: textInput.nickname,
        profile_banner: backgroundImage,
        profile_image: profileImage,
        comment: textInput.comment,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  useEffect(() => {
    console.log(profileImage); ////////////
  });

  const [bgFiles, setBgFiles] = useState();
  const [backgroundImage, setBackgroundImage] = useState(user.backgroundImg); // 기본 유저 이미지 넣기;
  const backgroundImgFileInput = useRef(null);
  const [profileFiles, setProfileFiles] = useState();
  const [profileImage, setProfileImage] = useState(user.profileImg); // 기본 유저 이미지 넣기;
  const profileImgFileInput = useRef(null);
  const backgroundChange = e => {
    if (e.target.files[0]) {
      setBgFiles(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setBackgroundImage(user.backgroundImg);
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setBackgroundImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const profileChange = e => {
    if (e.target.files[0]) {
      setProfileFiles(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setProfileImage(user.profileImg);
      return;
    }
    //화면에 프로필 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  // const [backgroundImg, setBackgroundImg] = useState();
  // const [nickname, setNickname] = useState();
  // const [introduce, setIntroduce] = useState();

  const [textInput, setTextInput] = useState({ nickname: '', comment: '' });

  const handleTextInput = e => {
    const { name, value } = e.target;
    setTextInput({ ...textInput, [name]: value });
  };

  console.log(textInput);

  // const profileImgEdit = () => {};
  // const backgroundImgEdit = () => {};
  // const nicknameEdit = () => {};
  // const introduceEdit = () => {};
  const birthday = new Date(user.birthday);
  const birthYear = birthday.getFullYear();
  const birthMonth = birthday.getMonth() + 1;
  const birthDate = birthday.getDate();

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
            name="profile-image-uploader"
            onChange={backgroundChange}
            ref={backgroundImgFileInput}
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
            name="profile-image-uploader"
            onChange={profileChange}
            ref={profileImgFileInput}
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
              name="nickname"
              value={textInput.nickname}
              onChange={handleTextInput}
            />
          </div>
          <div className="profile-edit-input-wrap">
            <span>자기소개</span>
            <textarea
              name="comment"
              value={textInput.comment}
              onChange={handleTextInput}
            />
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
