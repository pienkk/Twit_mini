const express = require("express");
const router = express.Router();

const {dmController} = require("../controllers");

router.get("/", dmController.dmList);
router.get("/:profileId", dmController.showDm);
router.post("/:profileId", dmController.postDm);
router.delete("/:dmId", dmController.deleteDm)


module.exports = router