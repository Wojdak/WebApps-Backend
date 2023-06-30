import Database from "better-sqlite3";
import * as queries from '../database/database-queries.js';

let db;
try {
  db = new Database("database/data.sqlite");
} catch (e) {
  console.error("Error while initializing the database!", e);
  throw e;
}

const initialData = [
    {
        "Name": "Red Bull Racing",
        "TeamChief": "Christian Horner",
        "LogoImageLink": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/red%20bull.jpg",
        "TeamChiefImageLink": "https://www.fia.com/sites/default/files/styles/content_details/public/news/main_image/img13.jpg?itok=S47h2YL2.jpeg",
        "Drivers": [
            {
                "Name": "Max Verstappen",
                "Nationality": "Dutch",
                "TeamID": null,
                "RacingNumber": 1,
                "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1920.medium.jpg/1677069646195.jpg",
                "RacesWon": [
                    {
                        "RaceName": "Bahrain Grand Prix",
                        "CircuitName": "Bahrain International Circuit",
                        "Country": "Bahrain",
                        "NumberOfLaps": 57,
                        "Date": "2023-03-05",
                        "WinnerID": null,
                        "ImageLink": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Bahrain%20carbon.png.transform/3col/image.png"
                    },
                      {
                        "RaceName": "Australian Grand Prix",
                        "CircuitName": "Albert Park Circuit",
                        "Country": "Australia",
                        "NumberOfLaps": 58,
                        "Date": "2023-04-02",
                        "WinnerID": null,
                        "ImageLink": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Australia%20carbon.png.transform/3col/image.png"
                    },
                    {
                        "RaceName": "Miami Grand Prix",
                        "CircuitName": "Miami International Autodrome",
                        "Country": "USA",
                        "NumberOfLaps": 57,
                        "Date": "2023-05-07",
                        "WinnerID": null,
                        "ImageLink": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245035/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Miami%20carbon.png.transform/3col/image.png"
                    }
                ]
            },
            {
                "Name": "Sergio Perez",
                "Nationality": "Mexican",
                "TeamID": null,
                "RacingNumber": 11,
                "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1920.medium.jpg/1677069773437.jpg",
                "RacesWon": [
                    {
                        "RaceName": "Belgian Grand Prix",
                        "CircuitName": "Circuit de Spa-Francorchamps",
                        "Country": "Belgium",
                        "NumberOfLaps": 44,
                        "Date": "2023-03-19",
                        "WinnerID": null,
                        "ImageLink": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Belgium%20carbon.png.transform/3col/image.png"
                    },
                    {
                        "RaceName": "Azerbaijan Grand Prix",
                        "CircuitName": "Baku City Circuit",
                        "Country": "Azerbaijan",
                        "NumberOfLaps": 51,
                        "Date": "2023-04-30",
                        "WinnerID": null,
                        "ImageLink": "https://media.formula1.com/image/upload/f_auto/q_auto/v1677245030/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Azerbaijan%20carbon.png.transform/3col/image.png"
                  }
                ]
            }
            
        ]
    },
    {
        "Name": "Mercedes",
        "TeamChief": "Toto Wolff",
        "LogoImageLink": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/mercedes.jpg",
        "TeamChiefImageLink": "https://images.ctfassets.net/1fvlg6xqnm65/j0ErF5ayGlWVEyG7d3Ht1/f75a14752f7063503b00ee39f3f12d44/Toto_Wolff_Header__1_.png?w=3840&q=80",
        "Drivers": [
            {
                "Name": "Lewis Hamilton",
                "Nationality": "British",
                "TeamID": null,
                "RacingNumber": 44,
                "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg",
                "RacesWon": [
                    {
                        "RaceName":"Monaco Grand Prix",
                        "CircuitName":"Circuit de Monaco",
                        "Country":"Monaco",
                        "NumberOfLaps":78,
                        "Date":"2023-05-28",
                        "WinnerID":null,
                        "ImageLink":"https://media.formula1.com/image/upload/f_auto/q_auto/v1677245032/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Monte%20Carlo%20carbon.png.transform/3col/image.png"
                    }
                ]
            },
            {
              "Name": "George Russell",
                "Nationality": "British",
                "TeamID": null,
                "RacingNumber": 63,
                "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/russell.jpg.img.1920.medium.jpg/1677069334466.jpg",
                "RacesWon": []
            }
        ]
    },
    {
        "Name": "Aston Martin",
        "TeamChief": "Mike Krack",
        "LogoImageLink": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/aston%20martin.jpg",
        "TeamChiefImageLink": "https://cdn-7.motorsport.com/images/amp/YBeaLBz2/s1000/mike-krack-team-principal-asto.jpg",
        "Drivers": [
            {
                "Name": "Fernando Alonso",
                "Nationality": "Spanish",
                "TeamID": null,
                "RacingNumber": 14,
                "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/alonso.jpg.img.1920.medium.jpg/1677244577162.jpg",
                "RacesWon": [
                  {
                    "RaceName": "Spanish Grand Prix",
                    "CircuitName": "Circuit de Barcelona-Catalunya",
                    "Country": "Spain",
                    "NumberOfLaps": 66,
                    "Date": "2023-06-04",
                    "WinnerID": null,
                    "ImageLink": "https://media.formula1.com/image/upload/f_auto/q_auto/v1680529432/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Spain%20carbon.png.transform/3col/image.png"
                  }
                ]
            },
            {
              "Name": "Lance Stroll",
                "Nationality": "Canadian",
                "TeamID": null,
                "RacingNumber": 18,
                "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/stroll.jpg.img.1920.medium.jpg/1677069453013.jpg",
                "RacesWon": []
            }
        ]
    },
    {
        "Name": "BWT Alpine",
        "TeamChief": "Otmar Szafnauer",
        "LogoImageLink": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/alpine.jpg",
        "TeamChiefImageLink": "https://cdn.racingnews365.com/_1800x945_crop_center-center_75_none/otmar-szafnauer-alpine-aston-martin-racingnews365.jpg?v=1681203639",
        "Drivers": [
            {
                "Name": "Pierre Gasly",
                "Nationality": "French",
                "TeamID": null,
                "RacingNumber": 10,
                "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/gasly.jpg.img.1920.medium.jpg/1676983081984.jpg",
                "RacesWon": []
            },
            {
              "Name": "Esteban Ocon",
                "Nationality": "French",
                "TeamID": null,
                "RacingNumber": 31,
                "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/ocon.jpg.img.1920.medium.jpg/1677069269007.jpg",
                "RacesWon": [
                  {
                    "RaceName": "Canadian Grand Prix",
                    "CircuitName": "Circuit Gilles-Villeneuve",
                    "Country": "Canada",
                    "NumberOfLaps": 70,
                    "Date": "2023-06-18",
                    "WinnerID": null,
                    "ImageLink": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Canada%20carbon.png.transform/3col/image.png"
                  }
                ]
            }
        ]
    }
]

