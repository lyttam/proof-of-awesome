var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

router.get('/bundle.js', function(req, res) {
	res.sendFile(__dirname + '/dist/bundle.js');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});

app.use('/', router);
