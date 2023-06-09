let drivers = [
  {
    ID: 1,
    Name: "Max Verstappen",
    Nationality: "Dutch",
    Team: "RedBull",
    RacingNumber: 1,
    RacesWon: ["Belgium Grandprix", "Monaco Grandprix", "Austrian Grandprix"],
    ImageLink: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1677069646195.jpg",
  },
  {
    ID: 2,
    Name: "Lewis Hamilton",
    Nationality: "British",
    Team: "Mercedes",
    RacingNumber: 44,
    RacesWon: ["Spanish Grandprix", "Canadian Grandprix"],
    ImageLink: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg",
  }
];

export function getAllDrivers(req, res) {
  const { nationality } = req.query;
  let filteredDrivers = drivers;
  if (nationality) {
    filteredDrivers = drivers.filter((d) => d.Nationality === nationality);
  }
  res.status(200).json(filteredDrivers);
}

export function getSpecificDriver(req, res) {
  const id = parseInt(req.params.id);
  const driver = drivers.find((d) => d.ID === id);
  if (driver) {
    res.status(200).json(driver);
  } else {
    res.status(404).json({ error: "Driver not found" });
  }
}

export function addNewDriver(req, res) {
  const newDriver = req.body;
  newDriver.ID = drivers.length + 1;
  drivers.push(newDriver);

  if (newDriver.ID) {
    res.status(201).json({ message: "New driver added successfully" });
  } else {
    res.status(500).json({ error: "Failed to add driver" });
  }
}

export function updateDriver(req, res) {
  const id = parseInt(req.params.id);
  const updatedDriver = req.body;
  const driverIndex = drivers.findIndex((d) => d.ID === id);
  if (driverIndex !== -1) {
    drivers[driverIndex] = updatedDriver;
    res.status(200).json({ message: "Driver updated successfully" });
  } else {
    res.status(404).json({ error: "Driver not found" });
  }
}

export function deleteDriver(req, res) {
  const id = parseInt(req.params.id);
  const driverIndex = drivers.findIndex((d) => d.ID === id);
  if (driverIndex !== -1) {
    drivers.splice(driverIndex, 1);
    res.status(200).json({ message: "Driver deleted successfully" });
  } else {
    res.status(404).json({ error: "Driver not found" });
  }
}
