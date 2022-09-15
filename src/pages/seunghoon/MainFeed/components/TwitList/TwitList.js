import React from 'react';
import TwitElement from './components/TwitElement';

function TwitList({ feeds, commentHandler, reTwitHandler }) {
  return feeds.map(feed => {
    return (
      <TwitElement
        key={feed.id}
        feed={feed}
        commentHandler={commentHandler}
        reTwitHandler={reTwitHandler}
        isModal={false}
      />
    );
  });
}

export default TwitList;
