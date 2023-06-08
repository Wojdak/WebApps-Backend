let races = [
  {
    ID: "1",
    RaceName: "Race 1",
    CircuitName: "Circuit 1",
    Country: "Country 1",
    NumberOfLaps: 10,
    Date: "2023-06-01",
    Winner: null,
    ImageLink: "race1_image.png",
  },
];

export function getAllRaces(req, res) {
  const { country } = req.query;
  let filteredRaces = races;
  if (country) {
    filteredRaces = races.filter((r) => r.Country === country);
  }
  res.status(200).json(filteredRaces);
}

export function getSpecificRace(req, res) {
  const id = req.params.id;
  const race = races.find((r) => r.ID === id);
  if (race) {
    res.status(200).json(race);
  } else {
    res.status(404).json({ error: "Race not found" });
  }
}

export function addNewRace(req, res) {
  const newRace = req.body;
  newRace.ID = String(races.length + 1);
  newRace.Winner = null;
  races.push(newRace);

  if (newRace.ID) {
    res.status(201).json({ message: "New race added successfully" });
  } else {
    res.status(500).json({ error: "Failed to add race" });
  }
}

export function updateRace(req, res) {
  const id = req.params.id;
  const updatedRace = req.body;
  const raceIndex = races.findIndex((r) => r.ID === id);
  if (raceIndex !== -1) {
    races[raceIndex] = updatedRace;
    res.status(200).json({ message: "Race updated successfully" });
  } else {
    res.status(404).json({ error: "Race not found" });
  }
}

export function deleteRace(req, res) {
  const id = req.params.id;
  const raceIndex = races.findIndex((r) => r.ID === id);
  if (raceIndex !== -1) {
    races.splice(raceIndex, 1);
    res.status(200).json({ message: "Race deleted successfully" });
  } else {
    res.status(404).json({ error: "Race not found" });
  }
}
