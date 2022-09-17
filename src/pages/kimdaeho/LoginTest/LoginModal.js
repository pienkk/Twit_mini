import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginModal.scss';

function LoginModal() {
  const [userInput, setUserInput] = useState({
    userId: '',
    userPw: '',
  });

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };

  const { userId, userPw } = userInput;

  const LoginInput = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  let LoginBtn = () => {
    fetch('http://pienk.ddns.net:3000/user/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ user_id: userId, password: userPw }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.accessToken) {
          console.log(result);
          localStorage.setItem('token', result.accessToken);
          localStorage.setItem('userId', result.userId);
          localStorage.setItem('userNickname', result.userNickname);
          localStorage.setItem('userProfileImg', result.userProfileImg);
          goToMain();
        } else {
          console.log('error');
        }
      });
  };

  return (
    <div>
      <div className="LoginModalBody">
        <img src="./images/logo.png" alt="LoginMdalImg" />
        <input
          className="LoginInput"
          value={userId}
          name="userId"
          onChange={LoginInput}
          type="text"
          placeholder="휴대폰번호, 이메일주소 또는 사용자 아이디"
        />
        <input
          className="PwInput"
          value={userPw}
          name="userPw"
          onChange={LoginInput}
          type="password"
          placeholder="패스워드"
        />
        <button className="NextBtn" onClick={LoginBtn}>
          다음
        </button>
        <button className="PasswordBtn">비밀번호를 잊으셨나요?</button>
        {/* <button onClick={SignUpBtn}>회원가입</button> */}
        <p>
          계정이 없으신가요?
          <span>
            <a href="#!">가입하기</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
