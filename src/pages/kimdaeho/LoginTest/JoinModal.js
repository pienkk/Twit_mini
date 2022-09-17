import React, { useEffect, useState } from 'react';
import './JoinModal.scss';

function JoinModal({ JoinModalClose }) {
  const [joinInput, setJoinInput] = useState({
    JoinUserNick: '',
    joinUserId: '',
    joinUserPw: '',
    joinYear: '',
    joinMonth: '',
    joinDay: '',
  });

  const { JoinUserNick, joinUserId, joinUserPw, joinYear, joinMonth, joinDay } =
    joinInput;

  const JoinValueInput = e => {
    setJoinInput({ ...joinInput, [e.target.name]: e.target.value });
  };

  const loginSuceess = () => {
    JoinModalClose(false);
    alert('회원가입 성공');
  };

  const JoinBtn = () => {
    fetch('http://pienk.ddns.net:3000/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        nickname: JoinUserNick,
        user_id: joinUserId,
        password: joinUserPw,
        birthday: joinYear + '-' + joinMonth + '-' + joinDay,
      }),
    })
      .then(Response => Response.json())
      .then(result =>
        result.message === 'userCreated'
          ? loginSuceess()
          : alert('이미 있는 계정이거나, 회원가입 양식이 틀렸습니다.')
      );
  };
  return (
    <div>
      <div>
        <div className="JoinModalBody">
          <img src="./images/logo.png" alt="LoginMdalImg" />
          <h4>계정을 생성하세요</h4>
          <input
            className="JoinNickInput"
            value={JoinUserNick}
            onChange={JoinValueInput}
            name="JoinUserNick"
            type="text"
            placeholder="닉네임"
          />
          <input
            className="JoinIdInput"
            value={joinUserId}
            onChange={JoinValueInput}
            name="joinUserId"
            type="text"
            placeholder="아이디"
          />
          <input
            className="JoinPwInput"
            value={joinUserPw}
            onChange={JoinValueInput}
            name="joinUserPw"
            type="password"
            placeholder="패스워드"
          />
          <span>
            <a href="#!">대신 이메일 사용하기</a>
          </span>
          <h5>생년월일</h5>
          <p>
            이 정보는 공개적으로 표사되지 않습니다. 비즈니스, 반려동물 등 계정
            주제에 상<br />
            관없이 나의 연령을 확인하세요.
          </p>
          <div className="JoinBirthday">
            <input
              value={joinYear}
              onChange={JoinValueInput}
              name="joinYear"
              type="text"
              placeholder="년"
            />
            <input
              value={joinMonth}
              onChange={JoinValueInput}
              name="joinMonth"
              type="text"
              placeholder="월"
            />
            <input
              value={joinDay}
              onChange={JoinValueInput}
              name="joinDay"
              type="text"
              placeholder="일"
            />
          </div>
          <button className="NextBtn" onClick={JoinBtn}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinModal;
