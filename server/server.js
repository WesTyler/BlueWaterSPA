var express         = require('express'),
    path            = require('path'),
    routes          = require('./routes'),
    bodyParser      = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname + '/../dist')));
app.use(bodyParser.json());
routes(app);

app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on port', process.env.PORT || 3000)
});