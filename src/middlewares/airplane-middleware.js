const { StatusCodes } = require("http-status-codes");
const { error } = require("winston");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating airplane";

    ErrorResponse.error = new AppError(
      ["Model Number not found in the incoming request in correct form"],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

function validateUpdateRequest(req, res, next) {
  if (!req.body.capacity) {
    ErrorResponse.message = "Something went wrong while updating airplane capacity";

    ErrorResponse.error = new AppError(
      ["Airplane Capacity not found in the incoming request in correct form"],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}

module.exports = {
  validateRequest,
  validateUpdateRequest,
};
