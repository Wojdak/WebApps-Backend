import db from "../../database/db.js";

export function getAllTeams(req, res) {
  const teams = db.prepare("SELECT * FROM Team").all();
  res.status(200).json(teams);
}

export function getSpecificTeam(req, res) {
  const id = parseInt(req.params.id);
  const team = db.prepare("SELECT * FROM Team WHERE ID = ?").get(id);

  if (team) {
    res.status(200).json(team);
  } else {
    res.status(404).json({ error: "Team not found" });
  }
}

export function addNewTeam(req, res) {
  const { Name, TeamChief, LogoImageLink, TeamChiefImageLink } = req.body;
  const result = db.prepare(
    "INSERT INTO Team (Name, TeamChief, LogoImageLink, TeamChiefImageLink) VALUES (?, ?, ?, ?)"
  ).run(Name, TeamChief, LogoImageLink, TeamChiefImageLink);

  if (result.changes > 0) {
    res.status(201).json({ message: "New team added successfully" });
  } else {
    res.status(500).json({ error: "Failed to add team" });
  }
}

export function updateTeam(req, res) {
  const id = parseInt(req.params.id);
  const { Name, TeamChief, LogoImageLink, TeamChiefImageLink } = req.body;
  const result = db.prepare(
    "UPDATE Team SET Name = ?, TeamChief = ?, LogoImageLink = ?, TeamChiefImageLink = ? WHERE ID = ?"
  ).run(Name, TeamChief, LogoImageLink, TeamChiefImageLink, id);

  if (result.changes > 0) {
    res.status(200).json({ message: "Team updated successfully" });
  } else {
    res.status(404).json({ error: "Team not found" });
  }
}

export function deleteTeam(req, res) {
  const id = parseInt(req.params.id);

  db.prepare("BEGIN TRANSACTION").run();

  db.prepare("UPDATE Driver SET TeamID = NULL WHERE TeamID = ?").run(id);

  const result = db.prepare("DELETE FROM Team WHERE ID = ?").run(id);

  if (result.changes > 0) {
    db.prepare("COMMIT").run();
    res.status(200).json({ message: "Team deleted successfully" });
  } else {
    db.prepare("ROLLBACK").run();
    res.status(404).json({ error: "Team not found" });
  }
}