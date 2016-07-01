var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

router.get('/:type(home|about|experience|skill|contact)', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

router.get('/bundle.js', function(req, res) {
	res.sendFile(__dirname + '/dist/bundle.js');
});

router.get('/main.css', function(req, res) {
	res.sendFile(__dirname + '/dist/main.css');
});

router.get('/img/:file', function(req, res) {
	var file = req.params.file;
	res.sendFile(__dirname + '/dist/img/' + file);
});

router.get('/fontello.:ext', function(req, res) {
	var ext = req.params.ext;
	res.sendFile(__dirname + '/dist/fontello.' + ext);
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});

app.use('/', router);
