// var requestHandler = require('./requestHandlers.js');

module.exports = function(app){
  app.post('/quote', function(req, res) {
    console.log('RECEIVED A QUOTE:\n', req.body);
    res.send({test: 'hi'});
  });
}