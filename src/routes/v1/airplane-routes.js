const express = require("express");
const { AirplaneMiddlewares } = require("../../middlewares");
const { AirplaneController } = require("../../controllers");
const router = express.Router();

// /api/v1/airplanes - POST
router.post(
  "/",
  AirplaneMiddlewares.validateRequest,
  AirplaneController.createAirplane
);

// /api/v1/airplanes - GET
router.get("/", AirplaneController.getAirplanes);

// /api/v1/airplanes/:id - GET
router.get("/:id", AirplaneController.getAirplane);

// /api/v1/airplanes/:id - DELETE
router.delete("/:id", AirplaneController.deleteAirplane);

module.exports = router;
