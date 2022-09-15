import React from 'react';

function TwitInput({ isModal }) {
  return (
    <article className="twitInput">
      <div className="writerProfileImg">
        <img src="./images/boy.png" alt="프로필이미지" />
      </div>
      <div className="inputContent">
        <div className="inputText">
          <input
            type="text"
            placeholder={
              isModal === true ? 'Tweet Your reply' : `What's happening?`
            }
          />
        </div>
        <div className="inputFooter">
          <div className="uploadContents">
            <img
              className="uploadImg img"
              src="./images/image.png"
              alt="업로드이미지"
            />
            <img
              className="uploadGIF img"
              src="./images/gif.png"
              alt="업로드GIF"
            />
            <img
              className="uploadEmogi img"
              src="./images/smile.png"
              alt="업로드이모지"
            />
            <img
              className="uploadLocation img"
              src="./images/location.png"
              alt="업로드위치"
            />
          </div>
          <div className="twitBtn">
            <div>{isModal === true ? 'Reply' : 'Tweet'}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TwitInput;
