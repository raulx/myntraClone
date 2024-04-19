const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  // if mongoose not found error, set 404 and change error message
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not Found";
  }
  // if duplicate key error ,set 409 and change error message
  else if (err.name === "MongoServerError" && err.code === 11000) {
    statusCode = 409;
    message = "Data already exits";
  } else if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Bad Request";
  }
  res.status(statusCode).json({
    message: message,
    status: statusCode,
  });
};
export default errorHandler;
