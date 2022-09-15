import React from 'react';
import './LoginInfo.scss';

function LoginInfo({ LoginModalOpen }) {
  return (
    <div>
      <div className="LoginMain">
        <div className="LoginGmail group">
          <a href="#!">
            <img
              className="LoginImg1"
              src="./images/free-icon-spark-5436977.png"
              alt="img"
            />
            <div className="Login-intro">
              <p>
                <span>대호(으)로 로그인</span>
              </p>
              <p>eogh773@gmail.com</p>
            </div>
            <img
              className="LoginImg2"
              src="./images/free-icon-google-plus-3661396.png"
              alt="img"
            />
          </a>
        </div>
        <div className="JoinApple group">
          <a href="#!">
            <img src="./images/apple-logo.png" alt="img" />
            <p>Apple에서 가입하기</p>
          </a>
        </div>
        <p className="CenterLine">또는</p>
        <div className="OtherJoin group">
          <a href="#!">휴대폰 번호나 이메일 주소로 가입하기</a>
        </div>
        <p className="Explanation">
          가입하시려면 <span>쿠키 사용</span>을 포함해 <span>이용약관</span>과{' '}
          <span>개인1정보 처리방침</span>에 동의해야 합니다.
        </p>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <div className="group">
          <a className="LoginBtn" href="#!" onClick={LoginModalOpen}>
            로그인
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginInfo;
