var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser');

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);