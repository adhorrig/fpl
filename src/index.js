var request = require('request');
module.exports = {
  gameweeks: (week, fn) => {
    const endPointGameWeeks = `https://fantasy.premierleague.com/drf/entry/1/event/${week}/picks`
    request({method: "get", url: endPointGameWeeks}, (err, resp, body) => {
      if(body.error) return console.error(body.error);
      fn(body);
    })
  },
  players: (fn) => {
    const endPointPlayers = "https://fantasy.premierleague.com/drf/bootstrap-static";
    request({method: "get", url: endPointPlayers}, (err, resp, body) => {
      if(body.error) return console.error(body.error);
      fn(body);
    })
  },
  profiles: (profile, fn) => {
    request({method: "get", url: profile}, (err, resp, body) => {
      if(body.error) return console.error(body.error);
      fn(body);
    })
  },
  live: (line, fn) => {
    request({method: "get", url: live}, (err, resp, body) => {
      if(body.error) return console.error(body.error);
      fn(body);
    })
  }
}
