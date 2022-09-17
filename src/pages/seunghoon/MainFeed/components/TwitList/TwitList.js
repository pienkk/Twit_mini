import React from 'react';
import TwitElement from './components/TwitElement';

function TwitList({
  feeds,
  commentHandler,
  reTwitHandler,
  accessToken,
  userProfileImg,
  inputImg,
}) {
  console.log('피드스', feeds);
  return feeds.map(feed => {
    return (
      <TwitElement
        userProfileImg={userProfileImg}
        key={Math.random()}
        feed={feed}
        commentHandler={commentHandler}
        reTwitHandler={reTwitHandler}
        isModal={false}
        accessToken={accessToken}
        inputImg={inputImg}
      />
    );
  });
}

export default TwitList;
