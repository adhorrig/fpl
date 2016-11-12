var fpl = require('./index.js');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'fpl'
});

var profiles = [];
for(var i = 1; i < 10000; i++){ //need to eventually do 400000 profiles
  var profile = "https://fantasy.premierleague.com/drf/entry/"+i;
  profiles.push(profile)
}

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

    var query = connection.query('INSERT INTO profiles SET ?', profile, function(err, result) {
      if(err) throw(err);
    });
    console.log("profile inserted:" +query.sql);
  });
}, 1000);



// connection.end();
