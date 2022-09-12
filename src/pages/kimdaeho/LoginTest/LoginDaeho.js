import React, { useState } from "react";
import LoginInfo from "./LoginInfo";
import "./LoginDaeho.scss";
import LoginModal from "./LoginModal";

function LoginDaeho() {
  const [loginModal, setLoginModal] = useState(false);

  const ModalOpen = () => {
    setLoginModal(!loginModal);
  };

  return (
    <>
      <div className="LoginBody">
        <div className="LoginVisual">
          <img
            className="LoginMainImg"
            src="./images/LoginMain.png"
            alt="Login-Main-Img"
          />
        </div>

        <div className="LoginText">
          <img className="Logo" src="./images/logo.png" alt="파랑새 이미지" />
          <h1>지금 일어나고 있는 일</h1>
          <h2>오늘 트위터에 가입하세요.</h2>
          <LoginInfo ModalOpen={ModalOpen} />
          {loginModal && <LoginModal />}
        </div>
      </div>
    </>
  );
}

export default LoginDaeho;
