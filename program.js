var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();

var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', '');
  next();
});

router.get('/task1', function(req, res, next) {
  res.render('task1', '');
  next();
});

app.use(router);

app.listen(app.get('port'), function() {});