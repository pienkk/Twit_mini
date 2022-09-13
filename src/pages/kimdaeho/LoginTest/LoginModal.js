import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LoginModal.scss';

function LoginModal() {
  const [userInput, setUserInput] = useState({
    userId: '',
    userPw: '',
  });

  const { userId, userPw } = userInput;

  const LoginInput = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  // const [userInfo, setUserInfo] = useState([]);

  // useEffect(() => {
  //   fetch("/data/login.json")
  //     .then((response) => response.json())
  //     .then((result) => setUserInfo(result));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("/data/login.json")
  //     .then((response) => setUserInfo(response.data));
  // }, []);

  let LoginBtn = () => {
    fetch('http://10.58.0.28:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: userId, password: userPw }),
    })
      .then(response => response.json())
      .then(result => {
        try {
          if (result.message === 'login success') {
            console.log('로그인 정보가 일치합니다');
          } else {
            console.log('로그인 정보가 다릅니다');
          }
        } catch (error) {
          console.error(error);
        }
      });

    // try {
    //   if (userInfo.email === userIdo && userInf.password === userPw) {
    //     console.log("그인 정보가 일치합니다");
    //   } else {
    //     console.log("로그인 정보가 다릅니다");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  let SignUpBtn = () => {
    axios
      .post('http://10.58.0.28:3000/auth/signup', {
        email: userId,
        password: userPw,
      })
      .then(response => console.log('회원가입테스트', response.data));

    // try {
    //   if (userInfo[0].email === userId && userInfo[0].password === userPw) {
    //     console.log("로그인 정보가 일치합니다");
    //   } else {
    //     console.log("로그인 정보가 다릅니다");
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
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
        <button onClick={LoginBtn}>로그인</button>
        <button onClick={SignUpBtn}>회원가입</button>
        <p>
          계정이 없으신가요?
          <span>
            <a href="#!">가입하기</a>
          </span>
        </p>
      </div>
    </>
  );
}

export default LoginModal;
