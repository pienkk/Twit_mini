import React, { useEffect } from 'react';
import TwitInput from './components/TwitInput';
import TwitElement from './components/TwitList/components/TwitElement';
import './Modal.scss';

function Modal({ commentHandler, feedForModal }) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top:-${window.scrollY}px;
      overflow-y: scroll;
      width: 100%
    `;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY, 10) * -1);
    };
  });

  console.log(feedForModal);

  return (
    <div className="modalContainer" onClick={commentHandler}>
      <div className="commentModal">
        <TwitElement feed={feedForModal} isModal={true} />
        <div className="replyingTo">
          Replying to <span className="userId">{feedForModal.userid}</span>
        </div>
        <TwitInput isModal={true} />
      </div>
    </div>
  );
}

export default Modal;
