import React from 'react';
import { useState, useEffect } from 'react';

function TrendForMe() {
  useEffect(() => {
    fetch('http://pienk.ddns.net:3000/tweet/side', {
      method: 'GET',
    })
      .then(Response => Response.json())
      .then(result => setTrendData(result.result));
  }, []);

  const [trendData, setTrendData] = useState([]);
  console.log('효효', trendData);
  let i = 0;
  return (
    <>
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
    </>
  );
}
export default TrendForMe;
