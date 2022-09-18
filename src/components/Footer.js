import React from 'react';
import './Footer.scss';

function Footer() {
  if (
    window.location.pathname === './main' &&
    window.location.pathname === './Main'
  )
    return null;
  return (
    <div>
      <ul className="FooterList">
        <li>소개</li>
        <li>고객센터</li>
        <li>이용약관</li>
        <li>개인정보 처리방침</li>
        <li>쿠키 정책</li>
        <li>접근성</li>
        <li>광고 정보</li>
        <li>블로그</li>
        <li>상태</li>
        <li>채용</li>
        <li>브랜드 리소스</li>
        <li>광고</li>
        <li>마케팅</li>
        <li>비즈니스용</li>
        <li>개발자</li>
        <li>디렉터리</li>
        <li>설정</li>
        <li>© 2022 Twitter, Inc.</li>
      </ul>
    </div>
  );
}

export default Footer;
