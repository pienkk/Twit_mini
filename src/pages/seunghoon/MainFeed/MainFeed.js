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

  const imgInput = document.getElementById('imgImportInput');
  const twitForm = document.getElementById('twitForm');
  const accessToken = localStorage.getItem('token');

  console.log(feeds);
  useEffect(() => {
    fetch('http://10.58.0.33:3000/main', {
      method: 'GET',
      headers: {
        authorization: accessToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        setFeeds(data);
      });
  }, []);

  const imgImport = event => {
    imgInput.click();
  };

  const twitSubmit = event => {
    event.preventDefault();

    console.log(feeds);

    const textValue = event.target[0].value;
    const imgValue = event.target[1].value;

    console.log(textValue);
    console.log(imgValue);

    fetch('http://10.58.0.33:3000/tweet', {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        authorization: accessToken,
      },
      body: new FormData(twitForm),
    }).then(response => console.log(response));
    // .then(data => console.log(data));

    const submitData = {
      content: textValue,
      content_img: imgValue,
      id: 999999,
      likeCount: 0,
      likeEx: 0,
      profile_id: 'currentUserId',
      profile_nickname: 'currentUserNickName',
      profile_img: '',
      replyCount: 0,
      replyTF: 0,
      rtCount: 0,
      create_at: 'now',
    };

    feeds.unshift(submitData);
    setFeeds([...feeds]);
  };

  const commentHandler = event => {
    if (modalOn === false) {
      const selectedTwitId = event.nativeEvent.path[4].id;
      let ModalInputFeed = [];
      feeds.map(feed => {
        if (feed.id === Number(selectedTwitId)) ModalInputFeed = feed;
      });
      setModalOn(true);
      setFeedForModal({ ...ModalInputFeed });
    }
    if (event.target.className === 'modalContainer') {
      setFeedForModal({});
      setModalOn(false);
    }
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
  return (
    <div className="mainFeed">
      <TwitHome />
      <TwitInput
        isModal={false}
        feeds={feeds}
        setFeeds={setFeeds}
        twitSubmit={twitSubmit}
        imgImport={imgImport}
      />
      <div className="twitFeeds">
        <TwitList
          feeds={feeds}
          commentHandler={commentHandler}
          reTwitHandler={reTwitHandler}
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
