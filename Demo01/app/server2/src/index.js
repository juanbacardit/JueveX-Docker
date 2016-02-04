var express =  require('express');
var app = express();
var bodyParser =  require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get("/letraDNI/:dni", function(req, res){

  function getDniWithLetter (dni)
  {
    var cadena="TRWAGMYFPDXBNJZSQVHLCKET" ;
    var posicion = dni % 23;
    var letra = cadena.substring(posicion,posicion+1) ;
    return dni+'-'+letra;
  };

  var dni = req.params.dni;
  dni = getDniWithLetter(dni);
  res.json({'dni':dni});

});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
