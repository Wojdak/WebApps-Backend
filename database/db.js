import Database from "better-sqlite3";

let db;
try {
  db = new Database("database/data.sqlite");
} catch (e) {
  console.error("Error while initializing the database!", e);
  throw e;
}

function createTables() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS Team (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Name TEXT,
      TeamChief TEXT,
      LogoImageLink TEXT,
      TeamChiefImageLink TEXT
    );

    CREATE TABLE IF NOT EXISTS Driver (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Name TEXT,
      Nationality TEXT,
      TeamID INTEGER,
      RacingNumber INTEGER,
      ImageLink TEXT,
      FOREIGN KEY (TeamID) REFERENCES Team(ID)
    );

    CREATE TABLE IF NOT EXISTS Race (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      RaceName TEXT,
      CircuitName TEXT,
      Country TEXT,
      NumberOfLaps INTEGER,
      Date TEXT,
      WinnerID INTEGER NULL,
      ImageLink TEXT,
      FOREIGN KEY (WinnerID) REFERENCES Driver(ID)
    );
  `);
}

function seedData() {
  const teamCount = db
    .prepare("SELECT COUNT(*) as count FROM Team")
    .get().count;
  if (teamCount === 0) {
    db.prepare(
      "INSERT INTO Team (Name, TeamChief, LogoImageLink, TeamChiefImageLink) VALUES (?, ?, ?, ?)"
    ).run("Mercedes", "Toto Wolff", "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes.jpg", "https://images.ctfassets.net/1fvlg6xqnm65/j0ErF5ayGlWVEyG7d3Ht1/f75a14752f7063503b00ee39f3f12d44/Toto_Wolff_Header__1_.png?w=3840&q=80");

    db.prepare(
      "INSERT INTO Team (Name, TeamChief, LogoImageLink, TeamChiefImageLink) VALUES (?, ?, ?, ?)"
    ).run("Red Bull Racing", "Christian Horner", "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg", "https://www.fia.com/sites/default/files/styles/content_details/public/news/main_image/img13.jpg?itok=S47h2YL2.jpeg");
  }

  const driverCount = db
    .prepare("SELECT COUNT(*) as count FROM Driver")
    .get().count;
  if (driverCount === 0) {
    db.prepare(
      "INSERT INTO Driver (Name, Nationality, TeamID, RacingNumber, ImageLink) VALUES (?, ?, ?, ?, ?)"
    ).run("Lewis Hamilton", "British", 1, 44, "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg");

    db.prepare(
      "INSERT INTO Driver (Name, Nationality, TeamID, RacingNumber, ImageLink) VALUES (?, ?, ?, ?, ?)"
    ).run("Max Verstappen", "Dutch", 2, 1, "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.640.medium.jpg/1677069646195.jpg");
  }

  const raceCount = db
    .prepare("SELECT COUNT(*) as count FROM Race")
    .get().count;
  if (raceCount === 0) {
    db.prepare(
      "INSERT INTO Race (RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink) VALUES (?, ?, ?, ?, ?, ?, ?)"
    ).run(
      "Monaco Grand Prix",
      "Circuit de Monaco",
      "Monaco",
      78,
      "2023-05-28",
      2,
      "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png.transform/3col/image.png"
    );

    db.prepare(
      "INSERT INTO Race (RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink) VALUES (?, ?, ?, ?, ?, ?, ?)"
    ).run(
      "Austrian Grand Prix",
      "Red Bull Ring",
      "Austria",
      71,
      "2023-06-25",
      null,
      "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Austria%20carbon.png.transform/3col/image.png"
    );
  }
}

createTables();
seedData();

export default db;
