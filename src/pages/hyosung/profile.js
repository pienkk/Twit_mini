import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import Modal from './modal';
import ModalPortal from '../seunghoon/MainFeed/Portal';
function Profile({ profile, nickname, userid, profileImg }) {
  const [modal, setModal] = useState(false);

  const modalBackClick = () => {
    setModal(false);
  };

  return (
    <div>
      <div
        onClick={() => {
          setModal(true);
        }}
        className="introduce"
      >
        <img className="profileImage" src={profileImg} />
        <div className="userWrap">
          <p className="ptag1">{nickname}</p>
          <p className="ptag2">{userid}</p>
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
