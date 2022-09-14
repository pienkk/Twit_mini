const { tweetDao } = require("../models");
const { userDao } = require("../models");
const { likeDao } = require("../models");
const { mainDao } = require("../models")

  const mainFeed = async (user_id) => {
    
    
    
    let mainFeed = await mainDao.mainFeed(user_id);
    




  };
  

  module.exports = { mainFeed }