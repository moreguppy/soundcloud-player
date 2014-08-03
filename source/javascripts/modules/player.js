// -------------------------------------------------
//
// player.js
// 
// A look at the public soundcloud API
//
// -------------------------------------------------

(function() {

  "use strict";

  var Player = function() {

    var self = this;

    $(document).ready(function() {

      self.init();

    });

  };

  var s = {
    client_id: '6af6c0bb87a90c1096f671171c3893fe'
  };

  Player.prototype = {

    authenticate: function() {

      SC.initialize({
        client_id: s.client_id
      });

    },

    getData: function(url) {

      var self = this;

      var resolve_url = 'http://api.soundcloud.com/resolve.json?url=' + url + '&client_id=' + s.client_id;

      $.get(resolve_url, function(data) {
        self.streamTrack(data.id);
      });

    },

    streamTrack: function(id) {

      var self = this;

      var path = '/tracks/' + id;

      SC.stream(path, function(sound) {
        sound.play();
        console.log(sound);
        self.currentTrack = sound;
      });

    },

    events: function() {

      var self = this;

      // Play track

      $('.js-play-track').click(function() {

        var track_url = $(this).attr('data-track');

        self.authenticate();
        self.getData(track_url);

        return false;

      });

      // Pause track

      $('.js-pause-track').click(function() {

        var track_url = $(this).attr('data-track');

        self.currentTrack.pause();

        return false;

      });


    },

    init: function() {

      var self = this;

      self.events();

    }

  };

  new Player();

})();