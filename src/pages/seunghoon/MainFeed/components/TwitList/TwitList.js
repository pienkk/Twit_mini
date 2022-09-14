import React from 'react';
import TwitElement from './components/TwitElement';

function TwitList({ feeds, commentHandler }) {
  return feeds.map(feed => {
    return (
      <TwitElement
        key={feed.id}
        feed={feed}
        commentHandler={commentHandler}
        isModal={false}
      />
    );
  });
}

export default TwitList;
