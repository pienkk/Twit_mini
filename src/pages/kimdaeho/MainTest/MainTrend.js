import React from 'react';
import { useEffect, useState } from 'react';
import TrendModal from './TrendModal';
import './MainTrend.scss';

function MainTrend() {
  useEffect(() => {
    fetch('/data/trend.json')
      .then(Response => Response.json())
      .then(result => setTrendData(result));
  }, []);

  const [trerndData, setTrendData] = useState([]);

  const [suchModal, setSuchModal] = useState(false);

  return (
    <div className="MainRight">
      <div className="MainTrend">
        <div className="TrendSuch">
          <input
            className="SuchInput"
            placeholder="트위터 검색"
            onClick={() => {
              setSuchModal(true);
            }}
          />
        </div>
        {suchModal === true ? <TrendModal /> : null}
        <div className="TrendFeed">
          <h3>나를 위한 트랜드</h3>
          {trerndData.map(item => {
            return (
              <div className="FeedBox" key={item.id}>
                <p>
                  {item.category}에서 트랜드 중
                  <span>
                    <a href="#!">...</a>
                  </span>
                </p>
                <a href="#!">{item.topic}</a>
                <p>{item.twitLength}트윗</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainTrend;
