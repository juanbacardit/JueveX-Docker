var express =  require('express');
var app = express();
var bodyParser =  require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/alumnos', function(req, res) {
  var alumnos = fs.readFileSync("data/alumnos.json", 'utf-8');
  var obj = JSON.parse(alumnos);
  res.json(JSON.stringify(obj));
});

router.get("/alumnos/:id", function(req, res){
  var alumnoId = req.params.id;
  var alumnos = fs.readFileSync("data/alumnos.json", 'utf-8');
  var obj = JSON.parse(alumnos);
  var alumno = obj.alumnos.find((elem,index)=>{
    console.log(elem.id);
    return elem.id==alumnoId;
  });
  res.json(JSON.stringify(alumno));
});

router.get('/asignaturas', function(req, res) {
  var asignaturas = fs.readFileSync("data/asignaturas.json", 'utf-8');
  var obj = JSON.parse(asignaturas);
  res.json(JSON.stringify(obj));
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
