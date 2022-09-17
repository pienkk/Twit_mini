import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import Modal from './modal';
import ModalPortal from '../seunghoon/MainFeed/Portal';
function Profile({ profile, nickname, userid, profileImg }) {
  const [modal, setModal] = useState(false);

  const modalBackClick = () => {
    setModal(false);
  };
  const userId = window.localStorage.getItem('userId');
  const userNickname = window.localStorage.getItem('userNickname');
  const userProfileImg = window.localStorage.getItem('userProfileImg');

  return (
    <div>
      <div
        onClick={() => {
          setModal(true);
        }}
        className="introduce"
      >
        <img className="profileImage" src={userProfileImg} />
        <div className="userWrap">
          <p className="ptag1">{userNickname}</p>
          <p className="ptag2">@{userId}</p>
        </div>
        <img src="./dotdotdot.png" width="20px" />
      </div>
      <ModalPortal>
        {modal && (
          <Modal
            profileImg={profileImg}
            nickname={nickname}
            userid={userid}
            modalBackClick={modalBackClick}
          />
        )}
      </ModalPortal>
    </div>
  );
}

export default Profile;
