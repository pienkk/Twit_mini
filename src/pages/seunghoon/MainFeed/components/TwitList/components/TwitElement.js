import React, { useState } from 'react';

function TwitElement({
  feed: {
    id,
    nickname,
    user_id,
    profileImg,
    time,
    content,
    content_img,
    likeEx,
    likeCount,
    create_at,
  },
  commentHandler,
  isModal,
  reTwitHandler,
}) {
  const [likeStatus, setLikeStatus] = useState(likeEx);

  const likeHandler = event => {
    fetch('http://10.58.0.33:3000/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjMxOTk5NTV9.0iucwihABtSuKh08YuuRPR2H0S7I8hCg2P3uzmmLjv4',
      },
      body: JSON.stringify({
        tweet_id: id,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));

    setLikeStatus(likeStatus === 0 ? 1 : 0);
    console.log(likeStatus);
  };

  return (
    <div className="twitList" id={id}>
      <div className="profileImg">
        <img src={profileImg} />
      </div>
      <div className="twitContent">
        <div className="userInfo">
          <div className="nickname">{nickname}</div>
          <div className="userid">{user_id} ·</div>
          <div className="time">{create_at}</div>
        </div>
        <div className="twitText">{content}</div>

        {!isModal && (
          <>
            {content_img === '' ? null : (
              <div className="twitImg">
                <img src={content_img} />
              </div>
            )}

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
                  onClick={reTwitHandler}
                />
                <div className="retweetCount">10</div>
              </div>

              <div className="like" onClick={likeHandler}>
                {likeStatus === 1 ? (
                  <img
                    className="like"
                    src="./images/like.png"
                    alt="좋아요누른후이미지"
                  />
                ) : (
                  <img
                    className="unlike"
                    src="./images/dislike.png"
                    alt="좋아요누르기전이미지"
                  />
                )}
                <div className="likeCount">{likeCount}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TwitElement;
