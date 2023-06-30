import * as db from '../../database/database-helper.js';
import {StatusCodes} from "http-status-codes";


export function getAllTeams(req, res) {
  const { teamChief } = req.query;

  if(teamChief){
    return res.status(StatusCodes.OK).json(db.getAllTeamsFilltered(teamChief));
  }

  return res.status(StatusCodes.OK).json(db.getAllTeams());
}

export function getSpecificTeam(req, res) {
  const id = parseInt(req.params.id);
  const team = db.getSpecificTeam(id);

  if (team) {
    team.Drivers = db.findDrivers(id);
    console.log(team);
    res.status(StatusCodes.OK).json(team);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
  }
}

export function addNewTeam(req, res) {
  const { Name, TeamChief, LogoImageLink, TeamChiefImageLink } = req.body;
  const result = db.addNewTeam(Name, TeamChief, LogoImageLink, TeamChiefImageLink);

  if (result.changes > 0) {
    res.status(StatusCodes.CREATED).json({ message: "New team added successfully" });
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Failed to add team" });
  }
}

export function updateTeam(req, res) {
  const id = parseInt(req.params.id);
  const { Name, TeamChief, LogoImageLink, TeamChiefImageLink } = req.body;
  const result = db.updateTeam(Name, TeamChief, LogoImageLink, TeamChiefImageLink, id);

  if (result.changes > 0) {
    res.status(StatusCodes.OK).json({ message: "Team updated successfully" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
  }
}

export function deleteTeam(req, res) {
  const id = parseInt(req.params.id);

  const result = db.deleteTeam(id);

  if (result.changes > 0) {
    res.status(StatusCodes.OK).json({ message: "Team deleted successfully" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Team not found" });
  }
}