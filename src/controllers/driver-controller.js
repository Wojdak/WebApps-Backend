import db from "../../database/db.js";

export function getAllDrivers(req, res) {
  const { nationality } = req.query;
  let query = "SELECT * FROM Driver";

  if (nationality) {
    query = `SELECT * FROM Driver WHERE Nationality = '${nationality}'`;
  }

  const drivers = db.prepare(query).all();
  res.status(200).json(drivers);
}

export function getSpecificDriver(req, res) {
  const id = parseInt(req.params.id);
  const driver = db.prepare("SELECT * FROM Driver WHERE ID = ?").get(id);

  if (driver) {
    res.status(200).json(driver);
  } else {
    res.status(404).json({ error: "Driver not found" });
  }
}

export function addNewDriver(req, res) {
  const { Name, Nationality, TeamID, RacingNumber, ImageLink } = req.body;
  const result = db
    .prepare(
      "INSERT INTO Driver (Name, Nationality, TeamID, RacingNumber, ImageLink) VALUES (?, ?, ?, ?, ?)"
    )
    .run(Name, Nationality, TeamID, RacingNumber, ImageLink);

  if (result.changes > 0) {
    res.status(201).json({ message: "New driver added successfully" });
  } else {
    res.status(500).json({ error: "Failed to add driver" });
  }
}

export function updateDriver(req, res) {
  const id = parseInt(req.params.id);
  const { Name, Nationality, TeamID, RacingNumber, ImageLink } = req.body;
  const result = db
    .prepare(
      "UPDATE Driver SET Name = ?, Nationality = ?, TeamID = ?, RacingNumber = ?, ImageLink = ? WHERE ID = ?"
    )
    .run(Name, Nationality, TeamID, RacingNumber, ImageLink, id);

  if (result.changes > 0) {
    res.status(200).json({ message: "Driver updated successfully" });
  } else {
    res.status(404).json({ error: "Driver not found" });
  }
}

export function deleteDriver(req, res) {
  const id = parseInt(req.params.id);

  db.prepare("BEGIN TRANSACTION").run();

  db.prepare("UPDATE Race SET WinnerID = NULL WHERE WinnerID = ?").run(id);

  const result = db.prepare("DELETE FROM Driver WHERE ID = ?").run(id);

  if (result.changes > 0) {
    db.prepare("COMMIT").run();
    res.status(200).json({ message: "Driver deleted successfully" });
  } else {
    db.prepare("ROLLBACK").run();
    res.status(404).json({ error: "Driver not found" });
  }
}

