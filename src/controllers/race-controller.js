import db from "../../database/db.js";

export function getAllRaces(req, res) {
  const { country } = req.query;
  let query = "SELECT * FROM Race";

  if (country) {
    query = `SELECT * FROM Race WHERE Country = '${country}'`;
  }

  const races = db.prepare(query).all();
  res.status(200).json(races);
}

export function getSpecificRace(req, res) {
  const id = req.params.id;
  const race = db.prepare("SELECT * FROM Race WHERE ID = ?").get(id);

  if (race) {
    res.status(200).json(race);
  } else {
    res.status(404).json({ error: "Race not found" });
  }
}

export function addNewRace(req, res) {
  const { RaceName, CircuitName, Country, NumberOfLaps, Date, ImageLink } = req.body;
  const result = db.prepare(
    "INSERT INTO Race (RaceName, CircuitName, Country, NumberOfLaps, Date, Winner, ImageLink) VALUES (?, ?, ?, ?, ?, ?, ?)"
  ).run(RaceName, CircuitName, Country, NumberOfLaps, Date, null, ImageLink);

  if (result.changes > 0) {
    res.status(201).json({ message: "New race added successfully" });
  } else {
    res.status(500).json({ error: "Failed to add race" });
  }
}

export function updateRace(req, res) {
  const id = req.params.id;
  const { RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink } = req.body;
  const result = db.prepare(
    "UPDATE Race SET RaceName = ?, CircuitName = ?, Country = ?, NumberOfLaps = ?, Date = ?, WinnerID = ?, ImageLink = ? WHERE ID = ?"
  ).run(RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink, id);

  if (result.changes > 0) {
    res.status(200).json({ message: "Race updated successfully" });
  } else {
    res.status(404).json({ error: "Race not found" });
  }
}

export function deleteRace(req, res) {
  const id = req.params.id;
  const result = db.prepare("DELETE FROM Race WHERE ID = ?").run(id);

  if (result.changes > 0) {
    res.status(200).json({ message: "Race deleted successfully" });
  } else {
    res.status(404).json({ error: "Race not found" });
  }
}
