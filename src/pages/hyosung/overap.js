import React from 'react';
import './overap.scss';
function Overap({ setModal }) {
  return (
    <div
      className="overlap"
      onClick={() => {
        setModal(false);
      }}
    ></div>
  );
}

export default Overap;
