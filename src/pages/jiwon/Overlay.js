import React from 'react';
import './Overlay.scss';

const Overlay = ({ setProfileEditClicked }) => {
  return (
    <div
      className="overlay"
      onClick={() => {
        setProfileEditClicked(false);
      }}
    />
  );
};

export default Overlay;