db.prepare(queries.createTeamTableQuery).run();
db.prepare(queries.createDriverTableQuery).run();
db.prepare(queries.createRaceTableQuery).run();

function insertData() {
    const countResult = db.prepare(queries.countTeamsQuery).get();
    console.log(countResult);
  
    if (countResult['count'] === 0) {
      const insertTeam = db.prepare(queries.addNewTeamQuery);
      const insertDriver = db.prepare(queries.addNewDriverQuery);
      const insertRace = db.prepare(queries.addNewRaceQuery);
  
      for (const team of initialData) {
        const { lastInsertRowid: teamInserted } = insertTeam.run(
          team.Name,
          team.TeamChief,
          team.LogoImageLink,
          team.TeamChiefImageLink
        );
  
        console.log('Inserted Team ID:', teamInserted);
  
        if (team.Drivers && team.Drivers.length > 0) {
          for (const driver of team.Drivers) {
            const { lastInsertRowid: driverInserted } = insertDriver.run(
              driver.Name,
              driver.Nationality,
              teamInserted,
              driver.RacingNumber,
              driver.ImageLink
            );
  
            console.log('Inserted Driver ID:', driverInserted);
  
            if (driver.RacesWon && driver.RacesWon.length > 0) {
              for (const race of driver.RacesWon) {
                insertRace.run(
                  race.RaceName,
                  race.CircuitName,
                  race.Country,
                  race.NumberOfLaps,
                  race.Date,
                  driverInserted,
                  race.ImageLink
                );
  
                console.log('Inserted Race:', race.RaceName);
              }
            }
          }
        }
      }
    }
  }
  
