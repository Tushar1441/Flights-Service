const express = require("express");
const { CityMiddlewares } = require("../../middlewares");
const { CityController } = require("../../controllers");
const router = express.Router();

// /api/v1/cities - POST
router.post("/", CityMiddlewares.validateRequest, CityController.createCity);

module.exports = router;
