const jwt = require("jsonwebtoken");

const checkLogin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.SECRET);
    const { userName, userId } = decoded;
    req.userName = userName;
    req.userId = userId;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = checkLogin;
