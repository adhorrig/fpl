var fpl = require('./index.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'fpl'
});

fpl.players(function(data){
  data = JSON.parse(data);
  console.log(data.teams);

  for(var i = 0; i < data.teams.length; i++){
    console.log(data.elements[i].id)
    var team = {
      team_id: data.teams[i].id,
      code: data.teams[i].code,
      name: data.teams[i].name,
      short_name: data.teams[i].name,
      strength: data.teams[i].strength,
      strength_overall_home: data.teams[i].strength_overall_home,
      strength_overall_away: data.teams[i].strength_overall_away,
      strength_attack_home: data.teams[i].strength_attack_home,
      strength_attack_away: data.teams[i].strength_attack_away,
      strength_defence_home: data.teams[i].strength_defence_home,
      strength_defence_away: data.teams[i].strength_defence_away,
      team_division: data.teams[i].team_division
    }

    var query = connection.query('INSERT INTO teams SET ?', team, function(err, result) {
      if(err) throw(err);
    });
    console.log(query.sql);
  }
});
