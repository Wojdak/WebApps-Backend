let teams = [
  {
    ID: 1,
    Name: "Team 1",
    TeamChief: "Team Chief 1",
    Drivers: [],
    LogoImageLink: "team1_logo.png",
    TeamChiefImageLink: "team1_chief.png",
  },
];

export function getAllTeams(req, res) {
  res.status(200).json(teams);
}

export function getSpecificTeam(req, res) {
  const id = parseInt(req.params.id);
  const team = teams.find((t) => t.ID === id);
  if (team) {
    res.status(200).json(team);
  } else {
    res.status(404).json({ error: "Team not found" });
  }
}

export function addNewTeam(req, res) {
  const newTeam = req.body;
  newTeam.ID = teams.length + 1;
  newTeam.Drivers = [];
  teams.push(newTeam);

  if (newTeam.ID) {
    res.status(201).json({ message: "New team added successfully" });
  } else {
    res.status(500).json({ error: "Failed to add team" });
  }
}

export function updateTeam(req, res) {
  const id = parseInt(req.params.id);
  const updatedTeam = req.body;
  const teamIndex = teams.findIndex((t) => t.ID === id);
  if (teamIndex !== -1) {
    teams[teamIndex] = updatedTeam;
    res.status(200).json({ message: "Team updated successfully" });
  } else {
    res.status(404).json({ error: "Team not found" });
  }
}

export function deleteTeam(req, res) {
  const id = parseInt(req.params.id);
  const teamIndex = teams.findIndex((t) => t.ID === id);
  if (teamIndex !== -1) {
    teams.splice(teamIndex, 1);
    res.status(200).json({ message: "Team deleted successfully" });
  } else {
    res.status(404).json({ error: "Team not found" });
  }
}
