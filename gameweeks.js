var fpl = require('./index.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'fpl'
});

for(var i = 0; i < 15; i++){
  fpl.gameweeks(i,function(data){
    data = JSON.parse(data);
    console.log(data);

    var post= {
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

    var query = connection.query('INSERT INTO gameweeks SET ?', post, function(err, result) {
      if(err) throw(err);
    });
    console.log(query.sql);
  });
}
