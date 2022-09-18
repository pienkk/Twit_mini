import React, { useState } from 'react';
import MoreLookModal from './moreLookModal';

import ModalPortal from '../seunghoon/MainFeed/Portal';

function MoreLook() {
  const [modal, setModal] = useState(false);

  const modalBackClick = () => {
    setModal(false);
  };
  return (
    <>
      <div
        onClick={() => {
          setModal(true);
        }}
        className="categories"
      >
        <img src="./moreicon.png" />
        <span className="categoriesWord">더보기</span>
      </div>
      <ModalPortal>
        {modal && <MoreLookModal modalBackClick={modalBackClick} />}
      </ModalPortal>
    </>
  );
}

export default MoreLook;
