var fpl = require('./index.js');
var mysql = require('mysql');
var config = require('../config.js');

var connection = mysql.createConnection({
  host     : config.database.host,
  user     : config.database.user,
  password : config.database.password,
  database : config.database.database
});

var profiles = [];
for(var i = 1; i < config.options.profiles; i++){
  var profile = "https://fantasy.premierleague.com/drf/entry/"+i;
  profiles.push(profile)
}

profiles = profiles.reverse();

setInterval(function() {
  var currentProfile = profiles.pop();
  fpl.profiles(currentProfile,function(data){
    data = JSON.parse(data);
    var profile= {
      profile_id: data.entry.id,
      player_first_name: data.entry.player_first_name,
      player_last_name: data.entry.player_last_name,
      player_region_id: data.entry.player_region_id,
      player_region_short_iso: data.entry.player_region_short_iso,
      summary_overall_points: data.entry.summary_overall_points,
      summary_overall_rank: data.entry.summary_overall_rank,
      total_transfers: data.entry.total_transfers,
      team_name: data.entry.name,
      bank: data.entry.bank,
      value: data.entry.value,
      favourite_team: data.entry.favourite_team
    }

    var date = new Date();
    var query = connection.query('INSERT INTO profiles SET ?', profile, function(err, result) {
      if(err) throw(err);
    });
    console.log(date+": profile inserted:" +query.sql);
  });
}, 250);