import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import Modal from './modal';

function Profile({ profile, nickname, userid, profleImg }) {
  const [modal, setModal] = useState(false);

  return (
    <div>
      {modal == true && (
        <Modal
          id={profile.id}
          nickname={profile.nickname}
          userid={profile.userid}
          profleImg={profile.profleImg}
          joinDay={profile.joinDay}
          follow={profile.follow}
          follower={profile.follower}
          setModal={setModal}
        />
      )}
      <div
        onClick={() => {
          setModal(!modal);
        }}
        className="introduce"
      >
        <img className="profileImage" src={profleImg} />
        <div className="userWrap">
          <p className="ptag1">{nickname}</p>
          <p className="ptag2">{userid}</p>
        </div>
        <img src="./dotdotdot.png" width="20px" />
      </div>
    </div>
  );
}

export default Profile;
