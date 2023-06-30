export const createTeamTableQuery = 
    `CREATE TABLE IF NOT EXISTS Team (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT,
        TeamChief TEXT,
        LogoImageLink TEXT,
        TeamChiefImageLink TEXT
        );`;

export const createDriverTableQuery =
    `CREATE TABLE IF NOT EXISTS Driver (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT,
        Nationality TEXT,
        TeamID INTEGER,
        RacingNumber INTEGER,
        ImageLink TEXT,
        FOREIGN KEY (TeamID) REFERENCES Team(ID)
        );`;

export const createRaceTableQuery = 
    `CREATE TABLE IF NOT EXISTS Race (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        RaceName TEXT,
        CircuitName TEXT,
        Country TEXT,
        NumberOfLaps INTEGER,
        Date TEXT,
        WinnerID INTEGER NULL,
        ImageLink TEXT,
        FOREIGN KEY (WinnerID) REFERENCES Driver(ID)
        );`;

export const countTeamsQuery = `SELECT COUNT(ID) as count FROM Team`;
export const countDriversQuery = `SELECT COUNT(ID) as count FROM Driver`;
export const countRacesQuery =  `SELECT COUNT(ID) as count FROM Race`;

export const getAllDriversQuery = `SELECT * FROM Driver`;
export const getAllDriversFilteredQuery = `SELECT * FROM Driver WHERE Nationality = ?`;
export const getSpecificDriverQuery = `SELECT * FROM Driver WHERE ID = ?`
export const addNewDriverQuery = `INSERT INTO Driver (Name, Nationality, TeamID, RacingNumber, ImageLink) VALUES (?, ?, ?, ?, ?)`;
export const updateDriverQuery = `UPDATE Driver SET Name = ?, Nationality = ?, TeamID = ?, RacingNumber = ?, ImageLink = ? WHERE ID = ?`;
export const deleteDriverQuery = `DELETE FROM Driver WHERE ID = ?`;
export const updateRaceWhenDeletingDriverQuery = `UPDATE Race SET WinnerID = NULL WHERE WinnerID = ?`;
export const findDriversQuery = `SELECT * FROM Driver WHERE TeamID = ?`;

export const getAllTeamsQuery = `SELECT * FROM Team`;
export const getAllTeamsFilteredQuery = `SELECT * FROM Team WHERE TeamChief = ? `;
export const getSpecificTeamQuery = `SELECT * FROM Team WHERE ID = ?`;
export const addNewTeamQuery = `INSERT INTO Team (Name, TeamChief, LogoImageLink, TeamChiefImageLink) VALUES (?, ?, ?, ?)`;
export const updateTeamQuery = `UPDATE Team SET Name = ?, TeamChief = ?, LogoImageLink = ?, TeamChiefImageLink = ? WHERE ID = ?`;
export const deleteTeamQuery = `DELETE FROM Team WHERE ID = ?`;
export const updateDriverWhenDeletingTeamQuery = `UPDATE Driver SET TeamID = NULL WHERE TeamID = ?`;


export const getAllRacesQuery = `SELECT * FROM Race`;
export const getAllRacesFilteredQuery = `SELECT * FROM Race WHERE Country = ?`;
export const getSpecificRaceQuery = `SELECT * FROM Race WHERE ID = ?`;
export const addNewRaceQuery = `INSERT INTO Race (RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink) VALUES (?, ?, ?, ?, ?, ?, ?)`;
export const updateRaceQuery = `UPDATE Race SET RaceName = ?, CircuitName = ?, Country = ?, NumberOfLaps = ?, Date = ?, WinnerID = ?, ImageLink = ? WHERE ID = ?`;
export const deleteRaceQuery = `DELETE FROM Race WHERE ID = ?`;
export const findRacesQuery = `SELECT * FROM Race WHERE WinnerID = ?`;