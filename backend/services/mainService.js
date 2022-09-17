const { tweetDao } = require("../models");
const { userDao } = require("../models");
const { likeDao } = require("../models");
const { mainDao } = require("../models");

const mainFeed = async (user_id) => {
  let mf = await mainDao.mainFeed(user_id);
  let replyCount = await mainDao.replyCount(user_id);
  let likeCount = await mainDao.likeCount(user_id);
  let rtCount = await mainDao.rtCount(user_id)
  let rc = [];
  let lc = [];
  let rt = [];
  ///////////////////////

  ///////////////////////
  for (i in mf) {
    if (mf[i].rtEx == null) {
      mf[i].rtEx = 0;
    } else {
      mf[i].rtEx = 1;
    }
  }
  ///////////////////////
  for (i in replyCount) {
    rc.push(replyCount[i].id);
  }

  const reply = rc.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});

  for (i in mf) {
    id = mf[i].id;
    if (reply[id] !== undefined) {
      mf[i].replyCount = reply[id];
    } else {
      mf[i].replyCount = 0;
    }
  }
  ///////////////////////
  for (i in likeCount) {
    lc.push(likeCount[i].id);
  }
  const like = lc.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});

  for (i in mf) {
    id = mf[i].id;
    if (like[id] !== undefined) {
      mf[i].likeCount = like[id];
    } else {
      mf[i].likeCount = 0;
    }
  }
  //////////////
  for (i in mf) {
    if (mf[i].likeEx == null) {
      mf[i].likeEx = 0;
    } else {
      mf[i].likeEx = 1;
    }
  }
  ///////////////////////
  for (i in rtCount) {
    rt.push(rtCount[i].id);
  }

  const rtw = rt.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});

  for (i in mf) {
    id = mf[i].id;
    if (rtw[id] !== undefined) {
      mf[i].rtCount = rtw[id];
    } else {
      mf[i].rtCount = 0;
    }
  }
  return await mf;
};

const mainSearch = async (text) => {
  const findId = mainDao.findId(text);
  // const findTweets = mainDao.findTweets(text);
  return findId
}


module.exports = { mainFeed ,mainSearch};
