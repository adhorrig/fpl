#FPL

A tool to extract data from [Fantasy Premier League.](https://fantasy.premierleague.com/a/home)


## Installation
The first step is to setup a database:

1. Create an empty database named 'fpl'.
2. Run ```sql/fpl_s016_12_20.sql``` inside the 'fpl' database. This will generate the schema for you such that the data can later be saved.

To extract the Fantasy Premier League data:

1. ```git clone https://github.com/adhorrig/fpl.git``` to download the tools for extraction.
2. ```cd fpl``` to move into the directory.
3. ```npm install``` to download the project dependencies from the node package manager.

## Running

1. Open ```config.js``` and enter your database connection details.
2. Enter integer values for ```options```.
    
    a. ```liveweeks``` is how many gameweeks of live player data you want.
    
    b. ```profiles``` is the number of profiles you want to download.
    
    c. ```gameweeks``` is the number of gameweek data that you want to download.
3. Run ```node live.js, players.js, profiles.js, teams.js, gameweeks.js``` to extract and save the data.

##The data.

The FPL API returns a lot more data than what is being saved here. I only saved what I needed for my project. Feel free to modify the SQL schema and add more to the parsed JSON to reflect the changes.
