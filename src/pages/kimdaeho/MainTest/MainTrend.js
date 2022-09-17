import React from 'react';
import { useEffect, useState } from 'react';
import TrendModal from './TrendModal';
import ModalPortal from '../../seunghoon/MainFeed/Portal';
import TrendForME from '../MainTest/trendForMe';
import './MainTrend.scss';

function MainTrend() {
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

  const [userInput, setUserInput] = useState('');

  const updateUserinput = e => {
    setUserInput(e.target.value);
  };

  const [suchModal, setSuchModal] = useState(false);
  const handleModal = () => {
    setSuchModal(false);
  };

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
            <TrendModal userInput={userInput} handleModal={handleModal} />
          )}
        </ModalPortal>
        <TrendForME />
      </div>
    </div>
  );
}

export default MainTrend;
