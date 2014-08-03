// -------------------------------------------------
//
// welcome.js
// 
// Welcome message to check everything is working
//
// -------------------------------------------------


(function() {

  "use strict";

  var Welcome = function() {

    var self = this;

    $(document).ready(function() {

      self.init();

    });

  };

  Welcome.prototype = {

    // -------------------------------------------------
    //
    // Welcome message to make sure it is all running properly
    // 
    // -------------------------------------------------

    init: function() {

      var self = this;

      console.log('Welcome to the universe. ');

      console.log(Modernizr);

      if (window.jQuery) {
        // jQuery is loaded  
        console.log('jQuery has loaded');
      } else {
        // jQuery is not loaded
        console.log('jQuery has not loaded');
      }

      $('.js-test-transit').transition({
        opacity: 0.2
      }, 1000);

    }

  };

  new Welcome();

})();