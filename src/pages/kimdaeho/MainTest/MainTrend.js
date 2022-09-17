import React from 'react';
import { useEffect, useState } from 'react';
import TrendModal from './TrendModal';
import ModalPortal from '../../seunghoon/MainFeed/Portal';
import './MainTrend.scss';

function MainTrend() {
  // useEffect(() => {
  //   fetch('http://10.58.3.34:3000/tweet/side')
  //     .then(Response => Response.json())
  //     .then(result => setTrendData(result.result));
  // }, []);

  useEffect(() => {
    fetch('/data/main.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
      });
  }, []);
  const [userInfo, setUserInfo] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [userInput, setUserInput] = useState('');
  console.log(trendData);
  const updateUserinput = e => {
    setUserInput(e.target.value);
  };

  const [suchModal, setSuchModal] = useState(false);
  const handleModal = () => {
    setSuchModal(false);
  };

  const sortedPeople = userInfo.filter(user => {
    return user.nickname.toLowerCase().includes(userInput);
  });

  let i = 0;

  return (
    <div className="MainRight">
      <div className="MainTrend">
        <div className="TrendSearch">
          <input
            className="SearchInput"
            placeholder="트위터 검색"
            onChange={updateUserinput}
            onClick={() => {
              setSuchModal(true);
            }}
          />
        </div>
        <ModalPortal>
          {suchModal && (
            <TrendModal
              userInfo={sortedPeople}
              userInput={userInput}
              setUserInfo={setUserInfo}
              handleModal={handleModal}
            />
          )}
        </ModalPortal>

        <div className="TrendFeed">
          <h3>나를 위한 트랜드</h3>
          {trendData.map(item => {
            i++;
            if (i <= 5) {
              return (
                <div className="FeedBox" key={item.id}>
                  <p>
                    {/* {item.category}에서 트랜드 중 */}
                    <span>
                      <a href="#!">...</a>
                    </span>
                  </p>
                  <a href="#!">{item.tag}</a>
                  <p>{item.count}트윗</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default MainTrend;
