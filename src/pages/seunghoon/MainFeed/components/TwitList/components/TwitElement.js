import React, { useEffect, useState } from 'react';

function TwitElement({
  feed: {
    content,
    content_img,
    id,
    likeCount,
    likeEx,
    profile_id,
    profile_nickname,
    profile_image,
    replyCount,
    replyTF,
    rtCount,
    create_at,
  },
  commentHandler,
  isModal,
  reTwitHandler,
  accessToken,
  userProfileImg,
  inputImg,
}) {
  const [likeStatus, setLikeStatus] = useState(likeEx);
  const [likeCountState, setLikeCountState] = useState(likeCount);
  const curr = new Date(create_at);

  const likeHandler = event => {
    if (likeStatus === 0) {
      fetch('http://pienk.ddns.net:3000/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: accessToken,
        },
        body: JSON.stringify({
          tweet_id: id,
        }),
      })
        .then(response => response.json())
        .then(data => console.log('난 라이크', data));
      setLikeCountState(current => current + 1);
    } else if (likeStatus === 1) {
      fetch('http://pienk.ddns.net:3000/like', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: accessToken,
        },
        body: JSON.stringify({
          tweet_id: id,
        }),
      })
        .then(response => response.json())
        .then(data => console.log(data));
      setLikeCountState(current => (current = 0 ? 1 : 0));
    }
    setLikeStatus(likeStatus === 0 ? 1 : 0);
  };

  return (
    <div className="twitList" id={id}>
      <div className="profileImg">
        <img src={profile_image === null ? null : userProfileImg} />
      </div>
      <div className="twitContent">
        <div className="userInfo">
          <div className="nickname">{profile_nickname}</div>
          <div className="userid">{profile_id} ·</div>
          <div className="time">{curr.toLocaleString()}</div>
        </div>
        <div className="twitText">{content}</div>

        {!isModal && (
          <>
            {content_img === null ? null : (
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
                  {replyCount}
                </div>
              </div>

              <div className="retweet">
                <img
                  className="retweetImg"
                  src="./images/retweet.png"
                  alt="리트윗이미지"
                  onClick={reTwitHandler}
                />
                <div className="retweetCount">{rtCount}</div>
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
                <div className="likeCount">{likeCountState}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TwitElement;
