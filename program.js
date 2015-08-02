var express = require('express');
var app = express();

var React = require('react'); 
var DOM = React.DOM; 
var body = DOM.body; 
var div = DOM.div; 
var script = DOM.script;

var browserify = require('browserify');

require('node-jsx').install(); 
var TodoBox = require('./components/TodoBox.jsx');

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

require('node-jsx').install();

var router = express.Router();

var data = [
	{title: 'Shopping', detail: process.argv[3]},
	{title: 'Hair cut', detail: process.argv[4]}
];

router.get('/', function(req, res, next) {
  // res.render('index', {data: data});
  var initialData = JSON.stringify(data); 
  var markup = React.renderToString(React.createElement(TodoBox, {data: data}));

  res.setHeader('Content-Type', 'text/html'); 

  var html = React.renderToStaticMarkup(body(null, 
      div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}), 
      script({id: 'initial-data', 
              type: 'text/plain', 
              'data-json': initialData 
            }), 
      script({src: '/bundle.js'}) 
  )); 

  res.end(html); 
  next();
});

router.get('/data', function(req, res, next) {
  res.end(data);
  next();
});

app.use('/bundle.js', function(req, res) { 
  res.setHeader('content-type', 'application/javascript'); 
  browserify('./app.js') 
    .transform('reactify') 
    .bundle() 
    .pipe(res); 
});

app.use(router);

app.listen(app.get('port'), function() {});