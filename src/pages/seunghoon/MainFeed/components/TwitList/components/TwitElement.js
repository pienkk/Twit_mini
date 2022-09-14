import React from 'react';

function TwitElement({
  feed: { id, nickname, userid, profileImg, time, twit, twitImg },
  commentHandler,
  isModal,
}) {
  return (
    <div className="twitList" id={id}>
      <div className="profileImg">
        <img src={profileImg} />
      </div>
      <div className="twitContent">
        <div className="userInfo">
          <div className="nickname">{nickname}</div>
          <div className="userid">{userid} ·</div>
          <div className="time">{time}</div>
        </div>
        <div className="twit">{twit}</div>

        {!isModal && (
          <>
            <div className="twitImg">
              <img src={twitImg} />
            </div>
            <div className="twitFooter">
              <div className="comment">
                <img
                  className="commentImg"
                  src="./images/comment.png"
                  alt="댓글이미지"
                  onClick={commentHandler}
                />
                <div className="commentCount" onClick={commentHandler}>
                  10
                </div>
              </div>

              <div className="retweet">
                <img
                  className="retweetImg"
                  src="./images/retweet.png"
                  alt="리트윗이미지"
                />
                <div className="retweetCount">10</div>
              </div>

              <div className="like">
                <img
                  className="unlike"
                  src="./images/dislike.png"
                  alt="좋아요누르기전이미지"
                />
                <img
                  className="like hidden"
                  src="./images/like.png"
                  alt="좋아요누른후이미지"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TwitElement;
