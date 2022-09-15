const { tweetDao } = require("../models");
const { userDao } = require("../models");
const { likeDao } = require("../models");
const { mainDao } = require("../models");

const mainFeed = async (user_id) => {
  let mainFeed = await mainDao.mainFeed(user_id);
  for (i in mainFeed) {
    if (user_id == mainFeed[i].like) {
      mainFeed[i].likeEx = 1;
    } else {
      mainFeed[i].likeEx = 0;
    }
  }
  //// FROM users -> LEFT JOIN tweet ->likes를 통해 모든 외부결합경우를 가져온뒤 토큰의 유저아이디가 좋아요를 누른 글을 likeEx로 표시

  let likeCount = {};
  for (j in mainFeed) {
    let x = mainFeed[j].id;
    if (likeCount[x]) {
      likeCount[x] = likeCount[x] + 1;
    } else {
      likeCount[x] = 0 + 1;
    }
  }

  ////해당id를 가진 객체의 개수를 likeCount객체로 반환하여 좋아요 개수를 산정

  for (k in mainFeed) {
    countId = mainFeed[k].id;
    if ( mainFeed[k].like !== null){
    mainFeed[k].likeCount = likeCount[countId]
    }
    else {mainFeed[k].likeCount=0}
  }
;
  ////각 객체의 id를 참조하여 likeCount키를 만들어 likeCount를 밸류로 넣어줌

 

  // let result = mainFeed.filter(
  //   (mainFeed) =>
  //     (mainFeed.id != null)
  // );
let result =[];

for(i in mainFeed) {
  if (mainFeed[i].like==null || mainFeed[i].likeEx==1 ) {
    result.push(mainFeed[i])
  }
}
//정제된 메인피드에서 like중복값이 존재하지않는 null과 요청한 유저가 추천한 글만 먼저 result로


let AA = mainFeed.filter(mainFeed => mainFeed.like !== null && mainFeed.likeEx == 0)
let [feedFilter] = AA.filter(
  (arr, index, callback) => index === callback.findIndex(t => t.id === arr.id)
);
result.push(feedFilter)
//AA에서 메인피드에서 result로 보낸 값들을 필터링한뒤, feedFilter에서 id중복값들을 1개씩만 남기고 제거 후 result로 푸쉬

  // console.log(result);
  return result;
};

module.exports = { mainFeed };
