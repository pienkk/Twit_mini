const { mainService } = require("../services");
const asyncWrap = require("../middleware/async-wrap");

const mainFeed = asyncWrap(async (req, res) => {
    let mainFeed = ({
      user_id    
    } = req.body);
  
    if (!user_id ) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }
    
    
    let mainData = await mainService.mainFeed(
      user_id
     
    );
     await res.status(201).json({ message: "오늘 백엔드 영업 종료합니다" });
  });

  module.exports = { mainFeed };

