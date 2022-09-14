import React from 'react';
import './overay.scss';
function Overay({ setModal }) {
  return (
    <div
      className="overlay"
      onClick={() => {
        setModal(false);
      }}
    ></div>
  );
}

export default Overay;
