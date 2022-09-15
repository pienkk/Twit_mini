import React, { useState } from 'react';
import Modal from '../seunghoon/MainFeed/Modal';
import ModalPortal from '../seunghoon/MainFeed/Portal';

function TwitModal() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(false);
  };
  return (
    <>
      <div
        onClick={() => {
          setModal(true);
        }}
        className="twit"
      >
        트윗하기
      </div>
      <ModalPortal>{modal && <Modal />}</ModalPortal>
    </>
  );
}

export default TwitModal;
