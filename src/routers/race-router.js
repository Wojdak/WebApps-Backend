import * as raceController from "../controllers/race-controller.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());

router.get("/", raceController.getAllRaces);

router.get("/:id", raceController.getSpecificRace);

router.post("/", raceController.addNewRace);

router.put("/:id", raceController.updateRace);

router.delete("/:id", raceController.deleteRace);

export default router;
