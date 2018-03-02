$(document).ready(function () {

  $.ajax( {
    url: "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?",
    type: 'GET',
    dataType: 'jsonp',
    headers: {
      'Api-User-Agent': 'http://localhost:8080',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    success: function(data) {
      console.log(data);
      if (data.stream === null) {
        $('#FCC-live').css('visibility', 'hidden'),
        $('#FCC-info').text("Offline");
      }
    }
  })

  $.ajax( {
    url: "https://wind-bow.glitch.me/twitch-api/streams/geekandsundry?callback=?",
    type: 'GET',
    dataType: 'jsonp',
    headers: {
      'Api-User-Agent': 'http://localhost:8080',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    success: function(data) {
      console.log(data);
      if (data.stream === null) {
        $('#GaS-live').css('visibility', 'hidden'),
        $('#GaS-info').text("Offline");
      } else {
        $('#GaS-info').text(data.stream.channel.status)
      }
    }
  })



















})
