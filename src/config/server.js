var
  express = require('express'),
  server = express(),
  allowCors = require('./cors')
  bodyParser = require('body-parser'),
  port = 3003;

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(process.env.PORT || port, function() {
  console.log(`Backend is ruinning in port ${process.env.PORT || port}`)
});

module.exports = server