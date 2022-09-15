import React, { useEffect, useState } from 'react';
import ModalPortal from './Portal';
import Modal from './Modal';
import TwitHome from './components/TwitHome';
import TwitInput from './components/TwitInput';
import TwitList from './components/TwitList/TwitList';
import './Mainfeed.scss';

const MainFeed = () => {
  const [feeds, setFeeds] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [feedForModal, setFeedForModal] = useState({});

  useEffect(() => {
    fetch('./data/main.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFeeds(data);
      });
  }, []);

  const commentHandler = event => {
    if (modalOn === false) {
      const selectedTwitId = event.nativeEvent.path[4].id;
      const ModalInputFeed = feeds[selectedTwitId - 1];
      setModalOn(true);
      setFeedForModal({ ...ModalInputFeed });
    }
    if (event.target.className === 'modalContainer') {
      setFeedForModal({});
      setModalOn(false);
    }
  };

  const twitSubmit = event => {
    console.log(event);
  };

  const reTwitHandler = event => {
    const id = event.nativeEvent.path[4].id;
    fetch('주소주소', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        twitId: { id },
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const likeHandler = event => {
    const id = event.nativeEvent.path[4].id;
    console.log(id);
    fetch('주소주소', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        twitId: { id },
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div className="mainFeed">
      <TwitHome />
      <TwitInput isModal={false} />
      <div className="twitFeeds">
        <TwitList
          feeds={feeds}
          commentHandler={commentHandler}
          reTwitHandler={reTwitHandler}
          likeHandler={likeHandler}
        />
      </div>
      <ModalPortal>
        {modalOn && (
          <Modal commentHandler={commentHandler} feedForModal={feedForModal} />
        )}
      </ModalPortal>
    </div>
  );
};

export default MainFeed;