insertData();
  
//Driver
export function getAllDrivers(){
    return db.prepare(queries.getAllDriversQuery).all();
}

export function getAllDriversFilltered(nationality){
    return db.prepare(queries.getAllDriversFilteredQuery).all(nationality);
}

export function getSpecificDriver(driverID){
    return db.prepare(queries.getSpecificDriverQuery).get(driverID);
}

export function findDrivers(teamID){
  return db.prepare(queries.findDriversQuery).all(teamID);
}

export function addNewDriver(Name, Nationality, TeamID, RacingNumber, ImageLink){
    return db.prepare(queries.addNewDriverQuery).run(Name, Nationality, TeamID, RacingNumber, ImageLink);
}

export function updateDriver(Name, Nationality, TeamID, RacingNumber, ImageLink, id) {
    return db.prepare(queries.updateDriverQuery).run(Name, Nationality, TeamID, RacingNumber, ImageLink, id);
}

export function deleteDriver(driverID){
    db.prepare(queries.updateRaceWhenDeletingDriverQuery).run(driverID);
    return db.prepare(queries.deleteDriverQuery).run(driverID);
}

//Team
export function getSpecificTeam(teamID) {
    return db.prepare(queries.getSpecificTeamQuery).get(teamID);
}

export function getAllTeams(){
  return db.prepare(queries.getAllTeamsQuery).all();
}

export function getAllTeamsFilltered(teamChief){
  return db.prepare(queries.getAllTeamsFilteredQuery).all(teamChief);
}

export function addNewTeam(Name, TeamChief, LogoImageLink, TeamChiefImageLink){
  return db.prepare(queries.addNewTeamQuery).run(Name, TeamChief, LogoImageLink, TeamChiefImageLink);
}

export function updateTeam(Name, TeamChief, LogoImageLink, TeamChiefImageLink, id){
  return db.prepare(queries.updateTeamQuery).run(Name, TeamChief, LogoImageLink, TeamChiefImageLink, id);
}

export function deleteTeam(teamID){
  db.prepare(queries.updateDriverWhenDeletingTeamQuery).run(teamID);
  return db.prepare(queries.deleteTeamQuery).run(teamID);
}

//Race
export function findRacesWon(driverID){
  return db.prepare(queries.findRacesQuery).all(driverID);
}

export function getAllRaces(){
  return db.prepare(queries.getAllRacesQuery).all();
}

export function getAllRacesFilltered(country){
  return db.prepare(queries.getAllRacesFilteredQuery).all(country);
}

export function getSpecificRace(raceID){
  return db.prepare(queries.getSpecificRaceQuery).get(raceID);
}

export function addNewRace(RaceName, CircuitName, Country, NumberOfLaps, Date, ImageLink){
  return db.prepare(queries.addNewRaceQuery).run(RaceName, CircuitName, Country, NumberOfLaps, Date, null, ImageLink);
}

export function updateRace(RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink, id ) {
  return db.prepare(queries.updateRaceQuery).run(RaceName, CircuitName, Country, NumberOfLaps, Date, WinnerID, ImageLink, id);
}

export function deleteRace(raceID){
  return db.prepare(queries.deleteRaceQuery).run(raceID);
}