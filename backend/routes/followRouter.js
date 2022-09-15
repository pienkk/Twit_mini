const express = require("express");
const router = express.Router();

const {followController} = require("../controllers");


router.post("/:profileId", followController.followUp);
router.delete("/:profileId", followController.followDown);



module.exports = router