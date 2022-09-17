import React from 'react';

import './modal.scss';
function Modal({ profileImg, nickname, userid, setModal, modalBackClick }) {
  const userId = window.localStorage.getItem('userId');
  const userNickname = window.localStorage.getItem('userNickname');
  const userProfileImg = window.localStorage.getItem('userProfileImg');
  return (
    <>
      <div className="modalBack" onClick={modalBackClick}></div>
      <div className="modalWrapAll">
        <div className="modalWrap">
          <img className="modalImage" src={userProfileImg} />
          <div className="modalUserWrap">
            <p className="ptag1">{userNickname}</p>
            <p className="ptag2">{userId}</p>
          </div>
          <img className="check" src="./checkicon.png" />
        </div>
        {/* <div className="item1"> */}
        <span className="modalBlock">기존 계정 추가</span>
        {/* </div> */}
        {/* <div className="item2"> */}
        <span className="modalBlock">@{userId} 계정에서 로그아웃</span>
        {/* </div> */}
      </div>
    </>
  );
}
export default Modal;
