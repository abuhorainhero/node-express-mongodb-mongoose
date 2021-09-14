const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const signUp = async (req, res, next) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const user = User.create({
      ...req.body,
      password: hashPassword,
    });

    if (!user) {
      next(`Something wang wrong!`);
    }

    res.status(200).json({
      message: `User create Successfully!`,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      next(401, `Authentication Failed!`);
    }

    const token = await jwt.sign(
      {
        userName: user.userName,
        userId: user._id,
      },
      process.env.SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

    res.status(200).json({
      accessToken: token,
      message: `Login Successfully!`,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const user = await User.find({})
      .populate("products", "product type")
      .select({ password: 0 });

    res.status(200).json({
      data: user,
      message: `Get Successfully`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUp,
  login,
  getAll,
};
