const fpl = require('./index.js');
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection({
  host     : config.database.host,
  user     : config.database.user,
  password : config.database.password,
  database : config.database.database
});

for(var i = 0; i < config.options.gameweeks; i++){
  fpl.gameweeks(i, (data) => {
    data = JSON.parse(data);

    let post= {
      gameweek_id: data.event.id,
      name: data.event.name,
      event: data.entry_history.event,
      average_entry_score: data.event.average_entry_score,
      highest_scoring_entry: data.event.highest_scoring_entry,
      highest_score: data.event.highest_score,
      is_previous: data.event.is_previous,
      is_current: data.event.is_current,
      is_next: data.event.is_next,
      deadline_time_epoch: data.event.deadline_time_epoch,
      deadline_time_game_offset: data.event.deadline_time_game_offset,
      deadline_time_formatted: data.event.deadline_time_formatted
    }

    let query = connection.query('INSERT INTO gameweeks SET ?', post, (err, result) => {
      if(err) throw(err);
    });
    console.log(query.sql);
  });
}
