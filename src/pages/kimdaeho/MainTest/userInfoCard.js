import React, { useEffect, useState } from 'react';
import './userInfoCard.scss';

function UserInfoCard({ Img, userId, nickname }) {
  return (
    <>
      <div className="cardWrap">
        <div className="userCard">
          <img className="userImg" alt="" src={Img} />
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
