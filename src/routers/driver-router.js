import * as driverController from "../controllers/driver-controller.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());

router.get("/", driverController.getAllDrivers);

router.get("/:id", driverController.getSpecificDriver);

router.post("/", driverController.addNewDriver);

router.put("/:id", driverController.updateDriver);

router.delete("/:id", driverController.deleteDriver);

export default router;
