import * as db from '../../database/database-helper.js';
import {StatusCodes} from "http-status-codes";

export function getAllRaces(req, res) {
  const { country } = req.query;

  if (country) {
    return res.status(StatusCodes.OK).json(db.getAllRacesFilltered(country));
  }

  return res.status(StatusCodes.OK).json(db.getAllRaces());
}

export function getSpecificRace(req, res) {
  const id = req.params.id;
  const race = db.getSpecificRace(id);

  if (race) {
    race.Winner = db.getSpecificDriver(race.WinnerID);
    res.status(StatusCodes.OK).json(race);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Race not found" });
  }
}

export function addNewRace(req, res) {
  const { RaceName, CircuitName, Country, NumberOfLaps, Date, ImageLink } = req.body;
  const result = db.addNewRace(RaceName, CircuitName, Country, NumberOfLaps, Date, ImageLink );

  if (result.changes > 0) {
    res.status(StatusCodes.CREATED).json({ message: "New race added successfully" });
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Failed to add race" });
  }
}

export function updateRace(req, res) {
  const id = req.params.id;
  const { RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink } = req.body;
  const result = db.updateRace(RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink, id);

  if (result.changes > 0) {
    res.status(StatusCodes.OK).json({ message: "Race updated successfully" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Race not found" });
  }
}

export function deleteRace(req, res) {
  const id = req.params.id;
  const result = db.deleteRace(id);

  if (result.changes > 0) {
    res.status(StatusCodes.OK).json({ message: "Race deleted successfully" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Race not found" });
  }
}
