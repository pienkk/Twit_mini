const jwt = require("jsonwebtoken");

const accessToken = async (req, res, next) => {
  try {
    const token = await req.headers.authorization;
    const access = jwt.verify(token, process.env.JWT_SECRET);

    if (access) {
      const userId = await access.userId;
      req.body.userId = await userId;
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
