// import React from 'react';
// import { useState, useEffect } from 'react';
// import RecommendedTopics from './RecommendedTopics';
// import ViewMore from './ViewMore';

// import './TopicsToFollow.scss';

// const TopicsToFollow = () => {
//   const [topic, setTopic] = useState([]);

//   useEffect(() => {
//     fetch('/data/profile.json')
//       .then(res => res.json())
//       .then(data => setTopic(...data));
//   }, []);
//   console.log(topic);

//   return (
//     <div className="TopicsToFollow">
//       <div className="recommend-title">팔로우 추천 토픽</div>
//       <span>
//         내가 팔로우하는 토픽과 관련된 트윗이 홈 타임라인에 표시됩니다.
//       </span>
//       <div className="recommended-topic-list">
//         {/* {topic.topic.map(e => (
//           <RecommendedTopics item={e} />
//         ))} */}
//       </div>
//       <ViewMore value="다른 토픽" />
//     </div>
//   );
// };

// export default TopicsToFollow;
