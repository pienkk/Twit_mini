import React, { useRef } from 'react';

function TwitInput({ isModal, twitSubmit, imgImport, userProfileImg }) {
  return (
    <form className="twitInput" onSubmit={twitSubmit} id="twitForm">
      <div className="writerProfileImg">
        <img src={userProfileImg} alt="프로필이미지" />
      </div>
      <div className="inputContent">
        <div className="inputText">
          <input
            type="text"
            placeholder={
              isModal === true ? 'Tweet Your reply' : `What's happening?`
            }
            name="text"
          />
        </div>
        <div className="inputFooter">
          <div className="uploadContents">
            <div className="uploadImg">
              <img
                src="./images/image.png"
                alt="업로드이미지"
                onClick={imgImport}
              />
              <input
                type="file"
                className="inputForImg"
                onClick={event => console.log(event)}
                id="imgImportInput"
                name="image"
              />
            </div>

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
          <button className="twitBtn">
            <div>{isModal === true ? 'Reply' : 'Tweet'}</div>
          </button>
        </div>
      </div>
    </form>
  );
}

export default TwitInput;
