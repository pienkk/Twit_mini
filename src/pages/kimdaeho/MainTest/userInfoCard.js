import React from 'react';
import './userInfoCard.scss';
function UserInfoCard({ nickname, id, profileImg, userId }) {
  return (
    <>
      <div className="cardWrap">
        <div className="userCard">
          <img className="userImg" alt="user" src={profileImg} />
          <div className="user">
            <p className="userNickName">{nickname}</p>
            <p className="userId">{userId}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserInfoCard;
