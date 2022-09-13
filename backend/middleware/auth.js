const jwt = require("jsonwebtoken");

const accessToken = async (req, res, next) => {
  try {
    const token = await req.headers.authorization;
    const access = jwt.verify(token, process.env.KEY);

    if (access) {
      const user_id = await access.user_id;
      req.body.user_id = await user_id;
      console.log(req.body);
      return await next();
    }
  } catch (err) {
    console.log(err);
    return res
      .status(err.statusCode || 400)
      .json({ message: "DO_NOT_HAVE_TOKEN" });
  }
};

module.exports = { accessToken };
