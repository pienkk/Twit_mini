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
    res.status(201).json(mainData);
  });

const mainSearch = asyncWrap(async (req, res) => {
  const {text} = req.body;
  if( !text ) {
    const err = new Error("KEY_ERROR");
    err.statusCode = 400;
    throw err
  }
  const result = await mainService.mainSearch(text)
  res.status(200).json({})
})

  module.exports = { mainFeed, mainSearch };

