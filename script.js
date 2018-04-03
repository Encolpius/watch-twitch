$(document).ready(function() {

  var channels = [
    "freecodecamp",
    "geekandsundry",
    "shroud",
    "timthetatman",
    "esl_csgo"
  ]


  function apiInfo() {
    var descriptions = document.getElementsByClassName('description');
    var follower = document.getElementsByClassName('followers')
    var views = document.getElementsByClassName('views')
    var containers = document.getElementsByClassName('.channel-online')
    var onOrOff = document.querySelectorAll('h5')
    var container = document.getElementsByClassName('container')
    var logo = document.getElementsByClassName('twitch-logo')
    var i = descriptions.length;

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
          if (data.stream == null) {
            $(descriptions[i]).text('Offline')
            $(container[i]).addClass('offline')
          } else {
            $(logo[i]).attr("src", data.stream.channel.logo);
            $(container[i]).addClass('online');
            $(descriptions[i]).text(data.stream.channel.status);
            $(follower[i]).text(data.stream.channel.followers);
            $(views[i]).text(data.stream.channel.views);
            $(onOrOff[i]).text('Now Online!')
          }
        }
      })
    })
  }

  $('#button-off').click(function() {
    $('.offline').show();
    $('.online').hide();
  });

  $('#button-on').click(function() {
    $('.online').show();
    $('.offline').hide();
  });

  $('#button-all').click(function() {
    $('.wrapper').children().show();
  })

  apiInfo()


});
