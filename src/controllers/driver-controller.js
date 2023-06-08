let drivers = [
  {
    ID: 1,
    Name: "Driver 1",
    Nationality: "Nationality 1",
    Team: null,
    RacingNumber: 1,
    RacesWon: [],
    ImageLink: "driver1_image.png",
  },
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
  newDriver.Team = null;
  newDriver.RacesWon = [];
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
