// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express           = require('express'),    // call express
    app               = express();


  //Configure app to use passport

  var port = 9191;    // set our port

  app.use(express.static('.'));
  // START THE SERVER
  // =============================================================================
  app.listen(port);
  console.log('Magic happens on port ' + port);
