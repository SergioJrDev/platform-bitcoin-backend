var
  express = require('express'),
  server = express(),
  allowCors = require('./cors')
  bodyParser = require('body-parser'),
  port = 80;

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(process.env.PORT || 3003, function() {
  console.log(`Backend is ruinning in port ${process.env.PORT || 80}`)
});

module.exports = server