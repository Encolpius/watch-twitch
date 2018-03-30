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
        $('#GaS-live').addClass('hidden');
        $('#GaS-info').text("Offline");

      } else {
        $('#GaS-info').text(data.stream.channel.status);
        $('#GaS-live').addClass('active');
        $('GaS-container').css('background-image', 'url(' + data.stream.channel.profile_banner + ')');
      }
    }
  })

  $.ajax( {
    url: "https://wind-bow.glitch.me/twitch-api/streams/shroud?callback=?",
    type: 'GET',
    dataType: 'jsonp',
    headers: {
      'Api-User-Agent': 'http://localhost:8080',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    success: function(data) {
      console.log(data);
      if (data.stream === null) {
        $('#shroud-info').text("Offline");
        $('#shroud-live').addClass('hidden');
      } else {
        $('#shroud-info').text(data.stream.channel.status);
        $('#shroud-live').addClass('active');
        $('#shroud-views').text(data.stream.channel.views)
        $('#shroud-followers').text(data.stream.channel.followers)
      }
    }
  })

  $.ajax( {
    url: "https://wind-bow.glitch.me/twitch-api/streams/timthetatman?callback=?",
    type: 'GET',
    dataType: 'jsonp',
    headers: {
      'Api-User-Agent': 'http://localhost:8080',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    success: function(data) {
      console.log(data);
      if (data.stream === null) {
        $('#tim-info').text("Offline");
        $('#tim-live').addClass('hidden');
      } else {
        $('#tim-info').text(data.stream.channel.status);
        $('#tim-live').addClass('active');
        $('#tim-views').text(data.stream.channel.views)
        $('#tim-followers').text(data.stream.channel.followers)
      }
    }
  })

  $.ajax( {
    url: "https://wind-bow.glitch.me/twitch-api/streams/esl_csgo?callback=?",
    type: 'GET',
    dataType: 'jsonp',
    headers: {
      'Api-User-Agent': 'http://localhost:8080',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    success: function(data) {
      console.log(data);
      if (data.stream === null) {
        $('#esl-info').text("Offline");
        $('#esl-live').addClass('hidden');
      } else {
        $('#esl-info').text(data.stream.channel.status);
        $('#esl-live').addClass('active');
        $('#esl-views').text(data.stream.channel.views)
        $('#esl-followers').text(data.stream.channel.followers)
      }
    }
  })















})
