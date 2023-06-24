import * as db from '../../database/database-helper.js';
import {StatusCodes} from "http-status-codes";

export function getAllDrivers(req, res) {
  const { nationality } = req.query;

  if (nationality) {
    return res.status(StatusCodes.OK).json(db.getAllDriversFilltered(nationality));
  }

  return res.status(StatusCodes.OK).json(db.getAllDrivers());
}

export function getSpecificDriver(req, res) {
  const id = parseInt(req.params.id);
  const driver = db.getSpecificDriver(id);

  if (driver) {
    driver.Team = db.getSpecificTeam(driver.TeamID)
    driver.RacesWon = db.findRacesWon(id);
    res.status(StatusCodes.OK).json(driver);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Driver not found" });
  }
}

export function addNewDriver(req, res) {
  const { Name, Nationality, TeamID, RacingNumber, ImageLink } = req.body;
  const result = db.addNewDriver(Name, Nationality, TeamID, RacingNumber, ImageLink);

  if (result.changes > 0) {
    res.status(StatusCodes.CREATED).json({ message: "New driver added successfully" });
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Failed to add driver" });
  }
}

export function updateDriver(req, res) {
  const id = parseInt(req.params.id);
  const { Name, Nationality, TeamID, RacingNumber, ImageLink } = req.body;
  const result = db.updateDriver(Name, Nationality, TeamID, RacingNumber, ImageLink, id)

  if (result.changes > 0) {
    res.status(StatusCodes.OK).json({ message: "Driver updated successfully" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Driver not found" });
  }
}

export function deleteDriver(req, res) {
  const id = parseInt(req.params.id);
  const result = db.deleteDriver(id);

  if (result.changes > 0) {
    res.status(StatusCodes.OK).json({ message: "Driver deleted successfully" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Driver not found" });
  }
}

