const { tweetDao } = require("../models");
const { userDao } = require("../models");
const { likeDao } = require("../models");
const { mainDao } = require("../models");

const mainFeed = async (user_id) => {

  let mf = await mainDao.mainFeed(user_id)
  let replyCount = await mainDao.replyCount(user_id)
  let rc =[];
  for ( i in replyCount) {
    rc.push(replyCount[i].id); 
  }  
  
  const reply = rc.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
}, {})
 


  for (i in mf) {
    if (mf[i].likeEx == null) {
      mf[i].likeEx = 0
    }
    else {mf[i].likeEx=1}
  }

  // for (i in mf){
    
  //   id = mf[i].id 
  //   if reply[id] == undefined){
  //   mf[i].replyCount = reply[id]}
  //   else {mf[i].replyCount = 0}
  // }

  console.log(mf)
  
  
  return await result;  
};

module.exports = { mainFeed };
