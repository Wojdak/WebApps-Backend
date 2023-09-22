# CRUD Backend written in Node.js using SQLite database

This project was created for academic purposes as a final project for the Web Application class.

## Getting Started

To start the application run `npm install` and then `npm run start` in the terminal.

## Endpoints
1. **Driver**
    - GET /drivers: Retrieve a list of all drivers.
    - GET /drivers/{id}: Retrieve driver with the given ID.
    - GET /drivers?nationality=French: Filter the results by the nationality of a driver
    - POST /drivers: Create a new driver.
    
      Example data to add to the body of a request:
    
        ```
        {
        "Name": "Alex Albon",  
        "Nationality": "Thai",  
        "RacingNumber": 23,   
        "ImageLink": "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/albon.jpg.img.1920.medium.jpg/1689253984120.jpg"
        }
        ```
    - PUT /drivers/{id}: Update details of a specific driver by ID (requires a body like in POST).
    - DELETE /drivers/{id}: Delete driver with the given ID.

2. **Race**
    - GET /races: Retrieve a list of all races.
    - GET /races/{id}: Retrieve race with the given ID.
    - GET /races?country=Belgium: Filter the results by the country of the race
    - POST /races: Create a new race.
    
      Example data to add to the body of a request:
    
        ```
       {
        "RaceName": "Mexican Grand Prix",
        "CircuitName": "Autódromo Hermanos Rodríguez",
        "Country": "Mexico",
        "NumberOfLaps": 72,
        "Date": "2023-10-29",
        "ImageLink": "https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Mexico%20carbon.png.transform/3col/image.png"
        }
        ```
    - PUT /races/{id}: Update details of a specific race by ID (requires a body like in POST).
    - DELETE /races/{id}: Delete race with the given ID.
      
2. **Team**
    - GET /teams: Retrieve a list of all teams.
    - GET /teams/{id}: Retrieve team with the given ID.
    - GET /teams?teamChief="Christian Horner": Filter the results by the Team Principal of the team
    - POST /teams: Create a new team.
    
      Example data to add to the body of a request:
    
        ```
        {
        "Name": "Williams Racing",
        "TeamChief": "James Vowles",
        "LogoImageLink": "https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/team%20logos/williams%20blue.jpg",
        "TeamChiefImageLink": "https://article-imgs.scribdassets.com/crn78l4u8b9zz58/images/fileA1VMR71M.jpg"
        }
        ```
    - PUT /teams/{id}: Update details of a specific team by ID (requires a body like in POST).
    - DELETE /teams/{id}: Delete race with the given ID.
