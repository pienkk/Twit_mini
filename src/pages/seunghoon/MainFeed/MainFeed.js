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

  console.log(feeds);

  // useEffect(() => {
  //   fetch('http://10.58.0.33:3000/main', {
  //     method: 'GET',
  //     headers: {
  //       authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjMxOTk5NTV9.0iucwihABtSuKh08YuuRPR2H0S7I8hCg2P3uzmmLjv4',
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setFeeds(data);
  //     });
  // }, []);

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

    // fetch('http://10.58.0.49:3000/profile/test', {
    //   method: 'POST',
    //   headers: {
    //     enctype: 'multipart/form-data',
    //   },
    //   body: new FormData(twitForm),
    // }).then(response => console.log(response));
    // // .then(data => console.log(data));

    const submitData = {
      id: 0,
      nickname: 'currentUserNickName',
      user_id: 'currentUserId',
      profileImg: 'currentUserProfileImg',
      time: 'now',
      content: textValue,
      content_img: imgValue,
      likeEx: 0,
      likeCount: 0,
      create_at: 'now',
    };

    feeds.unshift(submitData);
    setFeeds([...feeds]);
  };

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
