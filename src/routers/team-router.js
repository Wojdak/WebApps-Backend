import * as teamController from "../controllers/team-controller.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());

router.get("/", teamController.getAllTeams);

router.get("/:id", teamController.getSpecificTeam);

router.post("/", teamController.addNewTeam);

router.put("/:id", teamController.updateTeam);

router.delete("/:id", teamController.deleteTeam);

export default router;
