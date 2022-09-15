import React from 'react';

function MoreLookModal({ modalBackClick }) {
  return (
    <>
      <div className="moreLookBack" onClick={modalBackClick}></div>
      <div className="moreLookWrap">
        <div className="moreLookContent">토픽</div>
        <div className="moreLookContent">모멘트</div>
        <div className="moreLookContent">Twitter 서클</div>
        <div className="moreLookContent">뉴스레터</div>
        <div className="moreLookContent">프로페셔널용 트위터</div>
        <div className="moreLookContent">트위터 광고</div>
        <div className="moreLookContent">애널리틱스</div>
        <div className="moreLookContent">설정 및 개인정보</div>
        <div className="moreLookContent">고객센터</div>
        <div className="moreLookContent">화면</div>
        <div className="moreLookContent">키보드단축키</div>
      </div>
    </>
  );
}
export default MoreLookModal;
