$(document).ready(function() {

  var channels = [
    "freecodecamp",
    "geekandsundry",
    "shroud",
    "timthetatman",
    "esl_csgo"
  ]

  $.each(channels, function(i, l) {

    // API Call to Twitch, gets each URL
    $.ajax( {
      url: "https://wind-bow.glitch.me/twitch-api/streams/"  + channels[i] + "?callback=?",
      type: "GET",
      dataType: "jsonp",
      headers: {
        'Api-User-Agent': 'http://localhost:8080',
        'Accept': 'application/vnd.twitchtv.v5+json'
      },

      // API Data Usage
      success: function(data) {
        console.log(data);
        if (data.stream === null) {
          $('.channel-online').addClass("offline")
          console.log(channels[i])
        } else {
          $('.description').text(data.stream.channel.status);
          $('.followers').text(data.stream.channel.followers);
          $('.views').text(data.stream.channel.views);
        }
      }
    })
  })

});
