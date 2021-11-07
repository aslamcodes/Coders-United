const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
  next();
};

module.exports = {
  notFound,
  errorHandler,
};
