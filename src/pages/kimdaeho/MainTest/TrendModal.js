import React, { useState } from 'react';
import './TrendModal.scss';
import { useEffect } from 'react';

import UserInfoCard from './userInfoCard';
function TrendModal({ handleModal, userInput, userInfo }) {
  const [search, setSearch] = useState([]);

  return (
    <div>
      <div className="trendModalBack" onClick={handleModal}></div>
      <div className="trendMoalWrap">
        <div className="ModalPage">
          {userInput.length == 0 ? (
            <p>사용자, 화제, 키워드를 검색해보세요</p>
          ) : (
            <>
              {userInfo.map(user => {
                return (
                  <UserInfoCard
                    nickname={user.nickname}
                    id={user.id}
                    userId={user.userid}
                    profileImg={user.profileImg}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrendModal;
