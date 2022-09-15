const multer = require("multer");

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file,done) {
            done(null, "uploads/")
        }
    })
})