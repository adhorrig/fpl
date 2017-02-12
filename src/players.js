const fpl = require('./index.js');
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection({
  host     : config.database.host,
  user     : config.database.user,
  password : config.database.password,
  database : config.database.database
});

fpl.players((data) => {
  data = JSON.parse(data);

  for(var i = 0; i < data.elements.length; i++){
    let player = {
      player_id: data.elements[i].id,
      web_name: data.elements[i].web_name,
      team_code: data.elements[i].team_code,
      code: data.elements[i].code,
      first_name: data.elements[i].first_name,
      second_name: data.elements[i].second_name,
      goals_scored: data.elements[i].goals_scored,
      assists: data.elements[i].assists,
      clean_sheets: data.elements[i].clean_sheets,
      goals_conceded: data.elements[i].goals_conceded,
      own_goals: data.elements[i].own_goals,
      penalties_saved: data.elements[i].penalties_saved,
      penalties_missed: data.elements[i].penalties_missed,
      points_per_game: data.elements[i].points_per_game,
    }

    let query = connection.query('INSERT INTO players SET ?', player, (err, result) => {
      if(err) throw(err);
    });
    console.log(query.sql);
  }
});