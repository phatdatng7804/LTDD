const createError = require("http-errors");

const badRequest = (err, res) => {
  const error = createError.BadRequest(err);
  return res.status(error.status || 400).json({
    err: 1,
    message: error.message || "Bad Request",
  });
};

// Internal Server Error (500)
const internalServerError = (err, res) => {
  const error = createError.InternalServerError(err);
  return res.status(error.status || 500).json({
    err: 1,
    message: error.message || "Internal Server Error",
  });
};

// Not Found Error (404)
const notFound = (err, res) => {
  const error = createError.NotFound(err);
  return res.status(error.status || 404).json({
    err: 1,
    message: error.message || "Not Found",
  });
};
module.exports = {
  badRequest,
  internalServerError,
  notFound,
};
