import React, { useState } from 'react';
import './TrendModal.scss';
import { useEffect } from 'react';

import UserInfoCard from './userInfoCard';
function TrendModal({ handleModal, userInput }) {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    fetch('http://pienk.ddns.net:3000/main/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ text: userInput }),
    })
      .then(Response => Response.json())
      .then(result => setSearchData(result.result));
  }, [userInput]);

  return (
    <div>
      <div className="trendModalBack" onClick={handleModal}></div>
      <div className="trendMoalWrap">
        <div className="ModalPage">
          {userInput.length == 0 ? (
            <p>사용자, 화제, 키워드를 검색해보세요</p>
          ) : (
            <>
              {searchData &&
                searchData.map(user => {
                  return (
                    <UserInfoCard
                      Img={user.profile_image}
                      userId={user.profile_id}
                      nickname={user.profile_nickname}
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
