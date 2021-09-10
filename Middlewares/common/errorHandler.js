const createError = require("http-errors");

// 404 not found error handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, `Your Requested Content was not Found!`));
};

// Default Error Handler
const errorHandler = (err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { messageF: err.message };
  res.status(err.status || 500).json(res.locals.error);
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
