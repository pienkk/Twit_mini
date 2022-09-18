import React, { useState } from 'react';
import Modal from '../seunghoon/MainFeed/Modal';
import ModalPortal from '../seunghoon/MainFeed/Portal';
function TwitModal() {
  const [modal, setModal] = useState(false);
  const handleModal = event => {
    if (modal === false) {
      setModal(true);
    }
    if (event.target.className === 'modalContainer') {
      setModal(false);
    }
  };
  return (
    <div onClick={handleModal}>
      <div className="twit">트윗하기</div>
      <ModalPortal>{modal && <Modal isComment={false} />}</ModalPortal>
    </div>
  );
}
export default TwitModal;
