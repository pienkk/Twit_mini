const { mainService } = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const mainFeed = asyncWrap(async (req, res) => {
    let mainFeed = ({
      user_id    
    } = req.body);
  
    if (!user_id ) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }
    await mainService.mainFeed(
      user_id
     
    );
    res.status(201).json({ message: "likeCreated" });
  });

  module.exports = { mainFeed };

